const request = require('request');


const fetchBreedDescription = function (breedName, callback) {
  console.log('here');
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {  //  <= response?
    if (error === null) {
      if (body === '[]') {
        console.log(`Sorry, we have no info on that type of cat`);
      }
      const desc = JSON.parse(body);
      callback(error, desc);
    } else {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };
