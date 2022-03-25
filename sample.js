'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'F1h0239h1XTPfrvtCbcG5pFHrskfxoZPhoCqnALdqgV3cCNj5LpRCZodMlI5GonuajWsBxYifq3cMg-l59NBv88xsKP1X49XGgl-L-oj24YTVMsqnS8Scy7jLXg8YnYx'


const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});
