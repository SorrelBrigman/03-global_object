#!/usr/bin/env node


//assign the global object process's property versions to a variable
let myVersions = process.versions;
//using deconstruciton, take the values of key's in that object and
//assign them to new variables
var {node: myNode, v8: myV8} = myVersions;

//use string templating to create a console log
console.log(`Node.js version: ${myNode}\nV8 version: ${myV8}`);
