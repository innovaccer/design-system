import React from 'react';
import {
  Row,
  Column,
} from '@innovaccer/design-system';
import Meta from './Meta';
import Header from './Header';
import LeftNav from './LeftNav';
import MDXPage from './PageLayout/MDXPage';
import Footer from './Footer/Footer';
import { useFrontmatter } from '../util/Frontmatter';
import './css/style.css';

const Layout = (props) => {
  const { frontmatter = {}, titleType, relativePagePath, location, children } = props;
  const { title, description, keywords, tabs, logos, showMobile = false } = frontmatter;
  const showAnimation = location.state?.animation === false ? false : true;
  // const newFrontmatter = useFrontmatter(relativePagePath);

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
          relativePagePath={relativePagePath}
          frontmatter={frontmatter}
          showMobile={showMobile}
        />

        <Column
          className={`${showAnimation ? "page-animation" : ''} page-scroll h-100`}
          id="main-container"
        >
          {/* <MDXPage
            relativePagePath={relativePagePath}
            description={description}
            newFrontmatter={frontmatter}
            title={title}
            tabs={tabs}
            children={children}
            location={location}
            logos={logos}
          /> */}
          {children}
          <Footer relativePagePath={relativePagePath} />
        </Column>
      </Row>
    </>
  )
}

export default Layout;
