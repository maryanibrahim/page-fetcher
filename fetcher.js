/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-new */
const request = require('request');
const fs = require('fs');
const urlModule = require('url');

// Command line arguments
const args = process.argv.slice(2);
const url = args[0];
const filePath = args[1];

// Check if URL and file path are provided
if (!url || !filePath) {
  console.error('Please provide a URL and a file path');
  process.exit(1);
}

// Check if URL is valid
try {
  new urlModule.URL(url);
} catch (err) {
  console.error('Invalid URL');
  process.exit(1);
}

// Make HTTP request
request(url, (error, response, body) => {
  if (error) {
    console.error(`Error making HTTP request: ${error}`);
    return;
  }

  // Write response body to file
  fs.writeFile(filePath, body, (error) => {
    if (error) {
      console.error(`Error writing file: ${error}`);
      return;
    }

    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});
