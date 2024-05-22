const puppeteerCore = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

(async () => {
  const usePuppeteerBrowser = async () => {
    const args = ['--no-sandbox ', '--disable-setuid-sandbox'];
    try {
      return await puppeteerCore.launch({
        headless: true,
        args,
      });
    } catch (e) {
      // it's not installed
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line global-require
        require('child_process').exec(`node ${require.resolve(path.join('puppeteer-core', 'install.js'))}`, (error) =>
          error ? reject(error) : resolve(puppeteerCore.launch({ args }))
        );
      });
    }
  };

  console.log('------Extracting Mds-AI Stories------\n\n')

  // Launch the browser
  const browser = await usePuppeteerBrowser();
  const page = await browser.newPage();

  // Navigate to the Storybook URL
  const url = 'https://innovaccer.github.io/mds-ai/iframe.html?id=components-aibutton--primary&args=&viewMode=story';
  await page.goto(url, { waitUntil: 'networkidle0' });

  // Wait for the Storybook store to be available
  await page
    .waitForFunction(
      () => {
        return __STORYBOOK_PREVIEW__;
      },
      { timeout: 30000 }
    )
    .catch(() => {
      console.error('Timed out waiting for Storybook store to be available.');
      process.exit(1);
    });

  // Try to access stories data in a different way
  const stories = await page
    .evaluate(() => {
      const store = __STORYBOOK_PREVIEW__;

      if (store && store.extract) {
        return store.extract();
      } else {
        throw new Error('Storybook store is not defined');
      }
    })
    .catch((error) => {
      console.error('Error in page.evaluate:', error);
      process.exit(1);
    });

  // Close the browser
  await browser.close();

  // Create a directory to store the JSON files
  const outputDir = 'static/mds-ai';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const generateArgString = (args) => {
    const argsString = Object.entries(args)
      .map(([key, value]) => {
        if (typeof value === 'string') {
          return `${key}="${value}"`;
        } else if (typeof value === 'number' || typeof value === 'boolean') {
          return `${key}={${value}}`;
        } else if (typeof value === 'object' && Object.keys(value).length === 0) {
          // If the value is an empty object, we might want to handle it as null or some default value
          return `${key}={null}`;
        } else {
          // Handle other object cases if necessary
          return `${key}={${JSON.stringify(value)}}`;
        }
      })
      .join(' ');

    return argsString;
  };

  function createComponentString(data) {
    // Extract component name from the kind property
    const componentName = data.kind.split('/').pop();

    const argsString = generateArgString(data.args);

    // Construct the final component string
    const sourceCode = `<${componentName} ${argsString} />`;
    console.log(componentName,'Component SourceCode:', sourceCode);
    return sourceCode;
  }

  // Save the stories data as a JSON file
  await Promise.all(
    Object.keys(stories).map(async (key) => {
      const targetComponent = stories[key];
      if (targetComponent.parameters.__isArgsStory) {
        targetComponent.parameters.docs.source.originalSource = createComponentString(targetComponent);
      }
      return fs.writeFileSync(`${outputDir}/${key}.json`, JSON.stringify(stories[key], null, 2), 'utf-8');
    })
  );

  console.log(`\n\nStories data extracted and saved to ${outputDir}`);
})();
