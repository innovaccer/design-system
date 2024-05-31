const fs = require('fs');
const path = require('path');

// Define the base paths for the core and css directories
const corePath = path.join(__dirname, 'core', 'components');
const cssPath = path.join(__dirname, 'css', 'src', 'components');

// Function to get all files recursively in a directory
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

// Get all .tsx files from the core components directory
const tsxFiles = getAllFiles(corePath).filter((file) => file.endsWith('.tsx'));

// Get all .css files from the css components directory
const cssFiles = getAllFiles(cssPath).filter((file) => file.endsWith('.css'));

// Function to find the corresponding .tsx file for a given .css file
function findTsxFile(cssFile) {
  const cssFileName = path.basename(cssFile, '.css');
  return tsxFiles.find((tsxFile) => {
    const tsxFileName = path.basename(tsxFile, '.tsx');
    return tsxFileName.toLowerCase() === cssFileName.toLowerCase();
  });
}

// Move and rename the CSS files
cssFiles.forEach((cssFile) => {
  const tsxFile = findTsxFile(cssFile);

  if (tsxFile) {
    const tsxDir = path.dirname(tsxFile);
    const newCssFileName = `${path.basename(cssFile, '.css')}.module.css`;
    const newCssFilePath = path.join(tsxDir, newCssFileName);

    fs.rename(cssFile, newCssFilePath, (err) => {
      if (err) {
        console.error(`Error moving file ${cssFile} to ${newCssFilePath}:`, err);
      } else {
        console.log(`Moved and renamed ${cssFile} to ${newCssFilePath}`);
      }
    });
  }
});
