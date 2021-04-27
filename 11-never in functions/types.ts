const divide = (numberOne: number, numberTwo: number): number => {
  return numberOne / numberTwo;
};

let divide2: (a: number, b: number) => number;
divide2 = divide;

//void does not return anything, but can return undefined, null
function print(): void {
  console.log(divide2(8, 2));
}

//never does not return anything
const throwError = (message: string) => {
  throw new Error(message);
};

print();
