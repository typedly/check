import { StrictEqual } from "../lib";

// Examples.
// Union.
// The difference between Equal and StrictEqual
export type UnionExample1 = StrictEqual<"a" | "b", "a">;  // false instead of boolean
export type UnionExample2 = StrictEqual<'a' | 'b', 'b' | 'a'>; // true instead of boolean
export type UnionExample3 = StrictEqual<'a' | 'b', 'a' | 'b'>; // true instead of boolean
export type UnionExample4 = StrictEqual<string | number, number | string>; // true instead of boolean
export type UnionExample5 = StrictEqual<number | string, number | string>; // true instead of boolean

// Array.
export type ArrayExample1 = StrictEqual<[1, 2], number[]>;  // false
export type ArrayExample2 = StrictEqual<[1, 'a'], number[]>;  // false

// Tuples
export type TupleExample1 = StrictEqual<[string, number], [number, string]>; // false
export type TupleExample2 = StrictEqual<[string, number], [string, number]>; // true
export type TupleExample3 = StrictEqual<[string, number], [string, number, boolean]>; // false

// Primitive.
export type PrimitiveExample1 = StrictEqual<1, number>;  // false
export type PrimitiveExample2 = StrictEqual<'a', string>;  // false

// Primitives with Arrays.
export type PrimitiveArrayExample1 = StrictEqual<number[], number[]>;  // true
export type PrimitiveArrayExample2 = StrictEqual<number[], string[]>;  // false

// Object.
export type ObjectExample1 = StrictEqual<{ name: string }, { name: string }>; // true
export type ObjectExample2 = StrictEqual<{ name: string }, { age: number }>; // false
export type ObjectExample3 = StrictEqual<{ name: string }, { name: string; age: number }>; // false
export type ObjectExample4 = StrictEqual<{a:number, b:string}, {b:string, a:number}>; // true
export type ObjectExample5 = StrictEqual<{a:number, b:string}, {b:string, a:number}>; // true
export type ObjectExample6 = StrictEqual<{a:number, b:string}, {b:string, a:number}>; // true

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
