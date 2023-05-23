// Classes are the new JS object features which are supported in TS

// By-Default all modifiers are public
// public private protected private public

class CarInfo{   // class convention first letter capital
    model: string = "DUMMY_CAR_MODEL";  // properties
    brand : string = "Toyota"; // the brand can't be changed 
   private colorVariant : string[] = [];
    
      constructor(mdl: string, brand: string){  // methods
          this.model = mdl;
          this.brand = brand;
      };
  
      getDetails(this:Motor){
          console.log(this);
      }
  
      addColorVariant(value : string){
          this.colorVariant.push(value);
      }
  };
  
  class Escar extends CarInfo{
    private chargingTime : number;
    constructor(mdl: string, brand: string, chrgtime: number){
        super(mdl, brand);
        this.chargingTime = chrgtime;
    }

    get getChargingTime(){    // when use the  getters so return must be there 
        return this.chargingTime;
    };

    set setChargingTime(time : number){    // when use the  setters so can't return the value
         this.chargingTime = time;
    };

  }
  
  
  const xuvCar = new Escar("XUV", "Mahindra", 10);

  console.log(xuvCar.getChargingTime);