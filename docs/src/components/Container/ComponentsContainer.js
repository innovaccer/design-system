import React from 'react';
import {
  Heading,
  Tabs,
  Tab,
  Paragraph
} from '@innovaccer/design-system';
import { navigate } from 'gatsby';
import { getTabSlug } from '../../util/Helpers';

const ComponentsContainer = ({
  children,
  pageTitle,
  relativePagePath,
  tabs,
  pageDescription,
  frontmatter,
  activeIndex
}) => {
  const isSiblingTab = relativePagePath.split('.')[0] === '/' + pageTitle.replace(/\s/g, '');
  const tabsList = isSiblingTab ? frontmatter?.tabs : tabs;

  const onTabChangeHandler = (tabIndex) => {
    const nextTabSlug = getTabSlug(tabIndex, tabsList);
    const pagePath = relativePagePath.split('/');
    const pages = pagePath.slice(0, pagePath.length - 1);
    const path = `${pages.join('/')}/${nextTabSlug}/`;
    navigate(path, { state: { animation: false }, });
  };

  return (
    <>
      <Heading size='xl' className='my-5'>{isSiblingTab ? frontmatter?.title : pageTitle}</Heading>
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
