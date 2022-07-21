import React from 'react';
import { Helmet } from 'react-helmet';
import { useMetadata } from '../util/hooks';

const favicon = '/icons/favicon_io/favicon-16x16.png';
const faviconLarge = '/icons/favicon_io/favicon-32x32.png';
const faviconApple = '/icons/favicon_io/apple-touch-icon.png';
const cardImage = '/icons/card-image.png';
const GA_MEASUREMENT_ID = "G-HTLCYE0XZT";

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

  function embedGoogleAnalytics() {
    // <!-- Global site tag (gtag.js) - Google Analytics -->
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer && window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID);
    }
  }

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
      <meta
        http-equiv="Content-Security-Policy"
        content="  default-src 'self' 'unsafe-eval'; style-src 'unsafe-inline' innovaccer/design-system/css; img-src 'self' data: ; script-src-elem 'self' www.googletagmanager.com ; font-src https://fontsource.org/ ; connect-src 'self' www.google-analytics.com ; frame-src mds.innovaccer.com"
      ></meta>
      <html lang={lang} />
      <link rel='icon' href={favicon} />
      <link rel='icon' href={faviconLarge} />
      <link rel='icon' href={faviconApple} />
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
      <script>
        {embedGoogleAnalytics()}
      </script>
    </Helmet>
  );
};

export default Meta;