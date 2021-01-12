#!/usr/bin/env node

/**
 * action to push notification to google chat webhook api
 */

const http = require("https");

const options = {
  "method": "POST",
  "hostname": "chat.googleapis.com",
  "port": null,
  "path": process.env.GCHAT_PATH,
  "headers": {
    "cache-control": "no-cache"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

const repo = "https://github.com/innovaccer/design-system";
const pkg = require(`${process.cwd()}/package.json`);
const version = `v${pkg.version}`

const message = {
  "cards": [
    {
      "sections": [
        {
          "widgets": [
            {
              "keyValue": {
                "topLabel": "Design system",
                "content": `${version}`,
                "contentMultiline": "false",
                "bottomLabel": "Released",
                "onClick": {
                  "openLink": {
                    "url": `${repo}/releases/tag/${version}`
                  }
                },
                "icon": "FLIGHT_ARRIVAL",
                "button": {
                  "textButton": {
                    "text": "View Changelog",
                    "onClick": {
                      "openLink": {
                        "url": `${repo}/blob/master/CHANGELOG.md`
                      }
                    }
                  }
                }
              }
            }
          ]
        }
      ]
    }
  ]
}

req.write(JSON.stringify(message));
req.end();
