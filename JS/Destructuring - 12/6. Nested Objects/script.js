function p(arr){
    const {
        name,
        address: { street},
    } = arr;
    return { name, street}
}

const person = {
name: "Sachin" ,
age: 21,
address: {
street :"88, Block B" ,
city: "Sector 27,Gandhinagar",
state: "Gujarat",}
}

console.log(p(person));

