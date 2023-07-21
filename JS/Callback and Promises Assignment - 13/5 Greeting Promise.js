function greetWithName(name) {
    return new Promise((resolve, reject) => {
      if (typeof name !== 'string') {
        reject(new Error('Name should be a string.'));
      } else {
        const greeting = `Hello, ${name}!`;
        resolve(greeting);
      }
    });
  }
  const name = "Sachin";
  greetWithName(name)
    .then((greeting) => {
      console.log(greeting); // Output: Hello, Mithun!
    })
    .catch((error) => {
      console.error(error.message); // Output: If the 'name' is not a string: "Name should be a string."
    });
    