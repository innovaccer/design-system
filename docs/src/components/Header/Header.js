import React from 'react';
import { Link } from 'gatsby';
import { useHeaderItems } from '../../util/HeaderItems';
import './Header.css';
import { Link as MDSLink } from '@innovaccer/design-system';

const Header = ({ relativePagePath }) => {
  const items = useHeaderItems();
  const checkactive = (label) => {
    let res = false;
    const pagePath = relativePagePath.split('/');
    if(pagePath.length>1 && pagePath[1]===label.toLowerCase()) res = true;
    if(pagePath.length>2 && pagePath[2]===label.toLowerCase()) res = true; 
    return res; 
  }
  return (
    <div
      id="mainHeader"
      className='header bg-light d-flex w-100 position-sticky px-5'
    >
      <Link to='/' className='HeaderLink ml-0'>
        <img src="/images/headerLogo.png" width="290px" height="28px" />
      </Link>
      <div >
        {items.map(({ link, label }, index) => {
          const isExternal =
            link.startsWith('http://') ||
            link.startsWith('https://');

          if (isExternal) {
            return (
              <MDSLink
                key={index}
                href={link}
                className="HeaderLink HeaderLink--default"
                target="_blank"
              >
                {label}
              </MDSLink>
            )
          }
          return (
            <Link
              key={index}
              to={link}
              className={`HeaderLink ${ checkactive(label)
                  ? 'HeaderLink--active'
                  : 'HeaderLink--default'
                }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
