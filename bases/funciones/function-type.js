"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    //let myFunction: (x: number, b: number) => number;
    //let myFunction: (name: string) => string;
    let myFunction;
    //myFunction = 10;
    //  myFunction = addNumbers
    // console.log(myFunction(10, 8))
    //myFunction = greet
    //console.log(myFunction('David'))
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
