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

export default (jsxStoryCode: string) => {
  const structuredCode = jsxStoryCode
    .trim()
    // @ts-ignore
    .replaceAll('// import', 'import')
    .replace('() => ', 'const App = () => ')
    .replaceAll('<>', '<React.Fragment>')
    .replaceAll('</>', '</React.Fragment>')
    .replaceAll('action(', 'console.log(');

  const code = `
import ReactDOM from "react-dom";
import React from "react";
import "@innovaccer/design-system/css";

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
