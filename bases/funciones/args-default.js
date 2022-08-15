"use strict";
(() => {
    const fullName = (firstName, lastname, upper = false) => {
        if (upper) {
            return `${firstName} ${lastname || ''}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastname || ''}`;
        }
    };
    let noName;
    const name = fullName('Tony', "Stark");
    console.log({ name });
})();
