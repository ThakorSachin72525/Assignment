class emp {
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary(){
        return `The salary of ${this.name} is ${this.salary}`;
    }
}

const employee1 = new emp("Sachin", "SME", 35000);
const getsalary = employee1.getSalary();
console.log(getsalary);