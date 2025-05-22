"use strict";
(() => {
    //1. atributos
    class Alumno {
        constructor(nombre, matricula, academia) {
            this.nombre = nombre;
            this.matricula = matricula;
            this.academia = academia;
        }
    }
    const cid = new Alumno('ZID', '323030045', 'IRT');
    console.log(cid);
    console.log(cid.nombre);
})();
