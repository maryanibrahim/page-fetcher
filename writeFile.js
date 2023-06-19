/* eslint-disable no-console */
const fs = require('fs');

// Data to write
const data = 'Hello, World!';

// Write data to a file
fs.writeFile('hello.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
