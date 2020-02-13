const request = require('request');

const input = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  if (body === '[]') {
    console.log(`Sorry, we have no info on that type of cat`);
  }
  const data = JSON.parse(body);
  console.log(data);
});
