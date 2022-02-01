import React, { useEffect } from 'react';
import { useNavItems } from '../../util/NavItems';
import {
  VerticalNav,
  Subheading,
  Button,
} from '@innovaccer/design-system';
import { navigate } from 'gatsby';
import { MOBILE } from '../../util/constants';

const isBrowser = typeof window !== 'undefined';

const LeftNav = (props) => {
  const { relativePagePath, showMobile, frontmatter } = props;
  const navItems = useNavItems(relativePagePath);
  const showMenuButtons = showMobile || frontmatter?.showMobile;
  const [active, setActive] = React.useState();

  function getActiveNavItem() {
    if (isBrowser && window.location.pathname && frontmatter.tabs) {

      const url = window.location.pathname.split('/');
      const activeMenu = navItems.filter(({ link }) => {
        return link && link.includes(url[1] + '/' + url[2]);
      });
      return activeMenu[0]?.link;

    } else {
      return window.location.pathname;
    }
  }

  useEffect(() => {
    const active = isBrowser ? getActiveNavItem() : '';
    const obj = { link: active }
    setActive(obj);
  }, []);

  const onClickHandler = (menu) => {
    navigate(menu.link);
    setActive(menu);
  };

  const handleNavigate = (name) => {
    if (name === MOBILE) {
      navigate(`/mobile${window.location.pathname}`);
    } else {
      if (window.location.pathname.includes('/mobile')) {
        navigate(
          window.location.pathname.replace('/mobile', '')
        );
      }
    }
  };

  const getHeading = () => {
    const componentName =
      relativePagePath && relativePagePath.split('/')[1];
    return componentName.toUpperCase();
  };

  return (
    <div className='h-100 bg-secondary-lightest border-right'>
      {showMenuButtons && (
        <div className='d-flex pt-6 pl-6'>
          <Button
            appearance='basic'
            size='regular'
            className='mr-4'
            onClick={() => handleNavigate()}
            selected={!relativePagePath.includes(MOBILE)}
            expanded={true}
          >
            Web
          </Button>
          <Button
            appearance='basic'
            onClick={() => handleNavigate(MOBILE)}
            selected={relativePagePath.includes(MOBILE)}
            className='mr-6'
            expanded={true}
          >
            Mobile
          </Button>
        </div>
      )}
      <Subheading className='pl-6 pt-6 pb-3' appearance='subtle'>
        {getHeading()}
      </Subheading>
      <VerticalNav
        menus={navItems}
        active={active}
        onClick={onClickHandler}
        expanded={true}
        autoCollapse={false}
      />
    </div>
  );
};

export default LeftNav;
