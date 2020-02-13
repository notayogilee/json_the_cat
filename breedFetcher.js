const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {  
    if (error === null) {
      
      if (body === '[]') {
      
        callback(error, null);
      }else {
      const description = JSON.parse(body);
      const desc = description[0].description;
      callback(error, desc);}
    } else {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };
