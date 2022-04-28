import React, { useState } from 'react';
import {
  Row,
  Column,
  Toast,
  Tooltip,
  Button
} from '@innovaccer/design-system';
import { MDXProvider } from "@mdx-js/react";
import TableOfContent from '../TableOfContent/TableOfContent';
import { MDXComponents } from '../MDXComponents';
import { copyMessage, copyMessageSuccess } from "../../util/constants.js";
import ProductLogos from '../Logos/Logos';
import ProductColors from '../Colors/Colors';
import ComponentsContainer from '../Container/ComponentsContainer';
import Container from '../Container';
import '../css/style.css';
// import { useFrontmatter } from '../../util/Frontmatter';

const MDXPage = ({
  relativePagePath,
  description,
  frontmatter,
  title,
  tabs,
  children,
  is404Page,
  location,
  logos
}) => {
  const [isToastActive, setIsToastActive] = useState(false);
  const [codeCopyText, setCodeCopyText] = useState('')
  const [toastTitle, setToastTitle] = useState('');
  const [isTooltipActiveCode, setTooltipActiveCode] = useState(false)
  const [tooltipName, setTooltipName] = useState(copyMessage);
  const refCode = React.createRef();
  // const newFrontmatter = useFrontmatter(relativePagePath);

  const toggleToast = (name) => {
    setIsToastActive(true);
    setToastTitle(name);
    setTimeout(() => setIsToastActive(false), 1500);
  }

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

  const Logos = ({ logoData }) => {
    return (
      <ProductLogos
        logoData={logoData}
        toggleToast={toggleToast}
      />
    );
  };

  const Colors = ({ colorData }) => {
    return (
      <ProductColors
        colorData={colorData}
        toggleToast={toggleToast}
      />
    );
  };

  const DSComponents = {
    ...MDXComponents,
    pre: Code,
    Logos: (props) => <Logos {...props} />,
    Colors: (props) => <Colors {...props} />,
  }

  return (
    <>
      <Row className='justify-content-center' ref={refCode}>
        <Column className="px-12 py-8 min-vh-100 inner-left-container" size={9}>
          {!relativePagePath.includes('components') && (
            <Container
              pageTitle={title}
              relativePagePath={relativePagePath}
              tabs={tabs}
              pageDescription={description}
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
              pageTitle={title}
              relativePagePath={relativePagePath}
              tabs={tabs}
              pageDescription={description}
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
          className="pb-6 in-page-nav position-sticky scroll-y"
          style={{ height: 'calc(100vh - 48px)' }}
        >
          <TableOfContent
            is404Page={is404Page}
            relativePagePath={relativePagePath}
            pageTitle={title}
            location={location}
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
    </>
  );
};

export default MDXPage;
