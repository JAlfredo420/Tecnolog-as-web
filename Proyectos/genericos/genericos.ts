export const imprimirObjeto = (argumento:any)=>{
    console.log(argumento);
}

export function funcionGenerica<T>(argumento:T):T{
    return argumento;
}

export const funcionGenericaFlecha=<T>(argumento:T)=>{
    return argumento;
}

export const funcionGenericaFlecha2= <T>(argumento:T)=>
    argumento;
//1
export function cuidar<T>(algo: T): T {
  return algo;
}
//2
export function display<T>(valor: T): T {
  return valor;
}
