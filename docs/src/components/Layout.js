/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import {
  Row,
  Column,
  Button,
  Toast,
  Tooltip,
  Text
} from '@innovaccer/design-system';
import LeftNav from './LeftNav';
import TableOfContent from './TableOfContent/TableOfContent';
import Header from './Header';
import Container from './Container';
import ComponentsContainer from './Container/ComponentsContainer';
import { MDXProvider } from "@mdx-js/react";
import * as MDSComponents from '@innovaccer/design-system';
import Meta from './Meta';
import './css/style.css';
import PropsTable from './PropsTable/index';
import Rules from './Rules/Rules';
import DOs from './Rules/DOs';
import DONTs from './Rules/DONTs';
import InlineMessage from './Rules/InlineMessage';
import IconWrapper from './Rules/IconWrapper';
import Footer from './Footer/Footer';
import ProductLogos from './Logos/Logos';
import ProductColors from './Colors/Colors';
// import { useGetStorybookData } from '../util/StorybookData';
import { ArgsTable } from './PropsTable/Table';
import Markdown from 'markdown-to-jsx';
import { useFrontmatter } from '../util/Frontmatter';
import MDXHeading from './MDXHeading.js';
import { copyMessage, copyMessageSuccess } from "../util/constants.js";
import axios from 'axios';

const useGetStorybookData = async (name) => {
  let componentName = name;
  let componentPath = `/sb/${componentName}.json`;

  // To handle Rich Text Editor Stories
  if (name.startsWith('library')) {
    componentPath = `/rte/${componentName}.json`
  }

  const data = await axios.get(componentPath)
    .then(({ data = {} }) => {
      if (!Object.keys(data).length) {
        return Promise.reject(`Could not get details for id: ${componentName}`);
      }
      return data;
    })

  return data;
}

function getJsxCode(name) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useGetStorybookData(name)
    .then(componentData => {
      const jsxCode = componentData && componentData.parameters
        ? componentData.parameters.docs.docPage?.customCode ||
        componentData.parameters.storySource?.source
        : '';
      return jsxCode;

    })
}

function getPropTableData(name) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useGetStorybookData(name)
    .then(componentData => {

      const jsxCode = componentData
        ? componentData.parameters.argTypes
        : '';
      return jsxCode;

    })
}

const Preview = ({ name }) => {
  return (
    <div>
      <PropsTable
        dataProvider={() => getJsxCode(name)}
      />
    </div>
  );
};

const A11yBlock = ({ name }) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    useGetStorybookData(name)
      .then((componentData) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const a11yProps = componentData && componentData.parameters.docs.docPage?.a11yProps;

        setData(a11yProps);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>
      Loading ...
    </div>
  }

  if (error) {
    return <MDSComponents.Message className="my-7" appearance="alert" title={error} description="Hold tight, we are working to get it up for you to interact with." />
  }
  return (
    <div className="mb-8">
      {data && <Markdown className="A11y-markdown">{data}</Markdown>}
    </div>
  );
}

const FrameWrapper = ({ componentName }) => {

  const onLoad = () => {
    document.getElementById('iframe-loader').style.display = 'none';
  };

  return (
    <>
      <div id="iframe-loader">
        Loading ...
      </div>
      <iframe
        id="myFrame"
        width="100%"
        height="800px"
        scrolling="no"
        frameBorder="0"
        onLoad={onLoad}
        src={`https://mds.innovaccer.com/iframe.html?id=${componentName}&viewMode=docs&panel=true&nav=false&addons=1&stories=0&embed=prop-table`}
      />
    </>
  );
}

const PreviewWithPropTable = ({ name, embed }) => {

  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!embed) {
      getPropTableData(name)
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(`Could not get details for id: ${name}`);
          setLoading(false);
        });
    }
  }, []);

  if (loading && !embed) {
    return <div> Loading ... </div>
  }

  if (error) {
    return <MDSComponents.Message className="my-7" appearance="alert" title={error} description="Hold tight, we are working to get it up for you to interact with." />
  }

  return (
    <div className="overflow-x-scroll">
      {embed ?
        <FrameWrapper componentName={name} />
        :
        <ArgsTable rows={data} />
      }
    </div>
  );
};

const List = ({ children, ...rest }) => {
  return (
    <div className='list'>
      {children}
    </div>
  )
}
const leftMenuList = [
  {
    title: 'Masala Design System'
  }
];

const ComponentsPage = (props) => {
  const {
    tabs,
    children,
    pageTitle,
    frontmatter,
    DSComponents,
    relativePagePath,
    pageDescription
  } = props;

  return (
    <ComponentsContainer
      pageTitle={pageTitle}
      relativePagePath={relativePagePath}
      tabs={tabs}
      pageDescription={pageDescription}
      frontmatter={frontmatter}
    >
      <MDXProvider components={DSComponents}>
        {children}
      </MDXProvider>
    </ComponentsContainer>
  )
}

const MDXPage = (props) => {
  const {
    tabs,
    children,
    pageTitle,
    frontmatter,
    DSComponents,
    relativePagePath,
    pageDescription,
    logos
  } = props;

  return (
    <Container
      pageTitle={pageTitle}
      relativePagePath={relativePagePath}
      tabs={tabs}
      pageDescription={pageDescription}
      logos={logos}
      frontmatter={frontmatter}
    >
      <MDXProvider components={DSComponents}>
        {children}
      </MDXProvider>
    </Container>
  )
}

