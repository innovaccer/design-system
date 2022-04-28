import React from 'react';
import {
  Row,
  Column,
} from '@innovaccer/design-system';
import Footer from './Footer/Footer';
import Header from './Header';
import LeftNav from './LeftNav';
import Meta from './Meta';
import './css/style.css';
// import { useFrontmatter } from '../util/Frontmatter';

const Layout = ({
  titleType,
  pageTitle,
  pageDescription,
  pageKeywords,
  relativePagePath,
  showMobile,
  showAnimation,
  is404Page,
  children,
  frontmatter
}) => {

  // const newFrontmatter = useFrontmatter(relativePagePath);

  return (
    <>
      <Meta
        titleType={titleType}
        docTitle={pageTitle}
        docDescription={pageDescription}
        pageKeywords={pageKeywords}
        frontmatter={frontmatter}
        relativePagePath={relativePagePath}
      />
      <Header
        relativePagePath={relativePagePath}
      />
      <Row style={{ height: 'calc(100vh - 48px)' }}>
        <LeftNav
          is404Page={is404Page}
          relativePagePath={relativePagePath}
          pageTitle={pageTitle}
          showMobile={showMobile}
          frontmatter={frontmatter}
        />
        <Column className={`${showAnimation ? "page-animation" : ''} page-scroll h-100`} id="main-container">
          {children}
          <Footer relativePagePath={relativePagePath} />
        </Column>
      </Row>
    </>
  )
}

export default Layout;
