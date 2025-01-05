function add(a: number, b: number): number {
  return a + b;
}

function addStrings(a: string, b: string): string {
  return a + b;
}

// Now the compiler will give an error
//let result = add("hello", 10); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

let numResult = add(5, 10); // Correct usage
let strResult = addStrings("hello", " world"); // Correct usage