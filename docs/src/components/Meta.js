import React from 'react';
import { Helmet } from 'react-helmet';
import { useMetadata } from '../util/hooks';

const favicon = '/icons/favicon_io/favicon-16x16.png';
const faviconLarge = '/icons/favicon_io/favicon-32x32.png';
const faviconApple = '/icons/favicon_io/apple-touch-icon.png';
const cardImage = '/icons/card-image.png';

const Meta = ({ docTitle, docDescription, pageKeywords, titleType, frontmatter, relativePagePath }) => {
  const { title, description, keywords, lang } = useMetadata();
  const isSiblingTab = relativePagePath?.split('.')[0] === '/' + docTitle?.replace(/\s/g, '');
  const pageTitle = isSiblingTab ? frontmatter?.title : docTitle;
  const pageDescription = isSiblingTab ? frontmatter?.description : docDescription;

  const getPageTitle = () => {
    switch (titleType) {
      case 'page':
        // use site title for fallback
        return pageTitle || title;
      case 'site':
        return title;
      case 'append':
        return `${title}${pageTitle ? ` – ${pageTitle}` : ''}`;
      case 'prepend':
        return `${pageTitle ? `${pageTitle} – ` : ''}${title}`;
      default:
        return null;
    }
  };

  return (
    <Helmet
      title={getPageTitle()}
      meta={[
        {
          property: 'title',
          content: pageTitle || title,
        },
        {
          name: 'description',
          content: pageDescription || description,
        },
        {
          name: 'keywords',
          content: pageKeywords || keywords,
        },
        {
          property: `image`,
          content: cardImage,
        },
        {
          property: `type`,
          content: 'website',
        },

        {
          name: `og:title`,
          content: pageTitle || title,
        },
        {
          name: `og:description`,
          content: pageDescription || description,
        },
        {
          name: `og:image`,
          content: cardImage,
        },
        {
          name: `og:image:alt`,
          content: 'Masala Design System logo',
        },

        {
          name: `twitter:card`,
          content: 'masala-design-system',
        },
        {
          name: `twitter:title`,
          content: pageTitle || title,
        },
        {
          name: `twitter:description`,
          content: pageDescription || description,
        },
        {
          name: `twitter:image`,
          content: cardImage,
        },
        {
          name: `twitter:image:alt`,
          content: 'Masala Design System logo',
        },
      ]}
    >
      <html lang={lang} />
      <link rel='icon' href={favicon} />
      <link rel='icon' href={faviconLarge} />
      <link rel='icon' href={faviconApple} />
    </Helmet>
  );
};

export default Meta;
