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