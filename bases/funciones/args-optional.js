"use strict";
(() => {
    const fullName = (firstName, lastname) => {
        return `${firstName} ${lastname || ''}`;
    };
    let noName;
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
