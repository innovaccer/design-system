import React from 'react';
import { Heading, Tabs, Tab, Paragraph } from '@innovaccer/design-system';
import "./Container.css"
import { navigate } from 'gatsby';
import { onScrollHandler } from './Helper';

const ComponentsContainer = ({ children, pageTitle, relativePagePath, tabs, pageDescription, frontmatter }) => {
  const page = relativePagePath.split('/');
  const pageName = page[page.length - 1].split('.')[0];
  const isSiblingTab = relativePagePath.split('.')[0] === '/' + pageTitle.replace(/\s/g, '');
  const tabsList = isSiblingTab ? frontmatter?.tabs : tabs;

  React.useEffect(() => {
    let element = document.getElementById('main-container');
    element.addEventListener('scroll', () => {
      const isPinnedToTop = onScrollHandler();
      setIsTabPinned(isPinnedToTop)
    }, true);
    return () => element.removeEventListener('scroll', () => setIsTabPinned(isPinnedToTop), true);
  }, []);

  const getTabSlug = React.useCallback((tabIndex) => {
    const tabName = tabsList[tabIndex];
    return tabName?.toLowerCase().replace(/\s/g, '-') || '';
  }, [tabsList]);

  const [isTabPinned, setIsTabPinned] = React.useState(false);

  const onTabChangeHandler = (tabIndex) => {
    const nextTabSlug = getTabSlug(tabIndex);
    const pagePath = relativePagePath.split('/');
    const pages = pagePath.slice(0, pagePath.length - 1);
    const path = `${pages.join('/')}/${nextTabSlug}/`;
    navigate(path, { state: { animation: false } });
  };

  const activeTabIndex = React.useMemo(() => {
    const tabIndex = tabsList?.length
      ? tabsList.findIndex((tab, index) => getTabSlug(index) === pageName.toLowerCase())
      : 0;

    return tabIndex !== -1 ? tabIndex : 0;
  }, [tabsList, pageName]);

  return (
    <>
      <div className='px-11'>
        <Heading size="xl" className="my-5" >
          {isSiblingTab ? frontmatter?.title : pageTitle}
        </Heading>
        <Paragraph >{isSiblingTab ? frontmatter?.description : pageDescription}</Paragraph>
      </div>
      <div className='px-11'>
        {tabsList && tabsList.length && (
          <div className="TabHeader mb-7 position-sticky bg-light" id='tab-container' data-test='Docs-Tab-Header'>
            <div className="mt-4">
              <Tabs activeIndex={activeTabIndex} className={`${isTabPinned ? "border-bottom-0" : "TabBorder"}`} onTabChange={onTabChangeHandler}>
                {tabsList.map((tab, index) => (
                  <Tab label={tab} key={index} ></Tab>
                ))}
              </Tabs>
            </div>
            <div className={`${isTabPinned ? "TabBorder--sticky" : ""}`}></div>
          </div>
        )}
        {children}
      </div>
    </>
  );
};

export default ComponentsContainer;
