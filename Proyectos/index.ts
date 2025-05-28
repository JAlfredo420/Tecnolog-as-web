import { cuidar, display, funcionGenerica, funcionGenericaFlecha, funcionGenericaFlecha2, imprimirObjeto } from "./genericos/genericos";
/*
imprimirObjeto(123);
imprimirObjeto("Hola Mundo");
imprimirObjeto(new Date());
imprimirObjeto({a:1,b:2,c:3});
imprimirObjeto([1,2,3,4]);
/*/

console.log(funcionGenerica(3.1416));
console.log(funcionGenericaFlecha(3.14).toFixed(2));
console.log(funcionGenericaFlecha2("Hola Mundo").charAt(0));
console.log(funcionGenerica("Hola mundo"));
 console.log(funcionGenerica({a:1,b:2,c:3}));
//1
 console.log(cuidar("Abuela"));
//2
 console.log(display("UPJR"));