# MyReads Project

This was built using the starter template for the final assessment project for Udacity's React Fundamentals course.

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## After Installation

- Books may be moved to a different shelf by clicking the green down arrow in the bottom right of the book.
- To search for new books to add to a shelf, click the green + button the apps bottom right.
- Add new books by using the top search bar or go back with the back arrow. Also, [see notes](#Important)

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── components
    │   ├──Author.js # Specialized fragment component for generation of multiple authors.
    │   ├──Book.js # Displays book image, title, authors, and change shelf button.
    │   ├──ListBooks.js # Main page of this SPA. Move books between shelves.
    │   ├──SearchBooks.js # Route to allow for searching and adding of books to shelves.
    │   ├──Shelf.js # Componenet to manage location of books
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Resources

Code in the source component files is inspired from two primary sources;

- Ryan Waites My Reads tutorial [on youtube](https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be)
- Completed contacts app coding from Udacity React Fundamentals lessons 1-5.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository for educational purposes only. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
