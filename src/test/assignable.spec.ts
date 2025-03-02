import { Assignable } from "../lib";

// Examples.
// Union.
export type UnionExample1 = Assignable<"a" | "b", "a">;  // boolean
export type UnionExample2 = Assignable<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = Assignable<'a' | 'b', 'a' | 'b'>; // true
export type UnionExample4 = Assignable<string | number, number | string>; // true
export type UnionExample5 = Assignable<number | string, number | string>; // true

// Array.
export type ArrayExample1 = Assignable<[1, 2], number[]>;  // true, because all elements of [1, 2] are numbers
export type ArrayExample2 = Assignable<[1, 'a'], number[]>;  // false, because 'a' is not a number

// Primitives with Arrays.
export type PrimitiveArrayExample1 = Assignable<number[], number[]>;  // true, both types are identical arrays of numbers
export type PrimitiveArrayExample2 = Assignable<number[], string[]>;  // false, incompatible array types

// Tuples
export type TupleExample1 = Assignable<[string, number], [number, string]>; // false
export type TupleExample2 = Assignable<[string, number], [string, number]>; // true
export type TupleExample3 = Assignable<[string, number], [string, number, boolean]>; // false

// Primitive.
export type PrimitiveExample1 = Assignable<1, number>;  // true, because 1 is a number
export type PrimitiveExample2 = Assignable<'a', string>;  // true, because 'a' is a string

// Object.
export type ObjectExample1 = Assignable<{ name: string }, { name: string }>; // true
export type ObjectExample2 = Assignable<{ name: string }, { age: number }>; // false
export type ObjectExample3 = Assignable<{ name: string }, { name: string; age: number }>; // true
export type ObjectExample4 = Assignable<{a:number, b:string}, {b:string, a:number}>; // true
export type ObjectExample5 = Assignable<{a:number, b:string}, {b:string, a:number}>; // true
export type ObjectExample6 = Assignable<{a:number, b:string}, {b:string, a:number}>; // true

// Nested Objects.
export type NestedObjectExample1 = Assignable<{ user: { name: string } }, { user: { name: string } }>; // true, both have identical nested structure
export type NestedObjectExample2 = Assignable<{ user: { name: string; age: number } }, { user: { name: string } }>; // true, because `name` is included in both
export type NestedObjectExample3 = Assignable<{ user: { name: string } }, { user: { age: number } }>; // false, `name` is missing in the second type

// Nested Arrays.
export type NestedArrayExample1 = Assignable<[number[], string[]], [string[], number[]]>; // false, both contain arrays of strings and numbers in different order
export type NestedArrayExample2 = Assignable<[number[], string[]], [number[], string[]]>; // true, both contain arrays of strings and numbers in same order
export type NestedArrayExample3 = Assignable<[[1, 2], ['a', 'b']], [number[], string[]]>; // true, because the inner types are assignable

// Mixed Types.
export type MixedTypesExample1 = Assignable<{ id: number } | { id: string }, { id: string | number }>; // true, because both types can handle either `string` or `number` for `id`
export type MixedTypesExample2 = Assignable<{ id: string | number }, { id: number }>;  // true, because `id` is `number` in the second type

// Function types.
export type FunctionExample1 = Assignable<() => string, () => string>; // true, both functions are identical
export type FunctionExample2 = Assignable<() => string, () => number>; // false, return types don't match
