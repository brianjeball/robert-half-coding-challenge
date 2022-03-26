# robert-half-coding-challenge
Yelp API Search App

### Web App that finds and displays the lowest rated parking lots in a given region using the Yelp API

Requirements
- [x] Search field that enables you to enter a location like San Francisco or Atlanta.
    - height: 56px; 
    - width: 461px;
    - border-radius: 4px;
    - Search placeholder: Enter location

- [ ] When the user presses Enter on the keyboard displays requirement 3 below
- [ ] Button that when click displays requirement 3 below. 
    - Text: Search
    - height: 36px; 
    - width: 72px;
    - border-radius: 4px;
    - padding: 10px, 20px, 10px, 20px;

- [ ] Show a list of parking lots from Yelp in that location with the address, an image if available, star rating, review count, and link to the Yelp page.

- [ ] Display a parking lot score that factors in number of reviews and ratings, using the formula: score = ( number of reviews * rating ) / (number of reviews + 1) to understand a bit about why this is needed, read this -  https://fulmicoton.com/posts/bayesian_rating/

HELP: You can get started with the yelp api here - https://www.yelp.com/developers/documentation/v3/get_started

Rules:

No use of frontend frameworks or libraries such has Angular, React, Vue, JQuery, etc. However other utility JavaScript packages such as axios can be used
Upload code to a github repo and reply to this email with the link upon completion 
Include a README with instructions to run the solution in the repo

Not Required
- [ ] Yelp API Authentication
    - https://www.yelp.com/developers/documentation/v3/authentication
- [ ] Error handling for form input
- [ ] Error handling for form submission
- [ ] Testing (TDD)
- [ ] Result hover state
- [ ] loading state
- [ ] results pagination, limit to 10 results
- [ ] no results state
- [ ] add filter for results