function getPerson(obj) {
    try {
        if (
            typeof obj !== "object" ||
            obj === null ||
            !("name" in obj) ||
            !("age" in obj)
        ) {
            throw new Error("Invalid parameter type");
        }
        return `Name: ${obj.name}, Age:${obj.age}`;
    } catch (error) {
        return error.message;
    }
}

let a = {
    name: "Sachin",
    age: 24
};

let b = {
    name: "Thakor Sachin",
};

console.log(getPerson(a));
console.log(getPerson(b));
