import React from 'react';
import { Link } from 'gatsby';
import { useHeaderItems } from '../../util/HeaderItems';
import './Header.css';
import { Link as MDSLink } from '@innovaccer/design-system';
import Search from '../GlobalSearch/Search';

const Header = ({ relativePagePath }) => {
  const items = useHeaderItems();
  const checkActive = (label) => {
    const pagePath = relativePagePath.split('/');
    if(pagePath[1]===label.toLowerCase() || pagePath[2]===label.toLowerCase()) return true; 
    return false; 
  }
  return (
    <div
      id="mainHeader"
      className='header bg-light d-flex w-100 position-sticky px-5'
    >
      <Link to='/' className='HeaderLink ml-0'>
        <img src="/images/headerLogo.png" width="290px" height="28px" />
      </Link>
      <div>
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
              className={`HeaderLink  ${checkActive(label)
                  ? 'HeaderLink--active'
                  : 'HeaderLink--default'
                }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
      <Search />
    </div>
  );
};

export default Header;
