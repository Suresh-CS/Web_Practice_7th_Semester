function applyFunction(arr, func) {

    const result = arr.map(func);
    return result;
  }
  
  const numbers = [1, 2, 3];
  const doubledNumbers = applyFunction(numbers, (x) => x * 2);
  console.log(doubledNumbers);
  