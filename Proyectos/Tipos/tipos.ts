(()=>{

    type Hero = {
        name:String;
        age?:number;
        powers:number[];
        getName?: ()=> String;
    }

    let flash: Hero={
        name: 'Barny',
        age: 25,
        powers: [15,23],
    }

    let Batman: Hero={
        name:'Bruce Wayne',
        powers:[3],
        age:15,
    }

    let SuperMan: Hero={
        name:'Clark kent',
        age:60,
        powers:[1],
        getName(){
            return this.name
        }
    }

})()