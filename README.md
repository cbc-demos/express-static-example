# Express Static Example

This project is made to serve as a demo of the static middleware included in
the ExpressJS package.

Refer to [Serving Static Files in Express](https://expressjs.com/en/starter/static-files.html) for more information.

## Explanation

In order to make managing routing for static assets (css, front-end js, html, images, etc.) Express includes static middleware to performing routing to the file in the configured directory. `express.static("public")` sets up routing too all files in the `public` directory. Notice how `public` is not part of the path used when referencing these files in the front end resources.
