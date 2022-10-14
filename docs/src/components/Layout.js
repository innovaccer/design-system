import React, { useState } from 'react';
import './css/style.css';
import Meta from './Meta';
import Header from './Header';
import LeftNav from './LeftNav';
import Container from './Container';
import Footer from './Footer/Footer';
import ProductLogos from './Logos/Logos';
import { MDXProvider } from '@mdx-js/react';
import ProductColors from './Colors/Colors';
import { MDXComponents } from './MDXComponents';
import { useFrontmatter } from '../util/Frontmatter';
import TableOfContent from './TableOfContent/TableOfContent';
import ComponentsContainer from './Container/ComponentsContainer';
import { copyMessage, copyMessageSuccess } from '../util/constants.js';
import { Row, Column, Button, Toast, Tooltip } from '@innovaccer/design-system';

const leftMenuList = [
  {
    title: 'Masala Design System',
  },
];

const ComponentsPage = (props) => {
  const { tabs, children, pageTitle, frontmatter, DSComponents, relativePagePath, pageDescription } = props;

  return (
    <ComponentsContainer
      pageTitle={pageTitle}
      relativePagePath={relativePagePath}
      tabs={tabs}
      pageDescription={pageDescription}
      frontmatter={frontmatter}
    >
      <MDXProvider components={DSComponents}>{children}</MDXProvider>
    </ComponentsContainer>
  );
};

const MDXPage = (props) => {
  const { tabs, children, pageTitle, frontmatter, DSComponents, relativePagePath, pageDescription, logos } = props;

  return (
    <Container
      pageTitle={pageTitle}
      relativePagePath={relativePagePath}
      tabs={tabs}
      pageDescription={pageDescription}
      logos={logos}
      frontmatter={frontmatter}
    >
      <MDXProvider components={DSComponents}>{children}</MDXProvider>
    </Container>
  );
};

const OverviewContainer = (props) => {
  return (
    <Row className="justify-content-center">
      <Column className="px-11 py-8 min-vh-100 overview-container" size={12}>
        <ComponentsPage {...props} />
      </Column>
    </Row>
  );
};

const MarkdownContainer = (props) => {
  const { relativePagePath, is404, pageTitle, location } = props;

  return (
    <Row data-test="Docs-inner--container" className="justify-content-center">
      <Column className="px-11 py-8 min-vh-100 inner-left-container" size={9}>
        {!relativePagePath.includes('components') ? <MDXPage {...props} /> : <ComponentsPage {...props} />}
      </Column>

      <Column size={3} className="pb-6 in-page-nav position-sticky scroll-y" style={{ height: 'calc(100vh - 48px)' }}>
        <TableOfContent
          is404Page={is404}
          relativePagePath={relativePagePath}
          pageTitle={pageTitle}
          location={location}
        />
      </Column>
    </Row>
  );
};

const Layout = ({
  children,
  titleType,
  pageTitle,
  pageDescription,
  pageKeywords,
  relativePagePath,
  tabs,
  logos,
  showMobile,
  location,
  ...rest
}) => {
  const is404 = children && children.key === null;
  const [isToastActive, setIsToastActive] = useState(false);
  const [codeCopyText, setCodeCopyText] = useState('');
  const [toastTitle, setToastTitle] = useState('');
  const [isTooltipActiveCode, setTooltipActiveCode] = useState(false);
  const [tooltipName, setTooltipName] = useState(copyMessage);
  const frontmatter = useFrontmatter(relativePagePath);
  const refCode = React.createRef();
  const isOverviewPage = relativePagePath.includes('overview');

  const copyToClipboard = (str) => {
    if (typeof str === 'string') {
      navigator.clipboard.writeText(str);
    } else {
      let codeBlock = '';
      if (Object.keys(str).length > 0) {
        const element = str.props.children;
        if (Array.isArray(element) && element.length) {
          element.map((elt) => {
            if (typeof elt === 'object') {
              codeBlock = codeBlock + elt.props.children;
            } else {
              codeBlock = codeBlock + elt;
            }
          });
        } else {
          codeBlock = str.props.children;
        }
      }
      navigator.clipboard.writeText(codeBlock);
      setCodeCopyText(str);
    }
  };

  const Code = ({ children, ...rest }) => {
    return (
      <>
        <div {...rest}>{children}</div>
        <div
          onMouseLeave={() => {
            setTooltipName(copyMessage);
            setTooltipActiveCode(false);
          }}
          className="ml-auto"
        >
          <Tooltip
            open={children === codeCopyText ? isTooltipActiveCode : false}
            tooltip={tooltipName}
            position="bottom"
            appendToBody={true}
            boundaryElement={refCode}
          >
            <Button
              icon="copy"
              className="p-0"
              onClick={() => {
                copyToClipboard(children);
                toggleTooltip(copyMessageSuccess, 'code');
              }}
            />
          </Tooltip>
        </div>
      </>
    );
  };

  const toggleToast = (name) => {
    setIsToastActive(true);
    setToastTitle(name);
    setTimeout(() => setIsToastActive(false), 1500);
  };

  const toggleTooltip = (name, type) => {
    if (type === 'code') {
      setTooltipActiveCode(true);
    }
    setTooltipName(name);
  };

  const Logos = ({ children, logoData, ...rest }) => {
    return <ProductLogos logoData={logoData} toggleToast={toggleToast} />;
  };

  const Colors = ({ children, colorData, ...rest }) => {
    return <ProductColors colorData={colorData} />;
  };

  const DSComponents = {
    ...MDXComponents,
    pre: Code,
    Logos: (props) => <Logos {...props} />,
    Colors: (props) => <Colors {...props} />,
  };

  const showAnimation = () => {
    if (location.state?.animation === false) return false;
    return true;
  };

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
      <Header leftMenuList={leftMenuList} relativePagePath={relativePagePath} />
      <Row data-test="Docs-Main--Row" style={{ height: 'calc(100vh - 48px)' }} ref={refCode}>
        <LeftNav
          is404Page={is404}
          relativePagePath={relativePagePath}
          pageTitle={pageTitle}
          showMobile={showMobile}
          frontmatter={frontmatter}
        />
        <Column className={`${showAnimation() ? 'page-animation' : ''} page-scroll h-100`} id="main-container">
          {!isOverviewPage ? (
            <MarkdownContainer
              relativePagePath={relativePagePath}
              is404={is404}
              pageTitle={pageTitle}
              location={rest.location}
              tabs={tabs}
              children={children}
              frontmatter={frontmatter}
              DSComponents={DSComponents}
              pageDescription={pageDescription}
              logos={logos}
            />
          ) : (
            <OverviewContainer
              tabs={tabs}
              children={children}
              pageTitle={pageTitle}
              frontmatter={frontmatter}
              DSComponents={DSComponents}
              relativePagePath={relativePagePath}
              pageDescription={pageDescription}
            />
          )}
          {isToastActive && (
            <Toast
              appearance="success"
              title={toastTitle}
              className="position-fixed ml-5 toast"
              onClose={() => setIsToastActive(false)}
            />
          )}
          <Footer relativePagePath={relativePagePath} />
        </Column>
      </Row>
    </>
  );
};

export default Layout;
