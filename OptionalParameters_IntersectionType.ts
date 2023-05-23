// In TypeScript, a type is a way to define the shape and structure of data. It allows you to specify the expected types of properties or variables, enabling static type checking and providing more clarity to your code.

type ContactOne = {
    phNO: number; 
    address?: string;  // Optional parameters ?
}

type IndividualOne = {   // we can also extend the interfaces to interfaces like this way : interface Individual extends Contact
    name: string; 
    email: string;
}

type UserInfo2 = IndividualOne & ContactOne;  // In this line, UserInfo is a type declaration that combines the properties from both IndividualOne and ContactOne types using the & (intersection) operator. This means that a variable or object of type UserInfo must have all the properties defined in both IndividualOne and ContactOne types.

const userFor : UserInfo2 = {
    name: "John",
    email: "asaj@gmail.com",
    phNO: 11233123
}

// class UserInfo implements IndividualOne{  
//     // Automatically the class User Inherit the Indvidual and Contact interfaces; User class use the properties of individual and contact
    
//     constructor(public name: string, public email: string, public phNO: number, public address?: string){}  // ? opional parameter

//     getInformation(this : UserInfo){
//         console.log(this);
//     }

// }

// const user2 = new UserInfo("Hasan", "hhash.com", 3939393);

// user2.getInformation();