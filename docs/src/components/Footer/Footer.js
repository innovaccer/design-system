import React from 'react';
import { Link, Text } from '@innovaccer/design-system';
import { useFooterItems } from '../../util/FooterItems';
import './Footer.css';

const Footer = ({ relativePagePath }) => {
  const items = useFooterItems();
  return (
    <div
      className={`d-flex w-100 px-11 py-7 bg-secondary-lightest position-sticky align-items-center ${
        relativePagePath === '/home' ? 'justify-content-center' : ''
      }`}
    >
      <div>
        {items.map(({ link, label }, index) => {
          let isExternal;
          if (link) {
            isExternal = link.startsWith('http://') || link.startsWith('https://');
          }
          return !link ? (
            <Text key={index} appearance={'subtle'} className={'mr-8'}>
              {label}
            </Text>
          ) : (
            <Link
              key={index}
              href={link}
              className={`link ${index > 0 ? 'mr-7' : 'mr-8'} `}
              target={isExternal && '_blank'}
              disabled={index === 0}
            >
              <Text appearance={index === 0 ? 'subtle' : 'default'}>{label}</Text>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
