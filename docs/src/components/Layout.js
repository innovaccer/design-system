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
import { useFrontmatter } from '../util/Frontmatter';
import MDXPage from './PageLayout/MDXPage';

const Layout = (props) => {
  const { pageContext, children, location } = props;
  const { frontmatter = {}, titleType, relativePagePath } = pageContext;
  const { title, description, keywords, tabs, logos, showMobile = false } = frontmatter;
  const is404Page = children && children.key === null;
  const newFrontmatter = useFrontmatter(relativePagePath);
  const showAnimation = location.state?.animation === false ? false : true;

  return (
    <>
      <Meta
        titleType={titleType}
        docTitle={title}
        docDescription={description}
        pageKeywords={keywords}
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
          pageTitle={title}
          showMobile={showMobile}
          frontmatter={frontmatter}
        />

        <Column className={`${showAnimation ? "page-animation" : ''} page-scroll h-100`} id="main-container">
          {/* {children} */}
          <MDXPage
            newFrontmatter={newFrontmatter}
            relativePagePath={relativePagePath}
            description={description}
            title={title}
            tabs={tabs}
            children={children}
            is404Page={is404Page}
            location={location}
            logos={logos}
          />
          <Footer relativePagePath={relativePagePath} />
        </Column>
      </Row>
    </>
  )
}

export default Layout;
