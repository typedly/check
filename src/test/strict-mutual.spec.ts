// Type.
import { StrictMutual } from "../lib";

// Examples.
// Union.
export type UnionExample1 = StrictMutual<"a" | "b", "a">;  // false
export type UnionExample2 = StrictMutual<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = StrictMutual<'a' | 'b', 'a' | 'b'>; // true
export type UnionExample4 = StrictMutual<string | number, number | string>; // true
export type UnionExample5 = StrictMutual<number | string, number | string>; // true

// Array.
export type ArrayExample1 = StrictMutual<[1, 2], number[]>;  // false
export type ArrayExample2 = StrictMutual<[1, 'a'], number[]>;  // false

// Tuples
export type TupleExample1 = StrictMutual<[string, number], [number, string]>; // false
export type TupleExample2 = StrictMutual<[string, number], [string, number]>; // true
export type TupleExample3 = StrictMutual<[string, number], [string, number, boolean]>; // false

// Primitive.
export type PrimitiveExample1 = StrictMutual<1, number>;  // false
export type PrimitiveExample2 = StrictMutual<'a', string>;  // false

// Primitives with Arrays.
export type PrimitiveArrayExample1 = StrictMutual<number[], number[]>;  // true
export type PrimitiveArrayExample2 = StrictMutual<number[], string[]>;  // false

// Object.
export type ObjectExample1 = StrictMutual<{ name: string }, { name: string }>; // true
export type ObjectExample2 = StrictMutual<{ name: string }, { age: number }>; // false
export type ObjectExample3 = StrictMutual<{ name: string }, { name: string; age: number }>; // false
export type ObjectExample4 = StrictMutual<{a:number, b:string}, {b:string, a:number}>; // true
export type ObjectExample5 = StrictMutual<{a:number, b:string}, {b:string, a:number}>; // true
export type ObjectExample6 = StrictMutual<{a:number, b:string}, {b:string, a:number}>; // true

// Nested Objects.
export type NestedObjectExample1 = StrictMutual<{ user: { name: string } }, { user: { name: string } }>; // true
export type NestedObjectExample2 = StrictMutual<{ user: { name: string; age: number } }, { user: { name: string } }>; // false
export type NestedObjectExample3 = StrictMutual<{ user: { name: string } }, { user: { age: number } }>; // false

// Nested Arrays.
export type NestedArrayExample1 = StrictMutual<[number[], string[]], [string[], number[]]>; // false
export type NestedArrayExample2 = StrictMutual<[number[], string[]], [number[], string[]]>; // true
export type NestedArrayExample3 = StrictMutual<[[1, 2], ['a', 'b']], [number[], string[]]>; // false

// Mixed Types.
export type MixedTypesExample1 = StrictMutual<{ id: number } | { id: string }, { id: string | number }>; // false
export type MixedTypesExample2 = StrictMutual<{ id: string | number }, { id: number }>;  // false

// Function types.
export type FunctionExample1 = StrictMutual<() => string, () => string>; // true
export type FunctionExample2 = StrictMutual<() => string, () => number>; // false
