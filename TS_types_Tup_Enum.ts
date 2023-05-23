// Tuples && Enum Types 

// Whenever you control the array Element and also their length so we use Tuples

const car:{
    brand: string,
    model: string,
    variant: [string, string, number] // if we have to define specifically in TS so we have to do like this way 
} = {
    brand: "Toyota",
    model: "Corolla", 
    variant: ["700", "500", 300],
};

const variant: [string, string, number] = ["700", "500", 300]

variant.push("asas");   // So you have to understand tuples will not catch the error in the push time
console.log(variant);

// Enums :-

enum Variant{SEVEN, FIVE, THREE}

const vehicle:{
    brand: string,
    model: string,
    variant: Variant
} = {
    brand: "Toyota",
    model: "Corolla", 
    variant: Variant.SEVEN
};

if(vehicle.variant === Variant.SEVEN){
    console.log(vehicle.variant);   // -->> 0
}