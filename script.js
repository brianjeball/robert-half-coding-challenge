const dummyFormResults = {
    "businesses": [{
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
    },],
    "total": 766,
    "region": {
        "center": {
            "longitude": -122.399972,
            "latitude": 37.786882
        }
    }
}

// SearchForm
class SearchFrom {
    constructor() {
        this.elements = {
            input: document.querySelector("[data-behavior='search-input']"),
            inputErrorMessage: document.querySelector("[data-behavior='error-message']"),
            submitButton: document.querySelector("[data-behavior='search-button']")
        }

        this.options = {
            errorClass: 'error'
        }

        this.initialize().bind(this);
    }

    initialize() {
        const { input, submitButton } = this.elements

        // add eventListeners
        submitButton.addEventListener('click', () => {this.onSubmit()})
        input.addEventListener('keyup', (e) => {
            e.preventDefault();
            // Enter key code = 'Enter'
            if (e.key === 'Enter') {
                this.onSubmit().bind(this);
            }
        })
    }

    /**
     * Submit Search query
     */
    onSubmit() {
        const input = document.querySelector("[data-behavior='search-input']");
        const inputErrorMessage = document.querySelector("[data-behavior='error-message']");
        const errorClass = 'error';

        // handle input validation
        if (input.value === '' || !input.value) {
            input.classList.add(errorClass);
            inputErrorMessage.hidden = false;
            return
        } else {
            input.classList.contains(errorClass) ? input.classList.remove(errorClass) : null;
            inputErrorMessage.hidden ? inputErrorMessage.hidden = false : inputErrorMessage.hidden = true;
        }

        // return results, if successful
        // if failed, handle error
        // fetch query
        this.addResults(dummyFormResults.businesses);
    }

    /**
     * Return the parking lot's score
     * formula: score = ( number of reviews * rating ) / (number of reviews + 1)
     *
     * @param {Object} result
     * @returns {Int} score
     */
    lotScore(result) {
        const {rating, review_count} = result;
        let score = (review_count * rating) / (review_count + 1);

        // reduce score to 2 decimal places
        return score.toFixed(2);
    }

    /**
     * Add results to list as li elements
     * 
     * @param {Object} data 
     */
    addResults(data) {
        const resultsWrapper = document.querySelector("[data-behavior='resultsList']");
        // results wrapper
        const results = data;

        results.map((result) => {
            // Create li element
            const li = document.createElement('li');
            // add review class
            li.classList.add('review');

            // interpolate result values into li element
            const resultEl = `
                <div class="thumbnail-wrapper">
                    <img class="thumbnail" src="${result.image_url}" alt="${result.alias}"/>
                </div>
                <div class="review-info">
                    <h3 class="review-name">${result.name} <span class="star-rating">${result.rating}</span> </h3>
                    <p class="review-count">${result.review_count} Reviews</p>
                    <p class="address"><b>Address: </b><span data-behavior="review-address">${result.location.display_address[0] + ' ' + result.location.display_address[1]}</span></p>
                    
                    <p class="lot-score">Lot Score: <span data-behavior="review:lot_score">${this.lotScore(result)}</span></p>
                    <a href="${result.url}" target="_blank" class="link">View Parking Lot</a>
                </div>
            `
            li.innerHTML = resultEl;
            resultsWrapper.append(li);
        })
    }
}

// query for Search Input, button, results-wrapper

new SearchFrom();