import React from 'react';
import * as MDSComponents from '@innovaccer/design-system';
import PropsTable from '../PropsTable';
import { ArgsTable } from '../PropsTable/Table';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import Rules from '../Rules/Rules';
import DOs from '../Rules/DOs';
import DONTs from '../Rules/DONTs';
import InlineMessage from '../Rules/InlineMessage';
import IconWrapper from '../Rules/IconWrapper';
import MDXHeading from '../MDXHeading';

const Rectangle = ({ name }) => {
  return (
    <div className='rectangle'>{name}</div>
  );
};

const useGetStorybookData = async (name) => {
  let componentName = name;

  if (!name.startsWith('components')) {
    componentName = `components-${componentName}`
  }

  const data = await axios.get(`/sb/${componentName}.json`)
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

const PreviewWithPropTable = ({ name }) => {

  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    getPropTableData(name)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(`Could not get details for id: ${name}`);
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
    <div className="overflow-x-scroll">
      <ArgsTable rows={data} />
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

const List = ({ children }) => {
  return (
    <div className='list'>
      {children}
    </div>
  )
}

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
    ul: List,
    h1: (props) => <MDXHeading size='xxl' headingInfo={props} />,
    h2: (props) => <MDXHeading size='xl' headingInfo={props} />,
    h3: (props) => <MDXHeading size='l' headingInfo={props} />,
    h4: (props) => <MDXHeading size="m" headingInfo={props} />,
    h5: (props) => <MDXHeading size="s" headingInfo={props} />,
    Rectangle: (props) => <Rectangle {...props} />,
  }
