"use strict";
(() => {
    const addTwoNumbers = (params) => {
        return params.first + params.second;
    };
    console.log('Resultado1=', addTwoNumbers({
        first: 2,
        second: 4,
    }));
    console.log('Resultado2=', addTwoNumbers({
        first: 10,
        second: 20,
    }));
})();
