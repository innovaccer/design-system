import React from 'react';
import { Link } from 'gatsby';
import { useHeaderItems } from '../../util/HeaderItems';
import './Header.css';
import { Link as MDSLink } from '@innovaccer/design-system';
import Search from '../GlobalSearch';

const Header = ({ relativePagePath }) => {
  const ref = React.createRef();
  const items = useHeaderItems();

  const checkActive = (label) => {
    const pagePath = relativePagePath.split('/');
    if (pagePath[1] === label.toLowerCase() || pagePath[2] === label.toLowerCase()) return true;
    return false;
  }

  const onClickHandler = () => {
    localStorage.removeItem('leftNavScrollPosition');
  }

  return (
    <div
      id="mainHeader"
      ref={ref}
      className='header bg-light d-flex w-100 position-sticky px-5'
    >
      <div className='d-flex justify-content-start align-items-center'>
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
                  target="_blank"
                  onClick={onClickHandler}
                  className="HeaderLink HeaderLink--default"
                >
                  {label}
                </MDSLink>
              )
            }
            return (
              <Link
                to={link}
                key={index}
                onClick={onClickHandler}
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
      </div>
      <Search parentRef={ref} />
    </div>
  );
};

export default Header;
