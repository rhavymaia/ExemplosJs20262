const fruitBasket = ['apple', 'banana', 'cherry', 'apple', 'banana', 'apple'];

const fruitCounts = fruitBasket.reduce((accumulator, fruit) => {
  accumulator[fruit] = (accumulator[fruit] || 0) + 1;
  return accumulator;
  // accumulator.apple;
  // {
  //   apple: 2,
  //   banana: 1,
  //   cherry: 1
  // }
}, {});

console.log(fruitCounts);
// Output: { apple: 3, banana: 2, cherry: 1 }
