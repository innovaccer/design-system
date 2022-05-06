import React, { useEffect, useState, useRef } from 'react';
import { useInPageNavItems } from '../../util/InPageNavItems';
import { Subheading } from '@innovaccer/design-system';
import { Link } from 'gatsby';
import './TableOfContent.css';

const TableOfContent = (props) => {
  const { relativePagePath, location, inPageNavItems, onInPageNavClickHandler, activeInPageNav } = props;
  // const clickedRef = useRef(false);
  // const unsetClickedRef = useRef(null);

  // let navItems = useInPageNavItems(relativePagePath);
  // // const [active, setActive] = useState('');
  // let active = '';

  // function setActive(value){
  //   active = value;
  // }

  // useEffect(() => {
  //   const navIds = getIds(navItems);
  //   let element = document.getElementById("main-container");
  //   element && element.addEventListener('scroll', (e) => onScrollHandler(e, navIds), true);
  //   return () => {
  //     element.removeEventListener('scroll', (e) => onScrollHandler(e, navIds), true);
  //   }
  // }, []);

  // useEffect(() => {
  //   let urlHash = '';
  //   if (location && location.hash) {
  //     urlHash = location.hash.slice(1);
  //     setActive(urlHash);
  //   } else if(navItems && navItems.length) {
  //      setActive(navItems[0].url?.slice(1));
  //   }
  // }, []);

  // const isInViewport = (element) => {
  //   const rect = element && element?.getBoundingClientRect();
  //   let flag = (rect.top-60)>= 0 && rect.bottom+25 <= (window.innerHeight || document.documentElement.clientHeight);
  //   if (flag) return "inViewPort";
  //   else if(rect.bottom+25 > (window.innerHeight || document.documentElement.clientHeight)) return "belowViewPort";
  //   else return "aboveViewPort";
  // }

  // const onScrollHandler = (e, idList) => {
  //   console.log('inside scroll handler')
  //   // Don't set the active index based on scroll if a link was just clicked
  //   if (clickedRef.current) {
  //     console.log('inside 111');
  //     return;
  //   }
  //   if(e.target.classList.contains("in-page-nav")){
  //     console.log('inside 222');
  //     return;
  //  }
  //   const headerHeight = document.getElementById('mainHeader').getBoundingClientRect().height;
  //   const viewportHeight = document.body.offsetHeight - headerHeight;
  //   let resultFound = false;

  //   idList && idList.forEach((item) => {
  //     let element = document.getElementById(item);
  //     if (element && !resultFound) {
  //       const { top, height } = element.getBoundingClientRect();
  //       if (top > 0 && viewportHeight > top - height) {
  //         console.log('inside 333');
  //         setActive(item);
  //         resultFound = true;
  //         let activeElement = document.getElementsByClassName('active-link')[0];
  //         let flag = activeElement && isInViewport(activeElement);
  //         if(flag === "belowViewPort") activeElement.scrollIntoView(true);
  //         else if(flag === "aboveViewPort") activeElement.scrollIntoView(true);
  //       };
  //     } else{
  //     console.log('inside 444');
  //     }
  //   });
  // };

  // const onClickHandler = (e, itemUrl) => {
  //   setActive(itemUrl);

  //   // Used to disable onScrollHandler if the page scrolls due to a click
  //   clickedRef.current = true;
  //   unsetClickedRef.current = setTimeout(() => {
  //     clickedRef.current = false;
  //   }, 0);
  // };

  // function getIds(items) {
  //   return items.reduce((acc, item) => {
  //     if (item.url) {
  //       // url has a # as first character, remove it to get the raw Id
  //       acc.push(item.url.slice(1));
  //     }
  //     if (item.items) {
  //       acc.push(...getIds(item.items));
  //     }
  //     return acc;
  //   }, []);
  // }

  function renderItems(items) {
    return (
      <ul className='table-of-content-list pr-8'>
        {items && items.map((item, key) => {
          return (
            <li key={key}>
              <div
                className={`${activeInPageNav == item.url?.slice(1) ? 'active-link' : ''
                  }`}
              >
                <Link
                  to={item.url}
                  onClick={(e) => onInPageNavClickHandler(e, item.url.slice(1))}
                  className='toc-link'
                  style={{
                    display: `${item.title ? 'inline-block' : 'none'
                      }`,
                  }}
                >
                  {item.title}
                </Link>
              </div>
              {item.items && renderItems(item.items)}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className='d-flex flex-column right-nav-container overflow-hidden'>
      {inPageNavItems && inPageNavItems.length ? (
        <>
          <Subheading
            appearance='subtle'
            className='pl-6 mt-10'
          >
            CONTENTS
          </Subheading>
          {renderItems(inPageNavItems)}
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default TableOfContent;