const OverviewContainer = (props) => {
  return (
    <Row className='justify-content-center'>
      <Column className="px-11 py-8 min-vh-100 overview-container" size={12}>
        <ComponentsPage {...props} />
      </Column>
    </Row>
  )
}

const MarkdownContainer = (props) => {
  const {
    relativePagePath,
    is404,
    pageTitle,
    location
  } = props;

  return (
    <Row className='justify-content-center'>
      <Column className="px-11 py-8 min-vh-100 inner-left-container" size={9}>
        {
          !relativePagePath.includes('components') ?
            <MDXPage {...props} />
            :
            <ComponentsPage {...props} />
        }
      </Column>

      <Column
        size={3}
        className="pb-6 in-page-nav position-sticky scroll-y"
        style={{ height: 'calc(100vh - 48px)' }}
      >
        <TableOfContent
          is404Page={is404}
          relativePagePath={relativePagePath}
          pageTitle={pageTitle}
          location={location}
        />
      </Column>
    </Row>
  )
}

const Caption = ({children}) => {
  return ( 
    <Text size='small' appearance='subtle' className='d-flex mt-4 justify-content-center text-align--center'>
      {children}
    </Text>
  )
}

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
  const [codeCopyText, setCodeCopyText] = useState('')
  const [toastTitle, setToastTitle] = useState('');
  const [isTooltipActiveCode, setTooltipActiveCode] = useState(false)
  const [tooltipName, setTooltipName] = useState(copyMessage);
  const frontmatter = useFrontmatter(relativePagePath);
  const refCode = React.createRef();
  const isOverviewPage = relativePagePath.includes('overview');

  const copyToClipboard = (str) => {
    if (typeof (str) === "string") {
      navigator.clipboard.writeText(str);
    }
    else {
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
      setCodeCopyText(str)
    }
  };

  const Code = ({ children, ...rest }) => {
    return (
      <>
        <div {...rest}>{children}</div>
        <div
          onMouseLeave={() => { setTooltipName(copyMessage); setTooltipActiveCode(false) }}
          className='ml-auto'
        >
          <Tooltip
            open={children === codeCopyText ? isTooltipActiveCode : false}
            tooltip={tooltipName}
            position="bottom"
            appendToBody={true}
            boundaryElement={refCode}
          >
            <Button
              icon='copy'
              className='p-0'
              onClick={() => { copyToClipboard(children); toggleTooltip(copyMessageSuccess, "code") }}
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
  }

  const toggleTooltip = (name, type) => {
    if (type === "code") {
      setTooltipActiveCode(true)
    }
    setTooltipName(name);
  }

  const Logos = ({ children, logoData, ...rest }) => {
    return (
      <ProductLogos
        logoData={logoData}
        toggleToast={toggleToast}
      />
    );
  };

  const Rectangle = ({ name, ...rest }) => {
    return (
      <div className='rectangle'>{name}</div>
    );
  };

  const Colors = ({ children, colorData, ...rest }) => {
    return (
      <ProductColors
        colorData={colorData}
        toggleToast={toggleToast}
      />
    );
  };

  const DSComponents = {
    ...MDSComponents,
    pre: Code,
    Preview: Preview,
    PreviewWithPropTable: PreviewWithPropTable,
    A11yBlock: A11yBlock,
    Rules,
    DOs,
    DONTs,
    InlineMessage,
    IconWrapper,
    Caption,
    h1: (props) => <MDXHeading size='xxl' headingInfo={props} />,
    h2: (props) => <MDXHeading size='xl' headingInfo={props} />,
    h3: (props) => <MDXHeading size='l' headingInfo={props} />,
    h4: (props) => <MDXHeading size="m" headingInfo={props} />,
    h5: (props) => <MDXHeading size="s" headingInfo={props} />,
    ul: List,
    Logos: (props) => <Logos {...props} />,
    Rectangle: (props) => <Rectangle {...props} />,
    Colors: (props) => <Colors {...props} />,
  };

  const showAnimation = () => {
    if (location.state?.animation === false) return false;
    return true;
  }

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
        leftMenuList={leftMenuList}
        relativePagePath={relativePagePath}
      />
      <Row style={{ height: 'calc(100vh - 48px)' }} ref={refCode}>
        <LeftNav
          is404Page={is404}
          relativePagePath={relativePagePath}
          pageTitle={pageTitle}
          showMobile={showMobile}
          frontmatter={frontmatter}
        />
        <Column className={`${showAnimation() ? "page-animation" : ''} page-scroll h-100`} id="main-container">
          {!isOverviewPage ?
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
            :
            <OverviewContainer
              tabs={tabs}
              children={children}
              pageTitle={pageTitle}
              frontmatter={frontmatter}
              DSComponents={DSComponents}
              relativePagePath={relativePagePath}
              pageDescription={pageDescription}
            />
          }
          {isToastActive && (
            <Toast
              appearance='success'
              title={toastTitle}
              className='position-fixed ml-5 toast'
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
