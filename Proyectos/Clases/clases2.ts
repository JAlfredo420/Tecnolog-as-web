(()=>{
//1. atributos
//2. contructor
//3. getters & setter
//4. 
    class Alumno{
        //public nombre:string;
        //public matricula:string;
        //public academia:string;

        constructor(
            public nombre:string,
            public matricula:string,
            public academia:string
        ){
            this.nombre=nombre;
            this.matricula=matricula;
            this.academia=academia;
        }
    }

    const migue:Alumno=new Alumno(
        'Migue',
        '323030045',
        'IRT'
    );
    console.log(migue);
    console.log(migue.nombre);

})()