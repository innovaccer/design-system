import fs from 'fs';
import path from 'path';

export function concatTokenCSS(directories, files) {
  return {
    name: 'concat-token-css',
    generateBundle(options, bundle) {
      let concatenatedCSSContent = '';

      // Iterate over each directory
      directories.forEach(directory => {
        // Read all files in the specified directory
        const dirFiles = fs.readdirSync(directory);

        // Filter and read the contents of CSS files
        dirFiles.forEach(file => {
          if (file.endsWith('.css')) {
            const absolutePath = path.resolve(directory, file);
            const fileContent = fs.readFileSync(absolutePath, 'utf8');
            concatenatedCSSContent += `${fileContent}\n`;
          }
        });
      });

      // Iterate over each file
      files.forEach(file => {
        if (file.endsWith('.css')) {
          const absolutePath = path.resolve(file);
          const fileContent = fs.readFileSync(absolutePath, 'utf8');
          concatenatedCSSContent += `${fileContent}\n`;
        }
      });

      // Append the concatenated content to the resultant CSS file
      for (const fileName of Object.keys(bundle)) {
        if (fileName.endsWith('.css')) {
          const asset = bundle[fileName];
          asset.source = `${concatenatedCSSContent}${asset.source}`;
        }
      }
    }
  };
}
