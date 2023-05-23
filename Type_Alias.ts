// Type Alias and Type Object

// Below is our Custom Type
type TopSpeed = string | number | boolean | {speed: number} //  "|" This sign shows the union you can use mutilple types for declaration
type Car = {
    name : string;
    brand : string;
    model : "300" | "500" | "700";   // Type literals
    topSpeed: TopSpeed;
};


function getTotal(val1: number, val2: number):number {
    return val1 + val2;
};

function logValue(value: any): void {   // void means doesn't return any thing
    console.log(value);
};

const car : Car = {
    name: "BMW",
    brand: "Bayerische Motoren Werke",
    model: "700",
    topSpeed: {speed: 150}
}


console.log(car);
logValue(3);
