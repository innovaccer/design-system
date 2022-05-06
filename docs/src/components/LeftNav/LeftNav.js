import React from 'react';
import {
  VerticalNav,
  Subheading,
  Button,
} from '@innovaccer/design-system';
import { navigate } from 'gatsby';
import { MOBILE } from '../../util/constants';
import { useEffect } from 'react';

const LeftNav = (props) => {
  const { relativePagePath, activeNavItem, navItems, showMenuButtons } = props;

  console.log('activeNavItem inside leftnav', activeNavItem);

  useEffect(() => {
    console.log('inside leftnav useeffect', activeNavItem);
  },[activeNavItem]);

  const onClickHandler = (menu) => {
    navigate(menu.link);
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
    <div className='h-100 bg-secondary-lightest border-right page-scroll'>
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
        active={activeNavItem}
        onClick={onClickHandler}
        expanded={true}
        autoCollapse={false}
      />
    </div>
  );
};

export default LeftNav;
