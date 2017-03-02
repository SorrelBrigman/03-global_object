#!/usr/bin/env node



//using deconstruciton, take the values of key's in that object and
//assign them to new variables

let {node: myNode, v8: myV8} = process.versions;


//use string templating to create a console log
console.log(`Node.js version: ${myNode}\nV8 version: ${myV8}`);
