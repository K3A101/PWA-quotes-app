
//Pakt the system file module
var fs = require('fs');

//Importeer de uglifyjs module
var UglifyJS = require('uglify-js');

//get a reference to the minified version of file-1.js, file-2.js and file-3.js
var result = UglifyJS.minify(["/modules/render.js", "/modules/variabele.js"]);

//view the output
console.log(result.code);

fs.writeFile("output.min.js", result.code, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File was successfully saved.");
    }
});

// Bron: https://blog.kevinchisholm.com/javascript/node-js/getting-started-with-the-uglify-js-node-js-module/
// https://www.youtube.com/watch?v=R8WXiIcTAIc