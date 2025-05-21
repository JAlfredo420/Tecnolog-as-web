"use strict";
(() => {
    let flash = {
        name: 'Barny',
        age: 25,
        powers: [15, 23],
    };
    let Batman = {
        name: 'Bruce Wayne',
        powers: [3],
        age: 15,
    };
    let SuperMan = {
        name: 'Clark kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
