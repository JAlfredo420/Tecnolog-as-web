(()=>{
    class Animal {

        constructor(
            public raza:string,
            public patas:number,
            public color:string
        ){
            this.raza=raza;
            this.patas=patas;
            this.color=color;
        }
    }

    const perro:Animal=new Animal(
        'PUGg',
        4,
        'Negro'
    );

    console.log()
})()