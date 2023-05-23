type User1 = {
    _id : string,
    name : string,
    age : number
}

// Generic Type : - It means the first type Array is dependent on second type User
// const userArr : string[] = []  ;  whether you can wirte like this way or below form 

const userArr : Array<User1> = [
{
    _id : "123",
    name : "Hasan",
    age : 21
},
{
    _id : "124",
    name : "SS",
    age : 20
},
{
    _id : "156",
    name : "Ali",
    age : 22
},

];

const response: Promise<User1[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(userArr);
    }, 3000)
});

response.then((data) => console.log(data[0].age));
