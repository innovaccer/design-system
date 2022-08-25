import React from 'react';
import * as MDSComponents from '@innovaccer/design-system';
import PropsTable from './PropsTable';
import { ArgsTable } from './PropsTable/Table';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import Rules from './Rules/Rules';
import DOs from './Rules/DOs';
import DONTs from './Rules/DONTs';
import InlineMessage from './Rules/InlineMessage';
import IconWrapper from './Rules/IconWrapper';
import MDXHeading from './MDXHeading';

const Rectangle = ({ name }) => {
  return (
    <div className='rectangle'>{name}</div>
  );
};

const useGetStorybookData = async (name) => {
  let componentName = name;
  let componentPath = `/sb/${componentName}.json`;

  // To handle Rich Text Editor Stories
  if (name.startsWith('library')) {
    componentPath = `/rte/${componentName}.json`;
  }

  const data = await axios.get(componentPath).then(({ data = {} }) => {
    if (!Object.keys(data).length) {
      return Promise.reject(`Could not get details for id: ${componentName}`);
    }
    return data;
  });

  return data;
};

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

const Preview = ({ name }) => {
  return (
    <div>
      <PropsTable
        dataProvider={() => getJsxCode(name)}
      />
    </div>
  );
};

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

const FrameWrapper = ({ componentName }) => {
  const onLoad = () => {
    document.getElementById('iframe-loader').style.display = 'none';
  };

  return (
    <>
      <div id="iframe-loader">Loading ...</div>
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
};

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
    return <div> Loading ... </div>;
  }

  if (error) {
    return (
      <MDSComponents.Message
        className="my-7"
        appearance="alert"
        title={error}
        description="Hold tight, we are working to get it up for you to interact with."
      />
    );
  }

  return (
    <div className="overflow-x-scroll">{embed ? <FrameWrapper componentName={name} /> : <ArgsTable rows={data} />}</div>
  );
};

const A11yBlock = ({ name }) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    useGetStorybookData(name)
      .then((componentData) => {
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
    return <div>Loading ...</div>;
  }

  if (error) {
    return (
      <MDSComponents.Message
        className="my-7"
        appearance="alert"
        title={error}
        description="Hold tight, we are working to get it up for you to interact with."
      />
    );
  }
  return <div className="mb-8">{data && <Markdown className="A11y-markdown">{data}</Markdown>}</div>;
};

const List = ({ children }) => {
  return (
    <div className='list'>
      {children}
    </div>
  )
}

const OrderedList = ({ children }) => {
  return (
    <ol className='ordered-list'>
      {children}
    </ol>
  )
}

const Caption = ({ children }) => {
  return (
    <MDSComponents.Text size="small" appearance="subtle" className="d-flex my-4 justify-content-center text-align--center">
      {children}
    </MDSComponents.Text>
  );
};

export const MDXComponents = {
  ...MDSComponents,
  Preview: Preview,
  PreviewWithPropTable: PreviewWithPropTable,
  A11yBlock: A11yBlock,
  Rules,
  DOs,
  DONTs,
  InlineMessage,
  IconWrapper,
  Caption,
  ul: List,
  ol: OrderedList,
  h1: (props) => <MDXHeading size='xxl' headingInfo={props} />,
  h2: (props) => <MDXHeading size='xl' headingInfo={props} />,
  h3: (props) => <MDXHeading size='l' headingInfo={props} />,
  h4: (props) => <MDXHeading size="m" headingInfo={props} />,
  h5: (props) => <MDXHeading size="s" headingInfo={props} />,
  Rectangle: (props) => <Rectangle {...props} />,
}
