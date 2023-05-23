console.log("Welcome TypeScript");

// How to catch the error in the build time / Compile Time

// function getTotal(val1, val2){
//     if(typeof val1 === "number" && typeof val2 === "number"){

//         return val1 + val2;
//     }else{
//         return +val1 + +val2;
//     }
// }

function getTotal(val1: number, val2: number){  // type define number
    return val1 + val2;
}

const result = getTotal(10, 20);
console.log(result);