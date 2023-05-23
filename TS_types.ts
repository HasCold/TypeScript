//  TypeScript Types 

function getTotal(val1: number, val2: number){
    return val1 + val2;
}

getTotal(10, 30);


function greet(prefix: string, name: string, clg: boolean){
    if (clg) {
        console.log(`Prefix :- ${prefix}, Name :- ${name}`);
    } else {   
        return `Prefix :- ${prefix}, Name :- ${name}`;
    }
};

 greet("Hello", "Hasan", true);
