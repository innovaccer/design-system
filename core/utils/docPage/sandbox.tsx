import * as LZString from 'lz-string';

// https://github.com/codesandbox/codesandbox-importers/blob/master/packages/import-utils/src/api/define.ts

type IPackage = {
  dependencies: object;
};

interface IFiles {
  [key: string]: {
    content: string | IPackage;
    isBinary?: boolean;
  };
}

const compress = (input: string) => {
  return LZString.compressToBase64(input)
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, ''); // Remove ending '='
};

const getParameters = (options: { files: IFiles }) => {
  return compress(JSON.stringify(options));
};

const replaceAll = function (original: string, matchString: string, replaceString: string) {
  // If a regex pattern
  if (Object.prototype.toString.call(matchString).toLowerCase() === '[object regexp]') {
    return original.replace(matchString, replaceString);
  }

  // If a string
  return original.replace(new RegExp(matchString, 'g'), replaceString);
};

export default (jsxStoryCode: string) => {
  let structuredCode = replaceAll(jsxStoryCode.trim(), '// import', 'import').replace('() => {', 'const App = () => {');
  structuredCode = replaceAll(structuredCode, '<>', '<React.Fragment>');
  structuredCode = replaceAll(structuredCode, '</>', '</React.Fragment>');

  const code = `
import ReactDOM from "react-dom";
import React from "react";
import "@innovaccer/design-system/css/dist/index.css";
${structuredCode}

ReactDOM.render(<App />, document.getElementById("root"));
`;

  const html = `
<link
  href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
  rel="stylesheet"
/>
<div class="p-6">
  <div id="root"></div>
</div>

  `;

  const parameters = getParameters({
    files: {
      'package.json': {
        content: {
          dependencies: {
            react: '16.12.0',
            'react-dom': '16.12.0',
            '@innovaccer/design-system': 'latest',
          },
        },
      },
      'index.js': {
        content: code,
      },
      'index.html': {
        content: html,
      },
    },
  });

  const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;
  return window.open(url);
};
