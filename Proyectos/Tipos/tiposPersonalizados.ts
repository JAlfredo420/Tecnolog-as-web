(()=> {

    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let myCustomVariable:(String|number|Hero) = 25;
    myCustomVariable = 'Luis';

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    }
    
   
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);

})()