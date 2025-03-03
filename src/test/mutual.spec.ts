// Type.
import { Mutual } from "../lib";

// Examples.
// Union.
export type UnionExample1 = Mutual<"a" | "b", "a">;  // false
export type UnionExample2 = Mutual<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = Mutual<'a' | 'b', 'a' | 'b'>; // true

export type UnionExample4 = Mutual<string | number, number | string>; // true
export type UnionExample5 = Mutual<number | string, number | string>; // true

export type UnionExample6 = Mutual<boolean, true | false>; // true
export type UnionExample7 = Mutual<true | false, boolean>; // true

// Array.
export type ArrayExample1 = Mutual<[1, 2], number[]>;  // false
export type ArrayExample2 = Mutual<[1, 'a'], number[]>;  // false

// Tuples
export type TupleExample1 = Mutual<[string, number], [number, string]>; // false
export type TupleExample2 = Mutual<[string, number], [string, number]>; // true
export type TupleExample3 = Mutual<[string, number], [string, number, boolean]>; // false

// Primitive.
// number
export type PrimitiveExample1 = Mutual<1, number>;  // false
export type PrimitiveExample2 = Mutual<number, 1>;  // false
// string
export type PrimitiveExample3 = Mutual<'a', string>;  // false
export type PrimitiveExample4 = Mutual<string, 'a'>;  // false
// boolean
export type PrimitiveExample5 = Mutual<true, boolean>; // boolean - CHECK
export type PrimitiveExample6 = Mutual<boolean, true>; // false

export type PrimitiveExample7 = Mutual<number, string>; // false
export type PrimitiveExample8 = Mutual<any, number> // false
export type PrimitiveExample9 = Mutual<number, any> // boolean - CHECK
export type PrimitiveExample10 = Mutual<never, number> // false
export type PrimitiveExample11 = Mutual<number, never> // false

// Primitives with Arrays.
export type PrimitiveArrayExample1 = Mutual<number[], number[]>;  // true
export type PrimitiveArrayExample2 = Mutual<number[], string[]>;  // false

// Object.
export type ObjectExample1 = Mutual<{ name: string }, { name: string }>; // true
export type ObjectExample2 = Mutual<{ name: string }, { age: number }>; // false

export type ObjectExample3 = Mutual<{ name: string }, { name: string; age: number }>; // false
export type ObjectExample4 = Mutual<{ name: string; age: number }, { name: string }>; // false

export type ObjectExample5 = Mutual<{a:number, b:string}, {b:string, a:number}>; // Differ order: true
export type ObjectExample6 = Mutual<{b:string, a:number}, {b:string, a:number}>; // Same order: true

export type ObjectExample7 = Mutual<{ a: number }, { a: number; b: string }>; // false
export type ObjectExample8 = Mutual<{ a: number; b: string }, { a: number }>; // false
export type ObjectExample9 = Mutual<{ a: number; b: string }, { b: string }>; // false

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
