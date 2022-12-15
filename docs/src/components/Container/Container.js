import React from 'react';
import { Paragraph, Heading, Tabs, Tab, Button } from '@innovaccer/design-system';
import { navigate } from 'gatsby';
import './Container.css';
import { useLogoItems } from '../../util/Logos';
import { onScrollHandler } from './Helper';

const Container = ({ children, pageTitle, tabs, relativePagePath, pageDescription, logos, frontmatter }) => {
  const nodes = useLogoItems();
  const page = relativePagePath.split('/');
  const pageName = page[page.length - 1].split('.')[0];

  const isSiblingTab = relativePagePath.split('.')[0] === '/' + pageTitle.replace(/\s/g, '');
  const tabsList = isSiblingTab ? frontmatter?.tabs : tabs;
  const logoList = isSiblingTab ? frontmatter?.logos : logos;

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

  const downloadAllLogos = () => {
    const images = logoList.map((logo) => {
      const filteredGatsbyImage = nodes.filter((img) => img.fluid.src.includes(logo));
      if (filteredGatsbyImage.length) {
        return {
          name: logo,
          src: filteredGatsbyImage[0].fluid.src,
        };
      }
    });
    images.map((image) => {
      let element = document.createElement('a');
      element.href = image.src;
      element.setAttribute('download', image.name);
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    });
  };

  return (
    <>
      <div className="mx-11 mb-6">
        <Heading size="xl" className="my-5">
          {isSiblingTab ? frontmatter?.title : pageTitle}
        </Heading>
        {logoList && logoList.length && (
          <Button className="download-logos" icon="download" onClick={downloadAllLogos}>
            Download all
          </Button>
        )}
        <Paragraph>{isSiblingTab ? frontmatter?.description : pageDescription}</Paragraph>
      </div>
      {tabsList && tabsList.length && (
        <>
          <div className="TabHeader mb-8 position-sticky bg-light" id="tab-container">
            <div className="px-11">
              <Tabs
                activeIndex={activeIndex}
                className={`${isTabPinned ? 'border-bottom-0' : 'TabBorder'}`}
                onTabChange={onTabChangeHandler}
              >
                {tabsList.map((tab, index) => (
                  <Tab label={tab} key={index}></Tab>
                ))}
              </Tabs>
            </div>
            <div className={`${isTabPinned ? 'TabBorder--sticky' : ''}`}></div>
          </div>
        </>
      )}
      <div className="px-11">{children}</div>
    </>
  );
};

export default Container;
