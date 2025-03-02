import { Mutual } from "../lib";

// Examples.
// Union.
export type UnionExample1 = Mutual<"a" | "b", "a">;  // false
export type UnionExample2 = Mutual<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = Mutual<'a' | 'b', 'a' | 'b'>; // true
export type UnionExample4 = Mutual<string | number, number | string>; // true
export type UnionExample5 = Mutual<number | string, number | string>; // true

// Array.
export type ArrayExample1 = Mutual<[1, 2], number[]>;  // false
export type ArrayExample2 = Mutual<[1, 'a'], number[]>;  // false

// Tuples
export type TupleExample1 = Mutual<[string, number], [number, string]>; // false
export type TupleExample2 = Mutual<[string, number], [string, number]>; // true
export type TupleExample3 = Mutual<[string, number], [string, number, boolean]>; // false

// Primitive.
export type PrimitiveExample1 = Mutual<1, number>;  // false
export type PrimitiveExample2 = Mutual<'a', string>;  // false

// Primitives with Arrays.
export type PrimitiveArrayExample1 = Mutual<number[], number[]>;  // true
export type PrimitiveArrayExample2 = Mutual<number[], string[]>;  // false

// Object.
export type ObjectExample1 = Mutual<{ name: string }, { name: string }>; // true
export type ObjectExample2 = Mutual<{ name: string }, { age: number }>; // false
export type ObjectExample3 = Mutual<{ name: string }, { name: string; age: number }>; // false
export type ObjectExample4 = Mutual<{a:number, b:string}, {b:string, a:number}>; // true
export type ObjectExample5 = Mutual<{a:number, b:string}, {b:string, a:number}>; // true
export type ObjectExample6 = Mutual<{a:number, b:string}, {b:string, a:number}>; // true

// Nested Objects.
export type NestedObjectExample1 = Mutual<{ user: { name: string } }, { user: { name: string } }>; // true
export type NestedObjectExample2 = Mutual<{ user: { name: string; age: number } }, { user: { name: string } }>; // false
export type NestedObjectExample3 = Mutual<{ user: { name: string } }, { user: { age: number } }>; // false

// Nested Arrays.
export type NestedArrayExample1 = Mutual<[number[], string[]], [string[], number[]]>; // false
export type NestedArrayExample2 = Mutual<[number[], string[]], [number[], string[]]>; // true
export type NestedArrayExample3 = Mutual<[[1, 2], ['a', 'b']], [number[], string[]]>; // false

// Mixed Types.
export type MixedTypesExample1 = Mutual<{ id: number } | { id: string }, { id: string | number }>; // false
export type MixedTypesExample2 = Mutual<{ id: string | number }, { id: number }>;  // false

// Function types.
export type FunctionExample1 = Mutual<() => string, () => string>; // true
export type FunctionExample2 = Mutual<() => string, () => number>; // false
