import { StrictEqual } from "../lib";

// Examples.
// Union.
// The difference between Equal and StrictEqual
export type UnionExample1 = StrictEqual<"a" | "b", "a">;  // false instead of boolean
export type UnionExample2 = StrictEqual<'a' | 'b', 'b' | 'a'>; // true instead of boolean
export type UnionExample3 = StrictEqual<'a' | 'b', 'a' | 'b'>; // true instead of boolean

export type UnionExample4 = StrictEqual<string | number, number | string>; // true instead of boolean
export type UnionExample5 = StrictEqual<number | string, number | string>; // true instead of boolean

export type UnionExample6 = StrictEqual<boolean, true | false>; // true
export type UnionExample7 = StrictEqual<true | false, boolean>; // true

// Array.
export type ArrayExample1 = StrictEqual<[1, 2], number[]>;  // false
export type ArrayExample2 = StrictEqual<[1, 'a'], number[]>;  // false

// Tuples
export type TupleExample1 = StrictEqual<[string, number], [number, string]>; // false
export type TupleExample2 = StrictEqual<[string, number], [string, number]>; // true
export type TupleExample3 = StrictEqual<[string, number], [string, number, boolean]>; // false

// Primitive.
// number
export type PrimitiveExample1 = StrictEqual<1, number>;  // false
export type PrimitiveExample2 = StrictEqual<number, 1>;  // false
// string
export type PrimitiveExample3 = StrictEqual<'a', string>;  // false
export type PrimitiveExample4 = StrictEqual<string, 'a'>;  // false
// boolean
export type PrimitiveExample5 = StrictEqual<true, boolean>; // false
export type PrimitiveExample6 = StrictEqual<boolean, true>; // false

export type PrimitiveExample7 = StrictEqual<number, string>; // false
export type PrimitiveExample8 = StrictEqual<any, number> // true
export type PrimitiveExample9 = StrictEqual<number, any> // true
export type PrimitiveExample10 = StrictEqual<never, number> // false
export type PrimitiveExample11 = StrictEqual<number, never> // false

// Primitives with Arrays.
export type PrimitiveArrayExample1 = StrictEqual<number[], number[]>;  // true
export type PrimitiveArrayExample2 = StrictEqual<number[], string[]>;  // false

// Object.
export type ObjectExample1 = StrictEqual<{ name: string }, { name: string }>; // true
export type ObjectExample2 = StrictEqual<{ name: string }, { age: number }>; // false

export type ObjectExample3 = StrictEqual<{ name: string }, { name: string; age: number }>; // false
export type ObjectExample4 = StrictEqual<{ name: string; age: number }, { name: string }>; // false

export type ObjectExample5 = StrictEqual<{a:number, b:string}, {b:string, a:number}>; // Differ order: true
export type ObjectExample6 = StrictEqual<{b:string, a:number}, {b:string, a:number}>; // Same order: true

export type ObjectExample7 = StrictEqual<{ a: number }, { a: number; b: string }>; // false
export type ObjectExample8 = StrictEqual<{ a: number; b: string }, { a: number }>; // false
export type ObjectExample9 = StrictEqual<{ a: number; b: string }, { b: string }>; // false

// Nested Objects.
export type NestedObjectExample1 = StrictEqual<{ user: { name: string } }, { user: { name: string } }>; // true
export type NestedObjectExample2 = StrictEqual<{ user: { name: string; age: number } }, { user: { name: string } }>; // false
export type NestedObjectExample3 = StrictEqual<{ user: { name: string } }, { user: { age: number } }>; // false

// Nested Arrays.
export type NestedArrayExample1 = StrictEqual<[number[], string[]], [string[], number[]]>; // false
export type NestedArrayExample2 = StrictEqual<[number[], string[]], [number[], string[]]>; // true
export type NestedArrayExample3 = StrictEqual<[[1, 2], ['a', 'b']], [number[], string[]]>; // false

// Mixed Types.
export type MixedTypesExample1 = StrictEqual<{ id: number } | { id: string }, { id: string | number }>; // false
export type MixedTypesExample2 = StrictEqual<{ id: string | number }, { id: number }>;  // false

// Function types.
export type FunctionExample1 = StrictEqual<() => string, () => string>; // true
export type FunctionExample2 = StrictEqual<() => string, () => number>; // false
