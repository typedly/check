import { ExactEqual } from "../lib";

// Examples.
// Union.
// The difference between `StrictEqual` / `Equal` / `ExactEqual`
export type UnionExample1 = ExactEqual<"a" | "b", "a">;  // false / boolean / false
export type UnionExample2 = ExactEqual<'a' | 'b', 'b' | 'a'>; // true / boolean / true
export type UnionExample3 = ExactEqual<'a' | 'b', 'a' | 'b'>; // true / boolean / true
export type UnionExample4 = ExactEqual<string | number, number | string>; // true / boolean / true
export type UnionExample5 = ExactEqual<number | string, number | string>; // true / boolean / true

// Array.
export type ArrayExample1 = ExactEqual<[1, 2], number[]>;  // false
export type ArrayExample2 = ExactEqual<[1, 'a'], number[]>;  // false

// Tuples
export type TupleExample1 = ExactEqual<[string, number], [number, string]>; // false
export type TupleExample2 = ExactEqual<[string, number], [string, number]>; // true
export type TupleExample3 = ExactEqual<[string, number], [string, number, boolean]>; // false

// Primitive.
export type PrimitiveExample1 = ExactEqual<1, number>;  // false
export type PrimitiveExample2 = ExactEqual<'a', string>;  // false

// Primitives with Arrays.
export type PrimitiveArrayExample1 = ExactEqual<number[], number[]>;  // true
export type PrimitiveArrayExample2 = ExactEqual<number[], string[]>;  // false

// Object.
export type ObjectExample1 = ExactEqual<{ name: string }, { name: string }>; // true
export type ObjectExample2 = ExactEqual<{ name: string }, { age: number }>; // false
export type ObjectExample3 = ExactEqual<{ name: string }, { name: string; age: number }>; // false
export type ObjectExample4 = ExactEqual<{a:number, b:string}, {b:string, a:number}>; // true
export type ObjectExample5 = ExactEqual<{a:number, b:string}, {b:string, a:number}>; // true
export type ObjectExample6 = ExactEqual<{a:number, b:string}, {b:string, a:number}>; // true

// Nested Objects.
export type NestedObjectExample1 = ExactEqual<{ user: { name: string } }, { user: { name: string } }>; // true
export type NestedObjectExample2 = ExactEqual<{ user: { name: string; age: number } }, { user: { name: string } }>; // false
export type NestedObjectExample3 = ExactEqual<{ user: { name: string } }, { user: { age: number } }>; // false

// Nested Arrays.
export type NestedArrayExample1 = ExactEqual<[number[], string[]], [string[], number[]]>; // false
export type NestedArrayExample2 = ExactEqual<[number[], string[]], [number[], string[]]>; // true
export type NestedArrayExample3 = ExactEqual<[[1, 2], ['a', 'b']], [number[], string[]]>; // false

// Mixed Types.
export type MixedTypesExample1 = ExactEqual<{ id: number } | { id: string }, { id: string | number }>; // false
export type MixedTypesExample2 = ExactEqual<{ id: string | number }, { id: number }>;  // false

// Function types.
export type FunctionExample1 = ExactEqual<() => string, () => string>; // true
export type FunctionExample2 = ExactEqual<() => string, () => number>; // false
