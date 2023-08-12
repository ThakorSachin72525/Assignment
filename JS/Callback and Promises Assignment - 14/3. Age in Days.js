function ageInDays(p) {
    const fullName = `${p.firstname} ${p.lastname}`;
    const ageInDays = p.age * 365;
  
    return function strlog() {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    };
  }
  
  const person = {
    firstname: "Sachin",
    lastname: "Thakor",
    age: 24,
  };
  
  const result = ageInDays(person);
  result(); // Output: The person's full name is Sachin Thakor and their age in days is 8760.
  