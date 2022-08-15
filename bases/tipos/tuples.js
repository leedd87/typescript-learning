"use strict";
(() => {
    //tupla define que SIEMPRE el "primero" es string y el segundo SIEMPRE es number
    const hero = ['Dr Strange', 100, false];
    hero[0] = 'Ironman'; //no funciona si hero[0] = 50;
    hero[1] = 50; //no funciona si hero[1] = "Ironman"
    hero[2] = true;
})();
