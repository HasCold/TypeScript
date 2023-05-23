// The <T> syntax in the function signature indicates that T is a generic type parameter. It acts as a placeholder for the actual type that will be provided when the function is called. The use of <T> enables the function to work with different types of arrays.

// When we call getFirstElement with an array of numbers, TypeScript infers the type parameter T as number based on the argument type. Similarly, when we call it with an array of strings, T is inferred as string.

// By using generics, we ensure that the return type of the function matches the type of the array elements, preserving type safety. This allows us to write generic functions that can be used with different types without sacrificing type checking.

// Generics provide type safety and help in writing more flexible and reusable code. They allow you to write functions or classes that can work with different types without sacrificing type checking.


const myArr: Array<string> = [];

// Function
const combinedData = <D extends object, E extends object>(data1: D, data2: E) => {
    return {...data1, ...data2}
};

const CombinedData = combinedData({name: "Hasan", rollNo: 2352}, {id: "125"});

console.log(CombinedData.rollNo)

const getValueFromObj = <T extends object, U extends keyof T> (obj: T, key: U) => {   // Hamne yaha pr declare krdiya ha ke T ak object hoga aur U jo ha T object ke andr ka ak value hoga
    return obj[key];
}

const value = getValueFromObj({name: "Umer"}, "name");


// Generic Types are the flexible type in TS in which one type is dependant on other type that what type will store in first type 
// Class

class Myclass <T>{
    itemArr: T[] = [];

    addItems(value: T) {
        this.itemArr.push(value);    
    }
}

const myvalue= new Myclass<string>();
const myvalue1= new Myclass<number>();
myvalue.addItems("12");
console.log(myvalue);
