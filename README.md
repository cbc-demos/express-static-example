# Express Static Example

This project is made to serve as a demo of the static middleware included in
the ExpressJS package.

Refer to [Serving Static Files in Express](https://expressjs.com/en/starter/static-files.html) for more information.

## Running the App

Requires NodeJS 10+.

First, install dependencies with `npm install`. Then, run `node server.js` to start the app.

## Explanation

Express includes static middleware to make routing for static resources easy to manage. `express.static("public")` sets up routing too all files in the `public` directory. Notice how `public` is not part of the path used when referencing these files in the front end resources. The directory need not be named public. You can use any directory. Multiple directory may be mounted using the middleware.
