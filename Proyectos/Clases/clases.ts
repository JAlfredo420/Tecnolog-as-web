(()=>{
//1. atributos
    class Alumno{
        public nombre:string;
        public matricula:string;
        public academia:string;

        constructor(
            nombre:string,
            matricula:string,
            academia:string
        ){
            this.nombre=nombre;
            this.matricula=matricula;
            this.academia=academia;
        }
    }

    const cid:Alumno=new Alumno(
        'ZID',
        '323030045',
        'IRT'
    );
    console.log(cid);
    console.log(cid.nombre);

})()