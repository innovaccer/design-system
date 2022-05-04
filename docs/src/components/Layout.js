import React, { useEffect } from 'react';
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
import MDXPage from './PageLayout/MDXPage';
import { MOBILE } from '../util/constants';
import { getActiveNavItem, getActiveTab } from '../util/Helpers';

const Layout = (props) => {
  const { pageContext, children, location } = props;
  const { frontmatter = {}, titleType, relativePagePath } = pageContext;
  const { title, description, keywords, tabs, logos, showMobile = false } = frontmatter;
  // const is404Page = children && children.key === null;
  const newFrontmatter = useFrontmatter(relativePagePath);
  const showAnimation = location.state?.animation === false ? false : true;

  // for leftNav Items List
  const navItemsList = useNavItems(relativePagePath);
  const navItems = navItemsList.filter((item) => {
    if (relativePagePath.includes(MOBILE)) {
      return !item.hideInMobile;
    }
    return !item.hideInWeb;
  });

  const activeNavItem = getActiveNavItem(props.path, navItems, newFrontmatter);


  // for Table of Content Scroll Behaviour
  let element = document.getElementById("main-container");
  element && element.addEventListener('scroll', (e) => console.log('im scrolling111'));

  useEffect(() => {
    console.log('im mounting');
    return () => {
      console.log('im unmounting');
    }
  },[]);

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
          // activeNavItem={getActiveNavItem(props.path, navItems, newFrontmatter)}
          activeNavItem={activeNavItem}
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
          />
          <Footer relativePagePath={relativePagePath} />
        </Column>
      </Row>
    </>
  )
}

export default Layout;
