function getPerson(obj) {
    return `name: "${obj.name}", age: ${obj.age}`;
}

let a = {
    name: "Sachin",
    age: 24
};

let b = {
    name: "Thakor Sachin",
    age: 25
};

console.log(getPerson(a));
console.log(getPerson(b));
