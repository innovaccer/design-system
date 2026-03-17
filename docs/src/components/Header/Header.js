import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'gatsby';
import { useHeaderItems } from '../../util/HeaderItems';
import { Link as MDSLink, Icon } from '@innovaccer/design-system';
import * as HomeIcons from '../../util/HomeIcons';
import { DocSearch } from '@docsearch/react';
import './Header.css';
import '@docsearch/css';
import './DocSearch.css';

const MenuIcons = ({ name }) => {
  const SvgIcons = HomeIcons[name] || (() => <div></div>);
  return <SvgIcons />;
};

const Header = ({ relativePagePath }) => {
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const itemRefs = useRef([]);
  const allItems = useHeaderItems();
  const [visibleCount, setVisibleCount] = useState(Infinity);
  const [measured, setMeasured] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  const navItems = allItems.filter((item) => {
    const isExternal = item.link.startsWith('http://') || item.link.startsWith('https://');
    return !isExternal;
  });

  const storybookItem = allItems.find((item) => {
    const isExternal = item.link.startsWith('http://') || item.link.startsWith('https://');
    return isExternal;
  });

  const checkActive = (label) => {
    const pagePath = relativePagePath.split('/');
    const pageSeparator = pagePath[1].split('-');
    const labelSeparator = label.split(' ');

    if (pagePath[1] === label.toLowerCase() || pagePath[2] === label.toLowerCase()) {
      return true;
    } else if (pageSeparator[0] === labelSeparator[0]?.toLowerCase() && pageSeparator[1] === labelSeparator[1]?.toLowerCase()) {
      return true;
    }

    return false;
  };

  const onClickHandler = () => {
    localStorage.removeItem('leftNavScrollPosition');
  };

  const isMobile = () => {
    const currURL = typeof window !== 'undefined' && window.location.pathname;
    return currURL && currURL.includes('mobile');
  };

  const handleNavigate = (link, mobileTab) => {
    const path = '/mobile' + link;
    if (isMobile() && mobileTab) {
      return path;
    } else {
      return link;
    }
  };

  function transformItems(items) {
    return items.map((item) => {
      const liveUrl = 'https://design.innovaccer.com/';

      item.url = window.location.origin.startsWith(liveUrl)
        ? item.url
        : item.url.replace(liveUrl, '/');

      return item;
    });
  }

  const MORE_BTN_WIDTH = 80;
  const cachedWidths = useRef([]);

  const measureNaturalWidths = useCallback(() => {
    cachedWidths.current = itemRefs.current.map((el) => {
      if (!el) return 0;
      const style = window.getComputedStyle(el);
      return el.getBoundingClientRect().width + parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    });
  }, []);

  const calculateVisibleItems = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    if (cachedWidths.current.length === 0) {
      measureNaturalWidths();
    }

    const availableWidth = navEl.getBoundingClientRect().width;
    let usedWidth = 0;
    let count = 0;

    for (let i = 0; i < cachedWidths.current.length; i++) {
      const itemWidth = cachedWidths.current[i];
      if (!itemWidth) continue;
      const tentative = usedWidth + itemWidth;

      if (i < navItems.length - 1) {
        if (tentative + MORE_BTN_WIDTH > availableWidth) break;
      } else {
        if (tentative > availableWidth) break;
      }
      usedWidth = tentative;
      count++;
    }

    setVisibleCount(count);
    setMeasured(true);
  }, [navItems.length, measureNaturalWidths]);

  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    measureNaturalWidths();
    calculateVisibleItems();

    const ro = new ResizeObserver(() => {
      calculateVisibleItems();
    });
    ro.observe(navEl);

    return () => ro.disconnect();
  }, [calculateVisibleItems, measureNaturalWidths]);

  useEffect(() => {
    if (!moreOpen) return;
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMoreOpen(false);
        const btn = moreRef.current?.querySelector('.Header-more-btn');
        btn?.focus();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [moreOpen]);

  const visibleItems = navItems.slice(0, visibleCount);
  const overflowItems = navItems.slice(visibleCount);

  return (
    <div id="mainHeader" ref={headerRef} className="header bg-light d-flex w-100 position-sticky px-5">
      <div className="d-flex justify-content-start align-items-center Header-left">
        <Link to="/" className="HeaderLink ml-0">
          <img src="/images/headerLogo.png" alt="logo" width="290px" height="28px" />
        </Link>
        <div className={`Header-nav ${!measured ? 'Header-nav--measuring' : ''}`} ref={navRef}>
          {navItems.map(({ link, label, mobileTab }, index) => {
            const isVisible = index < visibleCount;
            return (
              <Link
                to={handleNavigate(link, mobileTab)}
                key={label}
                ref={(el) => (itemRefs.current[index] = el)}
                onClick={onClickHandler}
                className={`HeaderLink ${checkActive(label) ? 'HeaderLink--active' : 'HeaderLink--default'}`}
                style={!measured ? {} : isVisible ? {} : { display: 'none' }}
                tabIndex={isVisible ? undefined : -1}
              >
                {label}
              </Link>
            );
          })}

          {overflowItems.length > 0 && (
            <div className="Header-more" ref={moreRef}>
              <button
                className="Header-more-btn"
                onClick={() => setMoreOpen((prev) => !prev)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                aria-label="More navigation options"
              >
                More
                <svg
                  className={`Header-more-chevron ${moreOpen ? 'Header-more-chevron--open' : ''}`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.47 5.47a.75.75 0 0 1 1.06 0L8 7.94l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06z" />
                </svg>
              </button>
              {moreOpen && (
                <div className="Header-more-dropdown" role="menu">
                  {overflowItems.map(({ link, label, mobileTab }) => (
                    <Link
                      to={handleNavigate(link, mobileTab)}
                      key={label}
                      role="menuitem"
                      onClick={() => {
                        onClickHandler();
                        setMoreOpen(false);
                      }}
                      className={`Header-more-item ${checkActive(label) ? 'Header-more-item--active' : ''}`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="d-flex align-items-center Header-right">
        {storybookItem && (
          <MDSLink
            href={storybookItem.link}
            target="_blank"
            onClick={onClickHandler}
            className="HeaderLink HeaderLink--default Header-storybook"
          >
            {storybookItem.label}
            <Icon className="HeaderIcon position-relative pl-4">
              <MenuIcons name={storybookItem.img} />
            </Icon>
          </MDSLink>
        )}
        <DocSearch
          appId={process.env.ALGOLIA_APP_ID}
          indexName={process.env.ALGOLIA_INDEX_NAME}
          apiKey={process.env.ALGOLIA_API_KEY}
          transformItems={transformItems}
        />
      </div>
    </div>
  );
};

export default Header;
