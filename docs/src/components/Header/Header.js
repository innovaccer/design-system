import React from 'react';
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
  const ref = React.createRef();
  const items = useHeaderItems();

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
        ? // On production, return the result as is
          item.url
        : // On development, replace `item.url` with a trailing slash,
          // so that the result link is relative to the server root
          item.url.replace(liveUrl, '/');

      return item;
    });
  }

  return (
    <div id="mainHeader" ref={ref} className="header bg-light d-flex w-100 position-sticky px-5">
      <div className="d-flex justify-content-start align-items-center">
        <Link to="/" className="HeaderLink ml-0">
          <img src="/images/headerLogo.png" alt="logo" width="290px" height="28px" />
        </Link>
        <div>
          {items.map(({ link, label, img, mobileTab }, index) => {
            const isExternal = link.startsWith('http://') || link.startsWith('https://');

            if (isExternal) {
              return (
                <MDSLink
                  key={index}
                  href={link}
                  target="_blank"
                  onClick={onClickHandler}
                  className="HeaderLink HeaderLink--default"
                >
                  {label}
                  {img && (
                    <Icon className="HeaderIcon position-relative pl-4">
                      <MenuIcons name={img} />
                    </Icon>
                  )}
                </MDSLink>
              );
            }
            return (
              <Link
                to={handleNavigate(link, mobileTab)}
                key={index}
                onClick={onClickHandler}
                className={`HeaderLink  ${checkActive(label) ? 'HeaderLink--active' : 'HeaderLink--default'}`}
              >
                {label}
                {img && (
                  <Icon className="HeaderIcon position-relative pl-8">
                    <MenuIcons name={img} />
                  </Icon>
                )}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center">
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
