// Node js is javascript run time environrment we can run javascript outiside of browser.
// v8 engine is a part of browser that is used to run javascript in browser.
// v8 engine was modified to run javascript outside of browser and it was converted into node js.
// packages is the code that is written by someone else but you can use it.

var catMe = require("cat-me");
console.log(catMe());
// we use npm i cat-me command to bring cat-me package code from npm to node modules of our folder.
// package.json maintain that which packages are installed in your project.
// Modules are built in functionalities provided by node js. we dont need to intall modules saparately
// like we do with packages.
