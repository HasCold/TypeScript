function getTotal(val1: number, val2: number, cb: (result: number) => void) {
    const value = val1 + val2;
    cb(value);
};

getTotal(5, 10, (val) => console.log(val));

// Unknown Type
//  It is similar to any type but some different things

let a : unknown;
let b : string;

a = 30;
a= "asbabd"

// b = a;  // assign error

// Never Type

function throwErr(msg: string, code: number): never {   // Ye code kabhi bhi successfully run nahi hoga
     throw {msg, code};
}

throwErr("SERVER_ERROR", 500);