//  any type mean the variable should be any number, string, boolean, object, array and any other thing
// any means without any restriction

function getTotal(val1: any, val2: number){
    return val1 + val2;
};

const car : {
    name : string;
    brand : string;
    model : "300" | "500" | "700";   // Type literals
    topSpeed: string | number | boolean | {speed: number} //  "|" This sign shows the union you can use mutilple types for declaration 
} = {
    name: "BMW",
    brand: "Bayerische Motoren Werke",
    model: "700",
    topSpeed: {speed: 150}
}


console.log(car);

