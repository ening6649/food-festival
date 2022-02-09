js minifier
https://www.toptal.com/developers/javascript-minifier/

a PNG format, which is lossless, to JPG, which is lossy.
https://imagecompressor.com/

// lazy loading  -adding the defer attribute to the <script>
<script src='assets/js/vendor/jQuery.js' defer ></script>
<script src='assets/js/vendor/bootstrap.js' defer ></script>
<script src='./dist/script.min.js' defer ></script>

// npm install -D webpack webpack-cli
// npm install -D webpack@4.46.0 webpack-cli@4.6.0
// npm run webpack -v

"scripts": {
    // --watch will auto watch for saved changes to files
    // .. and re bundle 
    "webpack": "webpack --watch",
    "build": "webpack"
},

// npm run build to run the webpack

// Entry point splitting separates code by entry points in your app. 
// ..An entry point is defined by each page's requisite script files to load.

// Vendor splitting separates vendor code (e.g., jQuery, Bootstrap, lodash, etc.) 
// ..away from your app's code. A vendor bundle can also be shared between other bundles, 
// ..further reducing overall bundle size by creating a common chunk.

// Dynamic splitting separates code and allows dynamic importing of modules. 
// ..This type of splitting is often best for single-page applications that use front-end routing.

//    to run webpack-dev-server
// add a new entry to the scripts property in the package.json
"start:dev": "webpack-dev-server",
// npm run start:dev  to start the development server 
// localhost:8080 to run service worker

// The first three properties that a manifest.json should have are the name, short_name, and description
{
    "name": "Food Event",
    "short_name": "Foodies",
    "description": "An app that allows you to view upcoming food events."
  }