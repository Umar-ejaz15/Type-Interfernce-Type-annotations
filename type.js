"use strict";
// Type Inference Examples
let inferredString = "Hello"; // TypeScript infers as string
let inferredNumber = 42; // TypeScript infers as number
let inferredBoolean = true; // TypeScript infers as boolean
let inferredArray = [1, 2, 3]; // TypeScript infers as number[]
let inferredObject = { name: "John", age: 30 }; // TypeScript infers object structure
// Type Annotation Examples
let annotatedString = "World";
let annotatedNumber = 123;
let annotatedBoolean = false;
let annotatedArray = ["a", "b", "c"];
let annotatedTuple = ["age", 25];
let annotatedObject = { id: 1, name: "Jane" };
// Function with type annotations
function add(a, b) {
    return a + b;
}
let userStatus = "active";
// Enum type annotation
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
