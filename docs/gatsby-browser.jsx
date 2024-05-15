import React from 'react';
import ReactDOM from "react-dom/client"
import '@fontsource/nunito-sans';
import '@fontsource/roboto-mono';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/700.css';
import '@fontsource/nunito-sans/800.css';
import '@fontsource/nunito-sans/900.css';
import "@innovaccer/design-system/css";
import "./src/components/css/prism.css";
import "prismjs/themes/prism-solarizedlight.css";
import './src/components/css/global.css';

import { LayoutWrapper } from './src/components/LayoutWrapper';

export const wrapPageElement = ({ element, props }) => {

  return <LayoutWrapper {...props}>{element}</LayoutWrapper>;
};

export const replaceHydrateFunction = () => {
  return (element, container) => {
    const root = ReactDOM.createRoot(container)
    root.render(element)
  }
}