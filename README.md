# robert-half-coding-challenge
Yelp API Search App

### Web App that finds and displays the lowest rated parking lots in a given region using the Yelp API

Requirements
- Search field that enables you to enter a location like San Francisco or Atlanta.
    height: 56px; 
    width: 461px;
    border-radius: 4px;
    Search placeholder: Enter location

- When the user presses Enter on the keyboard displays requirement 3 below
- Button that when click displays requirement 3 below.
    Text: Search
    height: 36px; 
    width: 72px;
    border-radius: 4px;
    padding: 10px, 20px, 10px, 20px;

- Show a list of parking lots from Yelp in that location with the address, an image if available, star rating, review count, and link to the Yelp page.

- Display a parking lot score that factors in number of reviews and ratings, using the formula: score = ( number of reviews * rating ) / (number of reviews + 1) to understand a bit about why this is needed, read this -  https://fulmicoton.com/posts/bayesian_rating/

Not Required
- Error handling for form input
- Error handling for form submission
- Testing (TDD)
- Result hover state
- loading state
