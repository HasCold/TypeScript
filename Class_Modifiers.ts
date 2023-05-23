// Classes are the new JS object features which are supported in TS

// By-Default all modifiers are public
// public private protected private public

class Motor{   // class convention first letter capital
  model: string = "DUMMY_CAR_MODEL";  // properties
  readonly brand : string = "Toyota"; // the brand can't be changed 
 private colorVariant : string[] = [];
  
    constructor(mdl: string){  // methods
        this.model = mdl;
    };

    getDetails(this:Motor){
        console.log(this);
    }

    addColorVariant(value : string){
        this.colorVariant.push(value);
    }
};

const huxcar = new Motor("XUV");  // For the Object initializing we have to use the new keyword
const Fuxcar = new Motor("FUX");  // For the Object initializing we have to use the new keyword

huxcar.addColorVariant("black");
Fuxcar.addColorVariant("green");

const Car = {
    getDetails : huxcar.getDetails
}

huxcar.getDetails();