function demonstrateHoisting() {
    // Using var (function-scoped)
    console.log(a); // Output: undefined (hoisted, but not initialized yet)
    var a = 10;
    console.log(a); // Output: 10 (value assigned)
  
    // Using let (block-scoped)
    // console.log(b); // This line would result in a ReferenceError
    let b = 20;
    console.log(b); // Output: 20 (value assigned)
  
    // Using const (block-scoped)
    // console.log(c); // This line would result in a ReferenceError
    const c = 30;
    console.log(c); // Output: 30 (value assigned)
  }
  
  demonstrateHoisting();
  