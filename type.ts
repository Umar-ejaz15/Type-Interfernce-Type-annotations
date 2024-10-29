// Type Inference Examples
let inferredString = "Hello"; // TypeScript infers as string
let inferredNumber = 42; // TypeScript infers as number
let inferredBoolean = true; // TypeScript infers as boolean
let inferredArray = [1, 2, 3]; // TypeScript infers as number[]
let inferredObject = { name: "John", age: 30 }; // TypeScript infers object structure

// Type Annotation Examples
let annotatedString: string = "World";
let annotatedNumber: number = 123;
let annotatedBoolean: boolean = false;
let annotatedArray: string[] = ["a", "b", "c"];
let annotatedTuple: [string, number] = ["age", 25];
let annotatedObject: { id: number; name: string } = { id: 1, name: "Jane" };

// Function with type annotations
function add(a: number, b: number): number {
    return a + b;
}

// Interface with type annotations
interface User {
    id: number;
    name: string;
    email?: string; // Optional property
}

// Type alias with union type
type Status = "active" | "inactive" | "pending";
let userStatus: Status = "active";


// Enum type annotation
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
