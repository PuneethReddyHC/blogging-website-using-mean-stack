# Myapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

[![RealWorld Frontend](https://img.shields.io/badge/realworld-frontend-%23783578.svg)](http://realworld.io)
[![RealWorld Backend](https://img.shields.io/badge/realworld-backend-%23783578.svg)](http://realworld.io)
[![Build Status](https://travis-ci.org/gothinkster/angular-realworld-example-app.svg?branch=master)](https://travis-ci.org/gothinkster/angular-realworld-example-app)

# ![Angular and Node Example App](logo.png)

> ### Angular codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld-example-apps) spec and API.

> ### Example Node (Express + Mongoose) codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld-example-apps) API spec.



This repo is functionality complete — PRs and issues welcome!
Additionally, there is an Angular 1.5 version of this codebase that you can [fork](https://github.com/PuneethReddyHC/articles-management-app/) and/or [learn how to recreate](https://thinkster.io/angularjs-es6-tutorial).


# How it works

We're currently working on some docs for the codebase (explaining where functionality is located, how it works, etc) but the codebase should be straightforward to follow as is. We've also released a [step-by-step tutorial w/ screencasts](https://thinkster.io/tutorials/building-real-world-angular-2-apps) that teaches you how to recreate the codebase from scratch.

### Making requests to the backend API

If you want to change the API URL to a local server, simply edit `src/environments/environment.ts` and change `api_url` to the local server's URL (i.e. `localhost:3000/api`)


# Getting started

Make sure you have the [Angular CLI](https://github.com/angular/angular-cli#installation) installed globally. We use [Yarn](https://yarnpkg.com) to manage the dependencies, so we strongly recommend you to use it. you can install it from [Here](https://yarnpkg.com/en/docs/install), then run `yarn install` to resolve all dependencies (might take a minute).


### Building the project
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Functionality overview

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




