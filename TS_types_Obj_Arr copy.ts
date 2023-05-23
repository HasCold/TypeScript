// Object && Arrays Types 

const car:{
    brand: string,
    model: string,
    variant: string[]  // we have to define TS like this way 
    // variant: [string, string, number]  if we have to define specifically in TS so we have to do like this way 
} = {
    brand: "Toyota",
    model: "Corolla", 
    variant: ["700", "500", "300"],
};

console.log(car.variant);