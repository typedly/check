import { Equal } from "../lib";

// Examples.
// Union.
export type UnionExample1 = Equal<"a" | "b", "a">;  // boolean
export type UnionExample2 = Equal<'a' | 'b', 'b' | 'a'>; // boolean
export type UnionExample3 = Equal<'a' | 'b', 'a' | 'b'>; // boolean
export type UnionExample4 = Equal<string | number, number | string>; // boolean
export type UnionExample5 = Equal<number | string, number | string>; // boolean

// Array.
export type ArrayExample1 = Equal<[1, 2], number[]>;  // false
export type ArrayExample2 = Equal<[1, 'a'], number[]>;  // false

// Tuples
export type TupleExample1 = Equal<[string, number], [number, string]>; // false
export type TupleExample2 = Equal<[string, number], [string, number]>; // true
export type TupleExample3 = Equal<[string, number], [string, number, boolean]>; // false

// Primitive.
export type PrimitiveExample1 = Equal<1, number>;  // false
export type PrimitiveExample2 = Equal<'a', string>;  // false

// Primitives with Arrays.
export type PrimitiveArrayExample1 = Equal<number[], number[]>;  // true
export type PrimitiveArrayExample2 = Equal<number[], string[]>;  // false

// Object.
export type ObjectExample1 = Equal<{ name: string }, { name: string }>; // true
export type ObjectExample2 = Equal<{ name: string }, { age: number }>; // false
export type ObjectExample3 = Equal<{ name: string }, { name: string; age: number }>; // false
export type ObjectExample4 = Equal<{a:number, b:string}, {b:string, a:number}>; // true
export type ObjectExample5 = Equal<{a:number, b:string}, {b:string, a:number}>; // true
export type ObjectExample6 = Equal<{a:number, b:string}, {b:string, a:number}>; // true

// Nested Objects.
export type NestedObjectExample1 = Equal<{ user: { name: string } }, { user: { name: string } }>; // true
export type NestedObjectExample2 = Equal<{ user: { name: string; age: number } }, { user: { name: string } }>; // false
export type NestedObjectExample3 = Equal<{ user: { name: string } }, { user: { age: number } }>; // false

// Nested Arrays.
export type NestedArrayExample1 = Equal<[number[], string[]], [string[], number[]]>; // false
export type NestedArrayExample2 = Equal<[number[], string[]], [number[], string[]]>; // true
export type NestedArrayExample3 = Equal<[[1, 2], ['a', 'b']], [number[], string[]]>; // false

// Mixed Types.
export type MixedTypesExample1 = Equal<{ id: number } | { id: string }, { id: string | number }>; // false
export type MixedTypesExample2 = Equal<{ id: string | number }, { id: number }>;  // false

// Function types.
export type FunctionExample1 = Equal<() => string, () => string>; // true
export type FunctionExample2 = Equal<() => string, () => number>; // false
