"use strict";
(() => {
    //4 formas de crear strings
    //con typescript me habilita los poderes de los tipos de objetos ejemplo string.toUpperCase()
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Hero: Volcan Negrop`;
    const abc = 123;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
