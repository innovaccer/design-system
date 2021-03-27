// @ts-nocheck

import * as React from 'react';
import {
  Title,
  Subtitle,
  Heading,
  Subheading,
  Description,
  Canvas,
  PropsProps,
  ArgsTable
} from '@storybook/addon-docs/blocks';
import { renderToStaticMarkup } from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { html as beautifyHTML } from 'js-beautify';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark, a11yDark, githubGist, dracula, vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as DS from '@/';
import { Button, Card, TabsWrapper, Tab } from '@/';
import vsDark from 'prism-react-renderer/themes/vsDark';
import { resetComponents, Story as PureStory } from '@storybook/components';
import { LiveProvider, LiveEditor, LiveError, LivePreview, withLive } from 'react-live';
import openSandbox from './sandbox';
import generateImports from './generateImports';
import * as componentLib from '@/index';

export interface Example {
  title: string;
  description?: string;
  imports: string[];
  component: React.ReactNode;
}

interface DocPageProps {
  title?: string;
  description?: React.ReactNode;
  props?: PropsProps;
  customCode?: string;
}

const beautifyHTMLOptions = {
  indent_size: 2,
  wrap_line_length: 0,
  preserve_newlines: true,
  jslint_happy: true,
  end_with_newline: false,
  indent_inner_html: true
};

const beautifyJSXOptions = {
  ...beautifyHTMLOptions,
  e4x: true
};

const JSXtoStringOptions = {
  filterProps: (val: any, key: string) => {
    if (!val) return false;
    if (val && val.name === 'actionHandler') return false;
    // if(val && typeof val === 'function') return false;
    return true;
  },
  showFunctions: true,
  functionValue: _fn => _ => {}
  // maxInlineAttributesLineLength: 10
};

const copyCode = (val: string) => navigator.clipboard.writeText(val);

const CopyComp = props => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: 'absolute',
        right: '0',
        top: '0',
        zIndex: 10
      }}
    >
      <Button
        size="tiny"
        style={{ borderRadius: '0', borderBottomLeftRadius: '4px' }}
        appearance="basic"
        onClick={onClick}
      >
        Copy
      </Button>
    </div>
  );
};

const renderCodeBlock = (val: string) => (
  <div style={{ position: 'relative' }}>
    <style>
      {`pre {
        margin: 0;
      }`}
    </style>
    <CopyComp onClick={() => copyCode(val)} />
    <SyntaxHighlighter language="javascript" style={vs2015} showLineNumbers={true}>
      {val}
    </SyntaxHighlighter>
  </div>
);

const getStory = () => {
  const { storyId } = __STORYBOOK_STORY_STORE__.getSelection();
  const story = __STORYBOOK_STORY_STORE__.fromId(storyId);
  return { storyId, story };
};

const getRawPreviewCode = (customCode, comp) => {
  if (customCode) {
    return `${generateImports(customCode, componentLib, '@innovaccer/design-system')}

${customCode}
    `;
  }
  const jsx = `${beautifyHTML(reactElementToJSXString(comp, JSXtoStringOptions), beautifyJSXOptions)}`;
  const importString = generateImports(jsx, componentLib, '@innovaccer/design-system');

  const code = `
${importString}

() => {
  return(
${jsx
  .split('\n')
  .map(l => `    ${l}`)
  .join('\n')}
  );
}
  `;
  return code;
};

const StoryComp = props => {
  const { customCode, noHtml, noStory } = props;
  const { story, storyId } = getStory();
  const comp = story.getOriginal()();
  const sp = story.parameters;
  const html = !noHtml ? beautifyHTML(renderToStaticMarkup(comp), beautifyHTMLOptions) : '';

  const [activeTab, setActiveTab] = React.useState<number>(0);
  const [jsxCode, setJsxCode] = React.useState<string>(getRawPreviewCode(customCode, comp));
  const [htmlCode, setHtmlCode] = React.useState<string>(`${html}`);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const importScope = props.imports;

  const renderHTMLTab = () => {
    if (!noHtml) {
      return <Tab label={'HTML'}>{renderCodeBlock(htmlCode)}</Tab>;
    }
    return <></>;
  };

  const TabsWrap = withLive(({ live, currentTab }) => {
    const { error, element: Element } = live;

    React.useEffect(() => {
      if (!error && currentTab === 1) {
        try {
          const htmlValue = beautifyHTML(renderToStaticMarkup(<Element />), beautifyHTMLOptions);
          setHtmlCode(htmlValue);
        } catch (e) {}
      }
    }, [currentTab]);

    return null;
  });

  const onChangeCode = updatedCode => {
    setJsxCode(updatedCode);
  };

  if (!noStory) {
    return (
      <Card shadow="light" className="overflow-hidden">
        <LiveProvider code={jsxCode} scope={{ ...DS, ...importScope }}>
          <Canvas
            className="my-0"
            withSource="none"
            withToolbar={true}
            isExpanded={isExpanded}
            additionalActions={[
              {
                title: 'Edit in sandbox',
                onClick: ev => {
                  ev.preventDefault();
                  openSandbox(jsxCode);
                }
              },
              {
                title: `${!isExpanded ? 'Show' : 'Hide'} code`,
                onClick: ev => {
                  setIsExpanded(!isExpanded);
                }
              }
            ]}
          >
            <LivePreview />
          </Canvas>

          {isExpanded && (
            <>
              <TabsWrap activeTab={activeTab} />
              <div className="DocPage-editorTabs">
                <TabsWrapper activeTab={activeTab} onTabChange={tab => setActiveTab(tab)}>
                  <Tab label={'React'}>
                    <div style={{ position: 'relative' }}>
                      <CopyComp
                        onClick={() => {
                          const editor = document.querySelector('.npm__react-simple-code-editor__textarea');
                          if (editor) copyCode(editor.value);
                        }}
                      />
                      <LiveEditor theme={vsDark} onChange={onChangeCode} />
                      <LiveError />
                    </div>
                  </Tab>
                  {renderHTMLTab()}
                </TabsWrapper>
              </div>
            </>
          )}
        </LiveProvider>
      </Card>
    );
  }
  return null;
};

export const docPage = () => {
  const { story, storyId } = getStory();
  const sp = story.parameters;
  const isEmbed = window.location.search.includes('embed=true');

  const { title, description, props: propsAttr, customCode, noHtml, noStory, noProps = isEmbed, imports } =
    sp.docs.docPage || {};
  const { component: { displayName } = {} } = sp;

  return (
    <div className="DocPage">
      {!isEmbed && (
        <>
          <Title> {title || displayName} </Title>
          <br />
        </>
      )}
      <Description>{description}</Description>
      <br />

      <StoryComp key={storyId} customCode={customCode} noHtml={noHtml} noStory={noStory} imports={imports} />

      {!noProps && (
        <>
          <br />
          <br />
          <Heading>PropTable</Heading>
          <ArgsTable {...propsAttr} />
        </>
      )}
    </div>
  );
};

export default docPage;
