const puppeteerCore = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

(async () => {
  const usePuppeteerBrowser = async () => {
    const args = [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ];
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

  console.log('------Extracting Stories------\n\n')

  // Launch the browser
  const browser = await usePuppeteerBrowser();
  const page = await browser.newPage();

  // Set a longer timeout for navigation
  page.setDefaultNavigationTimeout(60000); // 60 seconds
  page.setDefaultTimeout(60000); // 60 seconds

  // Navigate to the Storybook URL
  const url = 'http://localhost:5000/iframe.html?id=components-ai-ai-button-all--all&args=&viewMode=story';
  
  console.log(`Navigating to: ${url}`);
  
  try {
    await page.goto(url, { 
      waitUntil: 'domcontentloaded',
      timeout: 60000 
    });
    console.log('Navigation completed successfully');
    
    // Wait a bit more for the page to fully load
    await page.waitForTimeout(5000);
    
  } catch (error) {
    console.error('Navigation failed:', error.message);
    await browser.close();
    process.exit(1);
  }

  // Wait for the Storybook store to be available
  console.log('Waiting for Storybook store to be available...');
  await page
    .waitForFunction(
      () => {
        return typeof __STORYBOOK_PREVIEW__ !== 'undefined' && __STORYBOOK_PREVIEW__;
      },
      { timeout: 60000 }
    )
    .catch((error) => {
      console.error('Timed out waiting for Storybook store to be available:', error.message);
      browser.close();
      process.exit(1);
    });

  console.log('Storybook store is available, extracting stories...');

  // Try to access stories data in a different way
  const stories = await page
    .evaluate(async () => {
      try {
        const store = __STORYBOOK_PREVIEW__;
        
        // Try different methods to get stories
        if (store && store.extract) {
          const result = store.extract();
          
          // If it's a promise, await it
          if (result instanceof Promise) {
            const awaitedResult = await result;
            
            // Try to serialize it properly
            try {
              const serialized = JSON.parse(JSON.stringify(awaitedResult));
              return serialized;
            } catch (serializeError) {
              // Try to manually extract the data
              if (awaitedResult && typeof awaitedResult === 'object') {
                const manual = {};
                for (const key in awaitedResult) {
                  try {
                    manual[key] = JSON.parse(JSON.stringify(awaitedResult[key]));
                  } catch (e) {
                    // Skip keys that can't be serialized
                  }
                }
                return manual;
              }
            }
            return awaitedResult;
          } else {
            return JSON.parse(JSON.stringify(result));
          }
        } else if (store && store.storyStore) {
          const storyStore = store.storyStore;
          
          if (storyStore.extract) {
            const result = storyStore.extract();
            if (result instanceof Promise) {
              const awaited = await result;
              return JSON.parse(JSON.stringify(awaited));
            }
            return JSON.parse(JSON.stringify(result));
          } else if (storyStore.getStoriesJsonData) {
            const result = storyStore.getStoriesJsonData();
            if (result instanceof Promise) {
              const awaited = await result;
              return JSON.parse(JSON.stringify(awaited));
            }
            return JSON.parse(JSON.stringify(result));
          } else if (storyStore._stories) {
            return JSON.parse(JSON.stringify(storyStore._stories));
          }
        } else if (window.__STORYBOOK_STORY_STORE__) {
          const globalStore = window.__STORYBOOK_STORY_STORE__;
          
          if (globalStore.extract) {
            const result = globalStore.extract();
            if (result instanceof Promise) {
              const awaited = await result;
              return JSON.parse(JSON.stringify(awaited));
            }
            return JSON.parse(JSON.stringify(result));
          } else if (globalStore.getStoriesJsonData) {
            const result = globalStore.getStoriesJsonData();
            if (result instanceof Promise) {
              const awaited = await result;
              return JSON.parse(JSON.stringify(awaited));
            }
            return JSON.parse(JSON.stringify(result));
          }
        } else {
          return null;
        }
      } catch (error) {
        return { error: error.message };
      }
    })
    .catch((error) => {
      console.error('Error in page.evaluate:', error);
      return null;
    });

  // Close the browser
  await browser.close();

  // Check if stories is valid before processing
  if (!stories || typeof stories !== 'object') {
    console.error('No stories data found or invalid stories object');
    process.exit(1);
  }

  // Create a directory to store the JSON files
  const outputDir = 'static/sb';
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