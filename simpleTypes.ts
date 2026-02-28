// This program demonstrates Typescript primitive types: boolean, number, string, bigint, and symbol.

// 1. BOOLEAN
//Used for true/false values.

//Use account status (true=active, false=inactive)

let isActive: boolean = true;
let hasPermission: boolean = false;

console.log("Account Active:", isActive);
console.log("Has Permission:", hasPermission);

// 2. NUMBER
//Used for all numeric values (integers, floats, etc.)

let age: number = 30; // Integer
let price: number = 19.99; // Float
let hexValue: number = 0xFF; // Hexadecimal
let binaryValue: number = 0b1010; // Binary
let octalValue: number = 0o755; // Octal

console.log("\nUser Age:", age);
console.log("Product Price:", price);
console.log("Hex Value:", hexValue);
console.log("Binary Value:", binaryValue);
console.log("Octal Value:", octalValue);

// 3. STRING
//Used for text data.

let firstName: string = "Antony";
let lastName: string = "Mwangi";

let fullName: string = `${firstName} ${lastName}`; // Template literal
let greeting: string = "Hello, " + fullName + "!"; // Concatenation

console.log("\nFull Name:", fullName);
console.log("Greeting:", greeting);