function uniqueItems(arr) {
    return Array.from(new Set(arr));
  }
  
  let a = [];
  for (let i = 0; i < 5; i++) {
    a.push(i);
  }
  
  let b = [5, 6, 7, 7, 7, 8, 9, 9];
  let c = uniqueItems(a.concat(b));
  
  console.log("a: " + uniqueItems(a));
  console.log("b: " + uniqueItems(b));
  console.log("c: " + uniqueItems(c));
  