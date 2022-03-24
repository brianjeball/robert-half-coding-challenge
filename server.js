import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

export function fetchQuery() {
    var config = {
        method: 'get',
        url: 'https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco',
        headers: { 
          'Authorization': 'Bearer F1h0239h1XTPfrvtCbcG5pFHrskfxoZPhoCqnALdqgV3cCNj5LpRCZodMlI5GonuajWsBxYifq3cMg-l59NBv88xsKP1X49XGgl-L-oj24YTVMsqnS8Scy7jLXg8YnYx'
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}

