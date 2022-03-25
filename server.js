let cors = require('cors');
let express = require('express');
let fs = require('fs');


const app = express();
app.use(cors());

// enable preflight req across-the-board
app.options('*', cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.use((req, res, next) => {
  fs.readFile( "/index.html", (err, contents) => {
    // set Content-Type header
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.write(contents)
    res.end()
    })
})

// set port
app.set('port', process.env.PORT || 3000);

// start listening on port
app.listen(app.get('port'), () => {
  console.log('App listening on localhost 3000')
})


const results = {
  "businesses": [
      {
          "id": "FmGF1B-Rpsjq1f5b56qMwg",
          "alias": "molinari-delicatessen-san-francisco",
          "name": "Molinari Delicatessen",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/4gRY9rVs8JyHvngljSzXyA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/molinari-delicatessen-san-francisco?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 1210,
          "categories": [
              {
                  "alias": "delis",
                  "title": "Delis"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.79838,
              "longitude": -122.40782
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "373 Columbus Ave",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94133",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "373 Columbus Ave",
                  "San Francisco, CA 94133"
              ]
          },
          "phone": "+14154212337",
          "display_phone": "(415) 421-2337",
          "distance": 1465.2460213942109
      },
      {
          "id": "BcW0vRdM8N-rteR2FfV1jg",
          "alias": "deli-board-san-francisco",
          "name": "Deli Board",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/ZBA5_5xjgfmJMdxcPBkHOw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/deli-board-san-francisco?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 1506,
          "categories": [
              {
                  "alias": "delis",
                  "title": "Delis"
              },
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.7776247966103,
              "longitude": -122.407012712007
          },
          "transactions": [
              "delivery"
          ],
          "price": "$$",
          "location": {
              "address1": "1058 Folsom St",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94103",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "1058 Folsom St",
                  "San Francisco, CA 94103"
              ]
          },
          "phone": "+14155527687",
          "display_phone": "(415) 552-7687",
          "distance": 1201.0092939107112
      },
      {
          "id": "zYUgm_qOcly8mhLdTSFnKw",
          "alias": "palermo-ii-delicatessen-san-francisco",
          "name": "Palermo II Delicatessen",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Ytqyd4Pd8v84H86RaH2FVQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/palermo-ii-delicatessen-san-francisco?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 93,
          "categories": [
              {
                  "alias": "delis",
                  "title": "Delis"
              },
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              },
              {
                  "alias": "italian",
                  "title": "Italian"
              }
          ],
          "rating": 5.0,
          "coordinates": {
              "latitude": 37.79894,
              "longitude": -122.4086
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "658 Vallejo St",
              "address2": null,
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94133",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "658 Vallejo St",
                  "San Francisco, CA 94133"
              ]
          },
          "phone": "+14159370161",
          "display_phone": "(415) 937-0161",
          "distance": 1517.0065811617371
      },
      {
          "id": "2hGIxgprREdBieylltWaRQ",
          "alias": "limoncello-san-francisco",
          "name": "Limoncello",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/RJMZfygsa2NiYFM2wPzT-w/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/limoncello-san-francisco?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 1327,
          "categories": [
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              },
              {
                  "alias": "delis",
                  "title": "Delis"
              },
              {
                  "alias": "beer_and_wine",
                  "title": "Beer, Wine & Spirits"
              }
          ],
          "rating": 5.0,
          "coordinates": {
              "latitude": 37.7873184067081,
              "longitude": -122.423591369312
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "1400 Sutter St",
              "address2": "",
              "address3": null,
              "city": "San Francisco",
              "zip_code": "94109",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "1400 Sutter St",
                  "San Francisco, CA 94109"
              ]
          },
          "phone": "+14156386361",
          "display_phone": "(415) 638-6361",
          "distance": 2076.1540447650927
      },
      {
          "id": "eZ2_6Wx-Lqp_mLtG6-zzTg",
          "alias": "sammys-on-2nd-san-francisco",
          "name": "Sammy's on 2nd",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/i1i_Yc5TGyqUvzAAC0t-WQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/sammys-on-2nd-san-francisco?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 214,
          "categories": [
              {
                  "alias": "beer_and_wine",
                  "title": "Beer, Wine & Spirits"
              },
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              }
          ],
          "rating": 4.0,
          "coordinates": {
              "latitude": 37.7881,
              "longitude": -122.40028
          },
          "transactions": [
              "delivery"
          ],
          "price": "$",
          "location": {
              "address1": "84 2nd St",
              "address2": null,
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94105",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "84 2nd St",
                  "San Francisco, CA 94105"
              ]
          },
          "phone": "+14152430311",
          "display_phone": "(415) 243-0311",
          "distance": 146.3807329561209
      },
      {
          "id": "uFeOc6t94xLp-JPP6fhnaA",
          "alias": "wise-sons-jewish-delicatessen-san-francisco-20",
          "name": "Wise Sons Jewish Deli",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/O6Apf39llWL3sfye-PseNQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/wise-sons-jewish-delicatessen-san-francisco-20?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 316,
          "categories": [
              {
                  "alias": "delis",
                  "title": "Delis"
              },
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              },
              {
                  "alias": "bagels",
                  "title": "Bagels"
              }
          ],
          "rating": 3.5,
          "coordinates": {
              "latitude": 37.7861320529474,
              "longitude": -122.40342621841
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "736 Mission St",
              "address2": "",
              "address3": "The Contemporary Jewish Museum",
              "city": "San Francisco",
              "zip_code": "94103",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "736 Mission St",
                  "The Contemporary Jewish Museum",
                  "San Francisco, CA 94103"
              ]
          },
          "phone": "+14156557887",
          "display_phone": "(415) 655-7887",
          "distance": 314.79308965734816
      },
      {
          "id": "0mZeR3TwxmZGLCxzcf620A",
          "alias": "5th-avenue-deli-and-market-san-francisco",
          "name": "5th Avenue Deli & Market",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/dD3LeuzL_TQSUdcHKIBPHw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/5th-avenue-deli-and-market-san-francisco?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 64,
          "categories": [
              {
                  "alias": "delis",
                  "title": "Delis"
              },
              {
                  "alias": "grocery",
                  "title": "Grocery"
              },
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.7951292693615,
              "longitude": -122.396138906479
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$",
          "location": {
              "address1": "4 Embarcadero Ctr",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94111",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "4 Embarcadero Ctr",
                  "San Francisco, CA 94111"
              ]
          },
          "phone": "+14157570950",
          "display_phone": "(415) 757-0950",
          "distance": 986.324531541846
      },
      {
          "id": "Xnm-vHeO_T3C7rfVyRMXig",
          "alias": "the-sandwich-boss-san-francisco",
          "name": "The Sandwich Boss",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/eleK3wO7GBLw2NZsp-crEw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/the-sandwich-boss-san-francisco?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 187,
          "categories": [
              {
                  "alias": "delis",
                  "title": "Delis"
              },
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              },
              {
                  "alias": "salad",
                  "title": "Salad"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.784358,
              "longitude": -122.395457
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$",
          "location": {
              "address1": "600 Harrison St",
              "address2": "",
              "address3": "Eden Plaza Cafe",
              "city": "San Francisco",
              "zip_code": "94107",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "600 Harrison St",
                  "Eden Plaza Cafe",
                  "San Francisco, CA 94107"
              ]
          },
          "phone": "+14157774709",
          "display_phone": "(415) 777-4709",
          "distance": 485.9981708973906
      },
      {
          "id": "dv9gdJrBG7SZ8aWYkxG_3w",
          "alias": "sutter-st-cafe-san-francisco",
          "name": "Sutter St. Cafe",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/vvGpL9cEIMi8PXHldqb3FA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/sutter-st-cafe-san-francisco?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 220,
          "categories": [
              {
                  "alias": "cafes",
                  "title": "Cafes"
              },
              {
                  "alias": "delis",
                  "title": "Delis"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.7894760577176,
              "longitude": -122.407699611023
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$",
          "location": {
              "address1": "450 Sutter St",
              "address2": null,
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94108",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "450 Sutter St",
                  "San Francisco, CA 94108"
              ]
          },
          "phone": "+14153628342",
          "display_phone": "(415) 362-8342",
          "distance": 737.7876443304846
      },
      {
          "id": "v5-upYI3belSfXOeT1dNWw",
          "alias": "alimento-san-francisco-3",
          "name": "Alimento",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/zV9mX8b2wzw52A8CCD1maw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/alimento-san-francisco-3?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 766,
          "categories": [
              {
                  "alias": "italian",
                  "title": "Italian"
              },
              {
                  "alias": "gelato",
                  "title": "Gelato"
              },
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.799643,
              "longitude": -122.409622
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$",
          "location": {
              "address1": "507 Columbus Ave",
              "address2": null,
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94133",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "507 Columbus Ave",
                  "San Francisco, CA 94133"
              ]
          },
          "phone": "+14152969463",
          "display_phone": "(415) 296-9463",
          "distance": 1653.0082294352371
      },
      {
          "id": "ZXwnSN4GlEuSTNCRrjjRMg",
          "alias": "bite-san-francisco",
          "name": "Bite",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/FUvJSEjwQz7L25-6y9Yv4Q/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/bite-san-francisco?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 832,
          "categories": [
              {
                  "alias": "delis",
                  "title": "Delis"
              },
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              },
              {
                  "alias": "salad",
                  "title": "Salad"
              }
          ],
          "rating": 4.0,
          "coordinates": {
              "latitude": 37.7884239641,
              "longitude": -122.415666133
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "912 Sutter St",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94104",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "912 Sutter St",
                  "San Francisco, CA 94104"
              ]
          },
          "phone": "+14155632483",
          "display_phone": "(415) 563-2483",
          "distance": 1389.7519934105944
      },
      {
          "id": "2b4YW6ZKXq45TfZA53_zXg",
          "alias": "teds-market-and-deli-san-francisco-5",
          "name": "Ted's Market & Deli",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/JrEqjWW0XDQvGRCUDO7PmQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/teds-market-and-deli-san-francisco-5?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 511,
          "categories": [
              {
                  "alias": "delis",
                  "title": "Delis"
              },
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              },
              {
                  "alias": "salad",
                  "title": "Salad"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.77287,
              "longitude": -122.41623
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$",
          "location": {
              "address1": "1530 Howard St",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94103",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "1530 Howard St",
                  "San Francisco, CA 94103"
              ]
          },
          "phone": "+14155520309",
          "display_phone": "(415) 552-0309",
          "distance": 2115.7889554077174
      },
      {
          "id": "gtBDOQq3TyiiulKmJpny0g",
          "alias": "lous-cafe-san-francisco-5",
          "name": "Lou's Cafe",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/SnjVCB4U3dr83c381ZNyQA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/lous-cafe-san-francisco-5?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 161,
          "categories": [
              {
                  "alias": "salad",
                  "title": "Salad"
              },
              {
                  "alias": "soup",
                  "title": "Soup"
              },
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.79282922333021,
              "longitude": -122.3989569415474
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$",
          "location": {
              "address1": "100 Pine St",
              "address2": "Ste 102",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94111",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "100 Pine St",
                  "Ste 102",
                  "San Francisco, CA 94111"
              ]
          },
          "phone": "+14152834777",
          "display_phone": "(415) 283-4777",
          "distance": 667.2886389665307
      },
      {
          "id": "kEhq0qT_JFxgeh-pCS4lPA",
          "alias": "the-sentinel-san-francisco",
          "name": "The Sentinel",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/VctZOoSLiQ1P-g_cHa49QQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/the-sentinel-san-francisco?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 1283,
          "categories": [
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              }
          ],
          "rating": 4.0,
          "coordinates": {
              "latitude": 37.7882977785009,
              "longitude": -122.401372356986
          },
          "transactions": [
              "pickup"
          ],
          "price": "$",
          "location": {
              "address1": "37 New Montgomery St",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94105",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "37 New Montgomery St",
                  "San Francisco, CA 94105"
              ]
          },
          "phone": "+14157698109",
          "display_phone": "(415) 769-8109",
          "distance": 199.81617618665948
      },
      {
          "id": "yGEc-cj9Quk5mUh7maoPXA",
          "alias": "freddies-sandwiches-san-francisco",
          "name": "Freddie's Sandwiches",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/VQmHeYHeZHd5LNL5Fjb3-g/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/freddies-sandwiches-san-francisco?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 531,
          "categories": [
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.8052368164062,
              "longitude": -122.410316467285
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$",
          "location": {
              "address1": "300 Francisco St",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94133",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "300 Francisco St",
                  "San Francisco, CA 94133"
              ]
          },
          "phone": "+14154332882",
          "display_phone": "(415) 433-2882",
          "distance": 2235.7728814699617
      },
      {
          "id": "UusODx67j3KEZBTMqRTC4A",
          "alias": "le-beau-market-san-francisco",
          "name": "Le Beau Market",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/OWmmBHxdEwqAK5Dm7UZJoA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/le-beau-market-san-francisco?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 336,
          "categories": [
              {
                  "alias": "grocery",
                  "title": "Grocery"
              },
              {
                  "alias": "organic_stores",
                  "title": "Organic Stores"
              },
              {
                  "alias": "delis",
                  "title": "Delis"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.7928314208984,
              "longitude": -122.416275024414
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "1263 Leavenworth St",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94109",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "1263 Leavenworth St",
                  "San Francisco, CA 94109"
              ]
          },
          "phone": "+14158853030",
          "display_phone": "(415) 885-3030",
          "distance": 1585.141647408167
      },
      {
          "id": "Vo3xf9NJrNktC-EV382YbA",
          "alias": "lous-lounge-san-francisco",
          "name": "Lou's Lounge",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/_9wE5Kzf_au1qeXSzrz3bQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/lous-lounge-san-francisco?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 22,
          "categories": [
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              },
              {
                  "alias": "salad",
                  "title": "Salad"
              },
              {
                  "alias": "beer_and_wine",
                  "title": "Beer, Wine & Spirits"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.793899,
              "longitude": -122.40036
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "location": {
              "address1": "275 Battery St",
              "address2": null,
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94111",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "275 Battery St",
                  "San Francisco, CA 94111"
              ]
          },
          "phone": "+14156587259",
          "display_phone": "(415) 658-7259",
          "distance": 780.3165553018314
      },
      {
          "id": "n0KBa5ce7wH0sGE-Qe3gmg",
          "alias": "davids-delicatessen-san-francisco",
          "name": "David's Delicatessen",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/sK5MjU3-QXCdm2QlOgqPkA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/davids-delicatessen-san-francisco?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 505,
          "categories": [
              {
                  "alias": "delis",
                  "title": "Delis"
              }
          ],
          "rating": 2.0,
          "coordinates": {
              "latitude": 37.7871374,
              "longitude": -122.4110411
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "474 Geary St",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94102",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "474 Geary St",
                  "San Francisco, CA 94102"
              ]
          },
          "phone": "+14152765950",
          "display_phone": "(415) 276-5950",
          "distance": 979.1010129995866
      },
      {
          "id": "B61vZd9neTI8F7zZ-vApmw",
          "alias": "the-boys-deli-san-francisco",
          "name": "The Boys’ Deli",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/tZpUErR_DtxQP3LYv75S8A/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/the-boys-deli-san-francisco?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 355,
          "categories": [
              {
                  "alias": "delis",
                  "title": "Delis"
              },
              {
                  "alias": "sandwiches",
                  "title": "Sandwiches"
              },
              {
                  "alias": "breakfast_brunch",
                  "title": "Breakfast & Brunch"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.7971806,
              "longitude": -122.421842
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "2222 Polk St",
              "address2": "",
              "address3": "Polk & Green Produce Market",
              "city": "San Francisco",
              "zip_code": "94109",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "2222 Polk St",
                  "Polk & Green Produce Market",
                  "San Francisco, CA 94109"
              ]
          },
          "phone": "+14157763099",
          "display_phone": "(415) 776-3099",
          "distance": 2235.2674125931903
      },
      {
          "id": "vavslHAhF1QCjHwMOWmYrw",
          "alias": "mark-n-mike-s-san-francisco-2",
          "name": "MARK ‘N MIKE’S",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/vAEPXSjpRCrD7SDrKg3UzA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/mark-n-mike-s-san-francisco-2?adjust_creative=Qc-WE8i3Ahczno58OKw-Nw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Qc-WE8i3Ahczno58OKw-Nw",
          "review_count": 25,
          "categories": [
              {
                  "alias": "delis",
                  "title": "Delis"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.79337,
              "longitude": -122.39423
          },
          "transactions": [],
          "location": {
              "address1": "1 Market St",
              "address2": "Inside One Market Restaurant",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94105",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "1 Market St",
                  "Inside One Market Restaurant",
                  "San Francisco, CA 94105"
              ]
          },
          "phone": "+14157775577",
          "display_phone": "(415) 777-5577",
          "distance": 843.3247059138956
      }
  ],
  "total": 766,
  "region": {
      "center": {
          "longitude": -122.399972,
          "latitude": 37.786882
      }
  }
}

module.exports = function fetchQuery() {
    // var config = {
    //     method: 'get',
    //     url: 'https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco',
    //     headers: { 
    //       'Authorization': 'Bearer F1h0239h1XTPfrvtCbcG5pFHrskfxoZPhoCqnALdqgV3cCNj5LpRCZodMlI5GonuajWsBxYifq3cMg-l59NBv88xsKP1X49XGgl-L-oj24YTVMsqnS8Scy7jLXg8YnYx'
    //     }
    //   };
      
    //   axios(config)
    //   .then(function (response) {
    //     let businessess = results;
    //     console.log(JSON.stringify(response.data));
    //     return businessess;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    return results;
}



