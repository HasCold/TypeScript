interface Contact{
    phNO: number; 
    address: string;
}

interface Individual{   // we can also extend the interfaces to interfaces like this way : interface Individual extends Contact
    name: string; 
    email: string;
}

class User implements Individual, Contact{  
    // Automatically the class User Inherit the Indvidual and Contact interfaces; User class use the properties of individual and contact
    
    constructor(public name: string, public email: string, public phNO: number, public address: string){}

    getInformation(this : User){
        console.log(this);
    }

}

const user1 = new User("Hasan", "hhash.com", 3939393, "R-798 Block-22");

user1.getInformation();