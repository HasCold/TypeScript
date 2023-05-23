// Classes are the new JS object features which are supported in TS

class Vehicle{   // class convention first letter capital
    model: string = "DUMMY_CAR_MODEL";  // properties
    
    constructor(mdl: string){  // methods
        this.model = mdl;
    };

    getDetails(this:Vehicle){
        console.log({model : this.model});
    }
};

const xuvcar = new Vehicle("XUV");  // For the Object initializing we have to use the new keyword

const newCar = {
    getDetails : xuvcar.getDetails
}

xuvcar.getDetails();