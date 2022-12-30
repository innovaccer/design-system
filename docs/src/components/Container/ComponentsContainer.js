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
    element.addEventListener('scroll', () =>{ 
      const isPinnedToTop = onScrollHandler();
      setIsTabPinned(isPinnedToTop)
    }, true);
    return () => element.removeEventListener('scroll', () => setIsTabPinned(isPinnedToTop),true);
  }, []);

  const getTabSlug = (tabIndex) => {
    const tabName = tabsList[tabIndex];
    let tabSlug = '';
    if (tabName.length) {
      tabSlug = tabName.toLowerCase().replace(/\s/g, '-');
    }
    return tabSlug;
  };

  const activeTab =
    tabsList && tabsList.length ? tabsList.findIndex((tab, index) => getTabSlug(index) === pageName.toLowerCase()) : '';

  const [activeIndex, setActiveIndex] = React.useState(activeTab || 0);
  const [isTabPinned, setIsTabPinned] = React.useState(false);

  const onTabChangeHandler = (tabIndex) => {
    const nextTabSlug = getTabSlug(tabIndex);
    const pagePath = relativePagePath.split('/');
    const pages = pagePath.slice(0, pagePath.length - 1);
    const path = `${pages.join('/')}/${nextTabSlug}/`;
    navigate(path, { state: { animation: false } });
    setActiveIndex(tabIndex);
  };

  return (
    <>
      <div className='px-11'>
        <Heading size="xl" className="my-5" >
          {isSiblingTab ? frontmatter?.title : pageTitle}
        </Heading>
        <Paragraph >{isSiblingTab ? frontmatter?.description : pageDescription}</Paragraph>
      </div>
      {tabsList && tabsList.length && (
        <div className="TabHeader mb-7 position-sticky bg-light" id='tab-container'>
          <div className="px-11 mt-4">
            <Tabs activeIndex={activeIndex} className={`${isTabPinned ? "border-bottom-0" : "TabBorder"}`} onTabChange={onTabChangeHandler}>
              {tabsList.map((tab, index) => (
                <Tab label={tab} key={index} ></Tab>
              ))}
            </Tabs>
          </div>
          <div className={`${isTabPinned ? "TabBorder--sticky" : ""}`}></div>
        </div>
      )}
      <div className='px-11'> 
      {children}
      </div>
    </>
  );
};

export default ComponentsContainer;
