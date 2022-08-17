"use strict";
(() => {
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable); //number
    myCustomVariable = {
        name: "Bruce",
        age: 20,
        powers: ['Millonario', 'Batimobil']
    };
    console.log(typeof myCustomVariable); //number
})();
