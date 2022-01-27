/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import '@fontsource/nunito-sans';
import {
  Row,
  Column,
  Heading,
  Button,
  Toast,
  Icon,
  Tooltip
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
import { useGetStorybookData } from '../util/StorybookData';
import { ArgsTable } from './PropsTable/Table';
import Markdown from 'markdown-to-jsx';
import { useFrontmatter } from '../util/Frontmatter';




const List = ({ children, ...rest }) => {
  return (
    <div className='list'>
      {children}
    </div>
  )
}

const leftMenuList = [
  {
    title: 'Gatsby Theme MDS'
  }
];

const Layout = ({
  children,
  titleType,
  pageTitle,
  pageDescription,
  pageKeywords,
  relativePagePath,
  component,
  tabs,
  logos,
  showMobile,
  location,
  ...rest
}) => {
  const is404 = children && children.key === null;
  const [isToastActive, setIsToastActive] = useState(false);
  const [codeCopyText , setCodeCopyText] = useState('')
  const [toastTitle, setToastTitle] = useState('');
  const [isTooltipActiveHeading, setTooltipActiveHeading] = useState(false);
  const [isTooltipActiveCode , setTooltipActiveCode] = useState(false)
  const [tooltipName, setTooltipName] = useState('copy');
  const [isHovered , setIsHovered] = useState(false);
  const [hoveredId , setHoveredId]= useState('');
  const frontmatter = useFrontmatter(relativePagePath);
  const refHeading= React.createRef();
  const refCode = React.createRef();

  const copyToClipboard = (str) => {
  if(typeof(str)==="string"){
    navigator.clipboard.writeText(str);
  }
  else{
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
    setCodeCopyText(str._source.lineNumber)
  }
};

  const Code = ({ children, ...rest }) => {
  return (
    <>
      <div {...rest}>{children}</div>
      <div 
        onMouseLeave={()=>{setTooltipName("copy");setTooltipActiveCode(false)}}
        className='ml-auto'
      >
      <Tooltip 
        open={children._source?.lineNumber === codeCopyText? isTooltipActiveCode:false} 
        tooltip={tooltipName} 
        position="bottom"
        appendToBody={true}
        boundaryElement={refCode}
      >
        <Button
        icon='copy'
        className='p-0'
        onClick={() => {copyToClipboard(children);toggleTooltip("Copied!","code")}}
        />
      </Tooltip>
      </div>
    </>
  );
};
  function getJsxCode(name) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const componentData = useGetStorybookData(name);

    const jsxCode = componentData && componentData.parameters
      ? componentData.parameters.docs.docPage?.customCode ||
      componentData.parameters.storySource.source
      : '';
    return jsxCode;
  }

  function getPropTableData(name) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const componentData = useGetStorybookData(name);

    const jsxCode = componentData
      ? componentData.parameters.argTypes
      : '';
    return jsxCode;
  }

  const Preview = ({ name }) => {
    return (
      <div>
        <PropsTable
          componentData={getJsxCode(name)}
        />
      </div>
    );
  };

  const A11yBlock = ({ name }) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const componentData = useGetStorybookData(name);
    const a11yProps = componentData && componentData.parameters.docs.docPage?.a11yProps;
    return (
      <div className="mb-8">
        {a11yProps && <Markdown className="A11y-markdown">{a11yProps}</Markdown>}
      </div>
    );
  }

  const PreviewWithPropTable = ({ name }) => {
    return (
      <div className="overflow-x-scroll">
        <ArgsTable rows={getPropTableData(name)} />
      </div>
    );
  };

  const toggleToast = (name) => {
    setIsToastActive(true);
    setToastTitle(name);
    setTimeout(() => setIsToastActive(false), 1500);
  }
  const toggleTooltip = (name , type) => {
    if(type ==="code"){
      setTooltipActiveCode(true)
    }
    else{
      setTooltipActiveHeading(true);
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
  const MDXHeading=({HeadingInfo,size})=>{
        return(
          <div 
            onMouseEnter={()=>{setIsHovered(true);setHoveredId(HeadingInfo.id);}} 
            onMouseLeave={()=>{setIsHovered(false);setTooltipName("copy");setTooltipActiveHeading(false)}} 
            className={`d-inline-flex ${size === "s"? "align-items-center":"align-items-baseline"}`}
            ref={refHeading}
          >
            <Heading className={`mr-4 ${size ==="s" ? "mt-3 mb-4" : ""}`}  size={size} {...HeadingInfo} />
            {isHovered && hoveredId==HeadingInfo.id &&
              <div className="cursor-pointer">
                <Tooltip 
                  open={isTooltipActiveHeading} 
                  tooltip={tooltipName} 
                  position="bottom"
                  appendToBody={false}
                  boundaryElement={refHeading}
                >
                  <Icon 
                    onClick={()=>hoverCopyHandler(HeadingInfo.id)} 
                    appearance="subtle" 
                    type="filled" 
                    size={16} 
                    name="link"
                  />
                </Tooltip>
              </div>
            }
        </div>
        )
  }

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
    h1: (props) => <MDXHeading size='xxl' HeadingInfo={props} />,
    h2: (props) => <MDXHeading size='xl' HeadingInfo={props} />,
    h3: (props) => <MDXHeading size='l' HeadingInfo={props} />,
    h4: (props) => <MDXHeading size="m" HeadingInfo={props} />,
    h5: (props) => <MDXHeading size="s" HeadingInfo={props} />,
    ul: List,
    Logos: (props) => <Logos {...props} />,
    Rectangle: (props) => <Rectangle {...props} />,
    Colors: (props) => <Colors {...props} />,
  };
  const hoverCopyHandler=(id)=>{
    const currURL = window.location.href
    if(currURL.includes(id)){
      copyToClipboard(currURL)
  }
  else if(currURL.includes("#")){
    copyToClipboard(currURL.slice(0,currURL.indexOf("#")+1)+id)
}
    else {
      copyToClipboard(currURL+"#"+id)
    }
    toggleTooltip("Copied!" , "Heading")
  }
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
        <Column className={`${showAnimation() ? "page-animation" : ''} page-scroll h-100`}>
          <Row>
            <Column className="px-12 py-8 min-vh-100" size={9}>
              {!relativePagePath.includes('components') && (
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
              )}
              {relativePagePath.includes('components') && (
                <ComponentsContainer
                  pageTitle={pageTitle}
                  relativePagePath={relativePagePath}
                  component={component}
                  tabs={tabs}
                  pageDescription={pageDescription}
                  frontmatter={frontmatter}
                >
                  <MDXProvider components={DSComponents}>
                    {children}
                  </MDXProvider>
                </ComponentsContainer>
              )}
            </Column>

            <Column
              size={3}
              className="pb-6 in-page-nav position-sticky"
            >
              <TableOfContent
                is404Page={is404}
                relativePagePath={relativePagePath}
                pageTitle={pageTitle}
                location={rest.location}
              />
            </Column>
          </Row>
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
