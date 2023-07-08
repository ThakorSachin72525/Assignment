function otl(arr) {
    const l = arr[arr.length - 1];
    const o = arr.find((e) => e);
    const t = arr[1];
    return [o, t, l];
  }
  
  let arr = [10, 20, 30, 40, 50, 60, 70, 70, 80, 80, 90, 100];
  let result = otl(arr);
  console.log(result);
  
  function num(arr) {
      const [first , second , , ,,,,,, , , last] = arr;
      return [first, second, last];
    }
let arr1 = [10, 20, 30, 40, 50, 60, 70, 70, 80, 80, 90, 100];
console.log(num(arr1));