interface EV {
    type: "EV"
    kmpu: number,
}

interface NonEV {
    type: "NonEV"
    kmpl: number
}

type CarType = EV | NonEV   // Generic Type

function getMileage(car : CarType){
    switch(car.type){
        case "EV": 
        console.log(car.kmpu);
        break;

        case "NonEV": 
        console.log(car.kmpl);
        break;
    }
}

getMileage({type:"EV", kmpu: 10})  // Discriminated Type


// TYPE - CASTING 

// We have 2 ways to declare the TypeCasting  

// 1. const nameINput = <HTMLInputElement>document.getElementById("name")!;  // exclamamtion sign tells the typescript that you will get the input property ; otherwise if you get the element through the class or id then it didn't get the specfic element

// 2.
const nameINput = document.getElementById("name")! as HTMLInputElement;

nameINput.value = "Hasan";