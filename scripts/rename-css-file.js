const fs = require('fs');
const path = require('path');

const folderPath = '../css/src/components'; // Adjust the folder path if your CSS files are in a different directory

// Read all files in the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }

  // Filter CSS files
  const cssFiles = files.filter(file => file.endsWith('.css') && !file.endsWith('.module.css'));

  cssFiles.forEach(file => {
    const oldPath = path.join(folderPath, file);
    const newPath = path.join(folderPath, file.replace('.css', '.module.css'));

    // Rename file
    fs.rename(oldPath, newPath, err => {
      if (err) {
        console.error(`Error renaming file ${file}:`, err);
      } else {
        console.log(`Renamed: ${file} -> ${path.basename(newPath)}`);
      }
    });
  });
});
