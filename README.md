# Giphy Search and Favorites

This week you will be building a Giphy searching and favoriting application which allows the user to save images and sort them into categories.

In this project you will need to utilize React, Redux, Sagas and integrate them with a 3rd party API....all in a group project!


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


## Create Database and Tables

See the `database.sql` file for database setup and details. It offers some of the SQL to get you started but you'll need to set up your tables and the relationships between them. 


## Development Setup Instructions

* Run `npm install`
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server` to start the server
* Run `npm run client` to start the client
* Navigate to `localhost:3000`


## Base Features

You will need 2 views for Base Mode. You should put some thought into the UI and how to style it.


### Search View

- Allow a user to enter a search string and submit a search request.
- Query the Giphy API `/search` endpoint with the given search string FROM THE SERVER.
- Display the results on the DOM.
- Allow a user to Favorite any of the result images. You'll need to think about what information to save to your own database. Generally you only store the minimum needed to show this image again on the Favorites view.


### Favorites View

- Allow a user to see all of the Giphy images they have Favorited. The actual images need to appear on the DOM.
- Allow a user to set a category for a favorite image.
    - Each favorite image can only have 1 category at a time.
    - The category needs to be one of the categories in the database.


## Existing Routes

You are given two router modules on the server with stubs for the routes you may need.

`GET /category` returns a list of all categories from the table ordered by name. You may test it if your server is running: [http://localhost:5000/api/category](http://localhost:5000/api/category)


## Stretch Features

1. Allow favorites to be removed/unfavorited
2. Implement the pagination feature of the Giphy search results
3. Add another view that allows a user to add or edit categories

