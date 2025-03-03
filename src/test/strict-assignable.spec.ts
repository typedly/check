import { StrictAssignable } from "../lib";

// Examples.
// Union.
export type UnionExample1 = StrictAssignable<"a" | "b", "a">;  // true
export type UnionExample2 = StrictAssignable<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = StrictAssignable<'a' | 'b', 'a' | 'b'>; // true

export type UnionExample4 = StrictAssignable<string | number, number | string>; // true
export type UnionExample5 = StrictAssignable<number | string, number | string>; // true

export type UnionExample6 = StrictAssignable<boolean, true | false>; // true
export type UnionExample7 = StrictAssignable<true | false, boolean>; // true

// Array.
export type ArrayExample1 = StrictAssignable<[1, 2], number[]>;  // true
export type ArrayExample2 = StrictAssignable<[1, 'a'], number[]>;  // false

// Tuples
export type TupleExample1 = StrictAssignable<[string, number], [number, string]>; // false
export type TupleExample2 = StrictAssignable<[string, number], [string, number]>; // true
export type TupleExample3 = StrictAssignable<[string, number], [string, number, boolean]>; // false

// Primitive.
// number
export type PrimitiveExample1 = StrictAssignable<1, number>;  // true
export type PrimitiveExample2 = StrictAssignable<number, 1>;  // true
// string
export type PrimitiveExample3 = StrictAssignable<'a', string>;  // true
export type PrimitiveExample4 = StrictAssignable<string, 'a'>;  // true
// boolean
export type PrimitiveExample5 = StrictAssignable<true, boolean>; // true
export type PrimitiveExample6 = StrictAssignable<boolean, true>; // true

export type PrimitiveExample7 = StrictAssignable<number, string>; // false
export type PrimitiveExample8 = StrictAssignable<any, number> // true
export type PrimitiveExample9 = StrictAssignable<number, any> // true
export type PrimitiveExample10 = StrictAssignable<never, number> // true - CHECK
export type PrimitiveExample11 = StrictAssignable<number, never> // true - CHECK

// Primitives with Arrays.
export type PrimitiveArrayExample1 = StrictAssignable<number[], number[]>;  // true
export type PrimitiveArrayExample2 = StrictAssignable<number[], string[]>;  // false

// Object.
export type ObjectExample1 = StrictAssignable<{ name: string }, { name: string }>; // true
export type ObjectExample2 = StrictAssignable<{ name: string }, { age: number }>; // false

export type ObjectExample3 = StrictAssignable<{ name: string }, { name: string; age: number }>; // true
export type ObjectExample4 = StrictAssignable<{ name: string; age: number }, { name: string }>; // true

export type ObjectExample5 = StrictAssignable<{a:number, b:string}, {b:string, a:number}>; // Differ order: true
export type ObjectExample6 = StrictAssignable<{b:string, a:number}, {b:string, a:number}>; // Same order: true

export type ObjectExample7 = StrictAssignable<{ a: number }, { a: number; b: string }>; // true
export type ObjectExample8 = StrictAssignable<{ a: number; b: string }, { a: number }>; // true
export type ObjectExample9 = StrictAssignable<{ a: number; b: string }, { b: string }>; // true

// Nested Objects.
export type NestedObjectExample1 = StrictAssignable<{ user: { name: string } }, { user: { name: string } }>; // true
export type NestedObjectExample2 = StrictAssignable<{ user: { name: string; age: number } }, { user: { name: string } }>; // true
export type NestedObjectExample3 = StrictAssignable<{ user: { name: string } }, { user: { age: number } }>; // false

// Nested Arrays.
export type NestedArrayExample1 = StrictAssignable<[number[], string[]], [string[], number[]]>; // false
export type NestedArrayExample2 = StrictAssignable<[number[], string[]], [number[], string[]]>; // true
export type NestedArrayExample3 = StrictAssignable<[[1, 2], ['a', 'b']], [number[], string[]]>; // true

// Mixed Types.
export type MixedTypesExample1 = StrictAssignable<{ id: number } | { id: string }, { id: string | number }>; // true
export type MixedTypesExample2 = StrictAssignable<{ id: string | number }, { id: number }>;  // true

// Function types.
export type FunctionExample1 = StrictAssignable<() => string, () => string>; // true
export type FunctionExample2 = StrictAssignable<() => string, () => number>; // false
