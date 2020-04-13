# articles management app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

[![RealWorld Frontend](https://img.shields.io/badge/realworld-frontend-%23783578.svg)](https://github.com/PuneethReddyHC/articles-management-app/)
[![RealWorld Backend](https://img.shields.io/badge/realworld-backend-%23783578.svg)](https://github.com/PuneethReddyHC/articles-management-app/)
[![Build Status](https://travis-ci.org/gothinkster/angular-realworld-example-app.svg?branch=master)

# ![Angular and Node Example App](logo.png)

> ### Angular codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld]() spec and API.

> ### Example Node (Express + Mongoose) codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/PuneethReddyHC/articles-management-app/) API spec.



This repo is functionality complete — PRs and issues welcome!
Additionally, there is an Angular 1.5 version of this codebase that you can [fork](https://github.com/PuneethReddyHC/articles-management-app/) and/or learn how to recreate.


# How it works

We're currently working on some docs for the codebase (explaining where functionality is located, how it works, etc) but the codebase should be straightforward to follow as is. We've also released a [step-by-step tutorial w/ screencasts](https://github.com/PuneethReddyHC/articles-management-app/) that teaches you how to recreate the codebase from scratch.

### Making requests to the backend API

If you want to change the API URL to a local server, simply edit `src/environments/environment.ts` and change `api_url` to the local server's URL (i.e. `localhost:3000/api`)


# Getting started

- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
- Make sure you have the [Angular CLI](https://github.com/angular/angular-cli#installation) installed globally. We use [Yarn](https://yarnpkg.com) to manage the dependencies, so we strongly recommend you to use it. you can install it from [Here](https://yarnpkg.com/en/docs/install).

## Steps to install App

- If angular cli, Nodejs and mongodb is working correct then move to second step are else follow the Getting started procedure
- Clone the repository using command git clone https://github.com/PuneethReddyHC/articles-management-app.git 
 or download.
- run cd articles-management-app
- run npm install


![Image of adduser](https://github.com/PuneethReddyHC/articles-management-app/blob/master/screens/command.JPG)


- run npm start 

## If you like my project 
Bye me Cup of coffee

### Google pay or phonepay number 9535688928


![Image of adduser](https://github.com/PuneethReddyHC/articles-management-app/blob/master/screens/npmstart.JPG)


- Wait untill it completes compiling 100% and get the line completed successfully 


![Image of adduser](https://github.com/PuneethReddyHC/articles-management-app/blob/master/screens/npmfinish.JPG)


- once completed open any browser type url http://localhost:4200

### for more screenshots move to end 

### Building the project
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## FrontEnd Functionality overview

**General functionality:**

- Authenticate users via JWT (login/signup pages + logout button on settings page)
- CRU* users (sign up & settings page - no deleting required)
- CRUD Articles
- CR*D Comments on articles (no updating required)
- GET and display paginated lists of articles
- Favorite articles
- Follow other users

**The general page breakdown looks like this:**

- Home page (URL: /#/ )
    - List of tags
    - List of articles pulled from either Feed, Global, or by Tag
    - Pagination for list of articles
- Sign in/Sign up pages (URL: /#/login, /#/register )
    - Uses JWT (store the token in localStorage)
    - Authentication can be easily switched to session/cookie based
- Settings page (URL: /#/settings )
- Editor page to create/edit articles (URL: /#/editor, /#/editor/article-slug-here )
- Article page (URL: /#/article/article-slug-here )
    - Delete article button (only shown to article's author)
    - Render markdown from server client side
    - Comments section at bottom of page
    - Delete comment button (only shown to comment's author)
- Profile page (URL: /#/profile/:username, /#/profile/:username/favorites )
    - Show basic user info
    - List of articles populated from author's created articles or author's favorited articles

# Backend code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [express-jwt](https://github.com/auth0/express-jwt) - Middleware for validating JWTs for authentication
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript 
- [mongoose-unique-validator](https://github.com/blakehaswell/mongoose-unique-validator) - For handling unique validation errors in Mongoose. Mongoose only handles validation at the document level, so a unique index across a collection will throw an exception at the driver level. The `mongoose-unique-validator` plugin helps us by formatting the error like a normal mongoose `ValidationError`.
- [passport](https://github.com/jaredhanson/passport) - For handling user authentication
- [slug](https://github.com/dodo/node-slug) - For encoding titles into a URL-friendly format

## Application Structure

- `server.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `server/config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- `server/routes/` - This folder contains the route definitions for our API.
- `server/models/` - This folder contains the schema definitions for our Mongoose models.

## Error Handling

In `server/routes/api/index.js`, we define a error-handling middleware for handling Mongoose's `ValidationError`. This middleware will respond with a 422 status code and format the response to have [error messages the clients can understand]()

## Authentication

Requests are authenticated using the `Authorization` header with a valid JWT. We define two express middlewares in `routes/auth.js` that can be used to authenticate requests. The `required` middleware configures the `express-jwt` middleware using our application's secret and will return a 401 status code if the request cannot be authenticated. The payload of the JWT can then be accessed from `req.payload` in the endpoint. The `optional` middleware configures the `express-jwt` in the same way as `required`, but will *not* return a 401 status code if the request cannot be authenticated.

# screens

![Image of adduser](https://github.com/PuneethReddyHC/articles-management-app/blob/master/screens/homepage.png)

![Image of adduser](https://github.com/PuneethReddyHC/articles-management-app/blob/master/screens/details.png)

![Image of adduser](https://github.com/PuneethReddyHC/articles-management-app/blob/master/screens/editprofile.png)

![Image of adduser](https://github.com/PuneethReddyHC/articles-management-app/blob/master/screens/addarticle.png)

![Image of adduser](https://github.com/PuneethReddyHC/articles-management-app/blob/master/screens/myprofile.png)

![Image of adduser](https://github.com/PuneethReddyHC/articles-management-app/blob/master/screens/otherprofile.png)

![Image of adduser](https://github.com/PuneethReddyHC/articles-management-app/blob/master/screens/topheader.png)

![Image of adduser](https://github.com/PuneethReddyHC/articles-management-app/blob/master/screens/Screenshot%20(64).png)

![Image of adduser](https://github.com/PuneethReddyHC/articles-management-app/blob/master/screens/Screenshot%20(62).png)

![Image of adduser](https://github.com/PuneethReddyHC/articles-management-app/blob/master/screens/Screenshot%20(63).png)


