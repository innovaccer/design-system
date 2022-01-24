import React from 'react';
import {
  Heading,
  Tabs,
  Tab,
  Paragraph
} from '@innovaccer/design-system';
import { navigate } from 'gatsby';

const ComponentsContainer = ({
  children,
  pageTitle,
  relativePagePath,
  tabs,
  pageDescription,
  frontmatter
}) => {
  const page = relativePagePath.split('/');
  const pageName = page[page.length - 1].split('.')[0];
  const isSiblingTab = relativePagePath.split('.')[0] === '/' + pageTitle.replace(/\s/g, '');
  const tabsList = isSiblingTab ? frontmatter?.tabs : tabs;

  const getTabSlug = (tabIndex) => {
    const tabName = tabsList[tabIndex];
    let tabSlug = '';
    if (tabName.length) {
      tabSlug = tabName.toLowerCase().replace(/\s/g, '-');
    }
    return tabSlug;
  };

  const activeTab =
    tabsList && tabsList.length
      ? tabsList.findIndex(
        (tab, index) =>
          getTabSlug(index) === pageName.toLowerCase()
      )
      : '';

  const [activeIndex, setActiveIndex] = React.useState(
    activeTab || 0
  );

  const onTabChangeHandler = (tabIndex) => {
    const nextTabSlug = getTabSlug(tabIndex);
    const pagePath = relativePagePath.split('/');
    const pages = pagePath.slice(0, pagePath.length - 1);
    const path = `${pages.join('/')}/${nextTabSlug}/`;
    navigate(path, { state: { animation: false }, });
    setActiveIndex(tabIndex);
  };

  return (
    <>
      <Heading>{isSiblingTab ? frontmatter?.title : pageTitle}</Heading>
      <Paragraph>{isSiblingTab ? frontmatter?.description : pageDescription}</Paragraph>

      {tabsList && tabsList.length && (
        <div className='mb-7 mt-4'>
          <Tabs
            activeIndex={activeIndex}
            onTabChange={onTabChangeHandler}
          >
            {tabsList.map((tab, index) => (
              <Tab label={tab} key={index}></Tab>
            ))}
          </Tabs>
        </div>
      )}
      {children}
    </>
  );
};

export default ComponentsContainer;
