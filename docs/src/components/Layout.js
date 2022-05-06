import React, { useEffect, useRef } from 'react';
import {
  Row,
  Column,
} from '@innovaccer/design-system';
import Footer from './Footer/Footer';
import Header from './Header';
import LeftNav from './LeftNav';
import Meta from './Meta';
import './css/style.css';
import { useFrontmatter } from '../util/Frontmatter';
import { useNavItems } from '../util/NavItems';
import { useInPageNavItems } from '../util/InPageNavItems';
import MDXPage from './PageLayout/MDXPage';
import { MOBILE } from '../util/constants';
import { getActiveNavItem, getActiveTab, getIds, onScrollHandler } from '../util/Helpers';

const Layout = (props) => {
  const { pageContext, children, location } = props;
  const { frontmatter = {}, titleType, relativePagePath } = pageContext;
  const { title, description, keywords, tabs, logos, showMobile = false } = frontmatter;
  // const is404Page = children && children.key === null;
  const newFrontmatter = useFrontmatter(relativePagePath);
  const showAnimation = location.state?.animation === false ? false : true;

  // ================for leftNav Items List====================
  const navItemsList = useNavItems(relativePagePath);
  const navItems = navItemsList.filter((item) => {
    if (relativePagePath.includes(MOBILE)) {
      return !item.hideInMobile;
    }
    return !item.hideInWeb;
  });

  let activeNavItem = getActiveNavItem(props.path, navItems, newFrontmatter);

  useEffect(() => {
    console.log('im mounting');
    activeNavItem = getActiveNavItem(props.path, navItems, newFrontmatter);
    console.log('activeNavItem', activeNavItem);
    return () => {
      console.log('im unmounting');
    }
  }, []);

  // =============for Table of Content Scroll Behaviour=================
  const clickedRef = useRef(false);
  const unsetClickedRef = useRef(null);
  let activeInPageNav = '';

  let inPageNavItems = useInPageNavItems(relativePagePath);
  const navIds = getIds(inPageNavItems);

  function getActiveNav(value) {
    console.log('value-> ', value);
    let urlHash = '';
    if (location && location.hash) {
      urlHash = location.hash.slice(1);
      activeInPageNav = urlHash;
    } 
    else if (inPageNavItems && inPageNavItems.length) {
      activeInPageNav = inPageNavItems[0].url?.slice(1);
    }
    else if (value) {
      activeInPageNav = value;
    }
    console.log('activenav inside setter', activeInPageNav);
    return activeInPageNav;
  }

  let element = document.getElementById("main-container");
  element && element.addEventListener('scroll', (e) => {
    onScrollHandler(e, navIds, clickedRef, getActiveNav);
    // getActiveNav();
    // console.log('result--> ', activeInPageNav);
  }, true);

  const onInPageNavClickHandler = (e, itemUrl) => {
    console.log('itemUrl', itemUrl);
    getActiveNav(itemUrl);

    let activeElement = document.getElementById(itemUrl);
    activeElement.scrollIntoView(true);

    // Used to disable onScrollHandler if the page scrolls due to a click
    clickedRef.current = true;
    unsetClickedRef.current = setTimeout(() => {
      clickedRef.current = false;
    }, 0);
  };

  return (
    <>
      <Meta
        titleType={titleType}
        docTitle={title}
        docDescription={description}
        pageKeywords={keywords}
        frontmatter={newFrontmatter}
        relativePagePath={relativePagePath}
      />
      <Header
        relativePagePath={relativePagePath}
      />
      <Row style={{ height: 'calc(100vh - 48px)' }}>
        <LeftNav
          relativePagePath={relativePagePath}
          showMenuButtons={showMobile || newFrontmatter?.showMobile}
          activeNavItem={getActiveNavItem(props.path, navItems, newFrontmatter)}
          // activeNavItem={activeNavItem}
          navItems={navItems}
        />

        <Column className={`${showAnimation ? "page-animation" : ''} page-scroll h-100`} id="main-container">
          <MDXPage
            newFrontmatter={newFrontmatter}
            relativePagePath={relativePagePath}
            description={description}
            title={title}
            tabs={tabs}
            children={children}
            location={location}
            logos={logos}
            activeIndex={getActiveTab(relativePagePath, title, newFrontmatter, tabs)}
            inPageNavItems={inPageNavItems}
            onInPageNavClickHandler={onInPageNavClickHandler}
            activeInPageNav={getActiveNav()}
            clickedRef={clickedRef}
            unsetClickedRef={unsetClickedRef}
          />
          <Footer relativePagePath={relativePagePath} />
        </Column>
      </Row>
    </>
  )
}

export default Layout;
