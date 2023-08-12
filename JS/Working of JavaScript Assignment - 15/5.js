function demonstrateTemporalDeadZone() {
    if (true) {
      // This is a block scope
      let a = 10; // Variable a is declared and initialized
      console.log(a); // Output: 10 (value assigned)
    }
  }
  
  demonstrateTemporalDeadZone();
  