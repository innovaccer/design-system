import React, { useEffect } from 'react';
import { useNavItems } from '../../util/NavItems';
import { VerticalNav, Subheading } from '@innovaccer/design-system';
import { navigate } from 'gatsby';
import { MOBILE } from '../../util/constants';
import Tile from '../Tile/Tile';

const isBrowser = typeof window !== 'undefined';

const LeftNav = (props) => {
  const { relativePagePath, showMobile, frontmatter } = props;
  const navItemsList = useNavItems(relativePagePath);
  const navItems = navItemsList.filter((item) => {
    if (relativePagePath.includes(MOBILE)) {
      return !item.hideInMobile;
    }
    return !item.hideInWeb;
  });

  const isMobile = relativePagePath.includes(MOBILE);

  const showMenuButtons = showMobile || frontmatter?.showMobile;
  const [active, setActive] = React.useState();

  function getActiveNavItem() {
    const pathName = window.location.pathname;
    if (isBrowser && pathName && frontmatter.tabs) {
      const url = pathName.split('/');
      const componentName = pathName.includes('mobile') ? url[2] + '/' + url[3] : url[1] + '/' + url[2];
      const activeMenu = navItems.filter(({ link }) => {
        return link && link.includes(componentName);
      });
      return activeMenu[0]?.link;
    }
    return pathName;
  }

  const setPosition = (position) => {
    localStorage.setItem('leftNavScrollPosition', position);
  };

  useEffect(() => {
    const active = isBrowser ? getActiveNavItem() : '';
    const obj = { link: active };
    setActive(obj);

    const ele = document.getElementById('navbar-container');

    const scrollPosition = localStorage.getItem('leftNavScrollPosition');
    ele.scrollTop = scrollPosition;

    ele.addEventListener('scroll', setPosition(ele.scrollTop));
    return () => ele.removeEventListener('scroll', setPosition(ele.scrollTop));
  }, []);

  const onClickHandler = (menu) => {
    navigate(menu.link);
    setActive(menu);
  };

  const handleNavigate = (name) => {
    if (name === MOBILE) {
      if (!window.location.pathname.includes('/mobile')) {
        // navigate to mobile section
        navigate(`/mobile${window.location.pathname}`, { state: { redirectLink: true } });
      }
    } else {
      if (window.location.pathname.includes('/mobile')) {
        // navigate to web section
        navigate(window.location.pathname.replace('/mobile', '', { state: { redirectLink: true } }));
      }
    }
  };

  const getHeading = () => {
    let componentName = '';
    if (relativePagePath && relativePagePath.includes('mobile')) {
      componentName = relativePagePath.split('/')[2];
    } else {
      componentName = relativePagePath && relativePagePath.split('/')[1];
    }
    return componentName.toUpperCase();
  };

  return (
    <div data-test="Docs-Leftnav" id="navbar-container" className="h-100 bg-secondary-lightest border-right page-scroll">
      {showMenuButtons && (
        <div className="d-flex pt-6 pl-6">
          <Tile
            name="desktop_windows"
            text="Web"
            onClick={() => handleNavigate()}
            className={`mr-4 ${!isMobile && 'Tile--selected'}`}
            selected={`${!isMobile ? 'true' : 'false'}`}
            type={`${!isMobile ? 'selection' : 'action'}`}
          />
          <Tile
            name="phone_iphone"
            text="Mobile"
            onClick={() => handleNavigate(MOBILE)}
            className={`mr-6 ${isMobile && 'Tile--selected'}`}
            selected={`${isMobile ? 'true' : 'false'}`}
            type={`${isMobile ? 'selection' : 'action'}`}
          />
        </div>
      )}
      <Subheading className="pl-6 pt-6 pb-3" appearance="subtle">
        {getHeading()}
      </Subheading>
      <VerticalNav menus={navItems} active={active} onClick={onClickHandler} expanded={true} autoCollapse={false} />
    </div>
  );
};

export default LeftNav;
