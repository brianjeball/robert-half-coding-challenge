let fetchQuery = require("./server");

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

        this.initialize();
    }

    initialize() {
        const {input, submitButton} = this.elements
    // add eventListeners
        // handle input state
        // form buttom
        submitButton.addEventListener('click', this.onSubmit)
        // Enter button
        input.addEventListener('keyup', (e) => {
            e.preventDefault();
            // Enter key code = 'Enter'
            if (e.key === 'Enter') {
                this.onSubmit();
            }
        })
    }

    /**
     * onSubmit
     */
    onSubmit() {
        const {input, inputErrorMessage} = this.elements;
        const {errorClass} = this.options;
        // handle input validation
        if (input.value === '' || !input.value) {
            input.classList.add(errorClass);
            inputErrorMessage.hidden = false;
        } else {
            input.classList.contains(errorClass) ? input.classList.remove(errorClass) : null;
            inputErrorMessage.hidden ? false : true;
        }

        const API_KEY = 'F1h0239h1XTPfrvtCbcG5pFHrskfxoZPhoCqnALdqgV3cCNj5LpRCZodMlI5GonuajWsBxYifq3cMg-l59NBv88xsKP1X49XGgl-L-oj24YTVMsqnS8Scy7jLXg8YnYx'
        const id = 'north-india-restaurant-san-francisco';

    // GET call to API
        // add input value
        console.log(input.value);
        const data = fetchQuery();
        console.log(data.businesses[0])
    // return results, if successful
    // if failed, handle error
    // fetch query
        console.log('onSubmit called')
    }

    addResults(results) {
        // results wrapper

    }
}

// query for Search Input, button, results-wrapper

new SearchFrom;