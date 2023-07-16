function Student(name){
    this.name = name;
}

Student.prototype.printDetails = function () {
    console.log(`Hello, my name is ${this.name}`);
}

const st = new Student("Sachin")

st.printDetails();