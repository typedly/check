import { Same } from "../lib";

// Examples.
// Union.
export type UnionExample1 = Same<"a" | "b", "a">;  // false
export type UnionExample2 = Same<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = Same<'a' | 'b', 'a' | 'b'>; // true

export type UnionExample4 = Same<string | number, number | string>; // true
export type UnionExample5 = Same<number | string, number | string>; // true

export type UnionExample6 = Same<boolean, true | false>; // true
export type UnionExample7 = Same<true | false, boolean>; // true

// Array.
export type ArrayExample1 = Same<[1, 2], number[]>;  // false
export type ArrayExample2 = Same<[1, 'a'], number[]>;  // false

// Tuples
export type TupleExample1 = Same<[string, number], [number, string]>; // false
export type TupleExample2 = Same<[string, number], [string, number]>; // true
export type TupleExample3 = Same<[string, number], [string, number, boolean]>; // false

// Primitive.
// number
export type PrimitiveExample1 = Same<1, number>;  // false
export type PrimitiveExample2 = Same<number, 1>;  // false
// string
export type PrimitiveExample3 = Same<'a', string>;  // false
export type PrimitiveExample4 = Same<string, 'a'>;  // false
// boolean
export type PrimitiveExample5 = Same<true, boolean>; // false
export type PrimitiveExample6 = Same<boolean, true>; // false

export type PrimitiveExample7 = Same<number, string>; // false
export type PrimitiveExample8 = Same<any, number> // false
export type PrimitiveExample9 = Same<number, any> // false
export type PrimitiveExample10 = Same<never, number> // false
export type PrimitiveExample11 = Same<number, never> // false

// Primitives with Arrays.
export type PrimitiveArrayExample1 = Same<number[], number[]>;  // true
export type PrimitiveArrayExample2 = Same<number[], string[]>;  // false

// Object.
export type ObjectExample1 = Same<{ name: string }, { name: string }>; // true
export type ObjectExample2 = Same<{ name: string }, { age: number }>; // false

export type ObjectExample3 = Same<{ name: string }, { name: string; age: number }>; // false
export type ObjectExample4 = Same<{ name: string; age: number }, { name: string }>; // false

export type ObjectExample5 = Same<{a:number, b:string}, {b:string, a:number}>; // Differ order: true
export type ObjectExample6 = Same<{b:string, a:number}, {b:string, a:number}>; // Same order: true

export type ObjectExample7 = Same<{ a: number }, { a: number; b: string }>; // false
export type ObjectExample8 = Same<{ a: number; b: string }, { a: number }>; // false
export type ObjectExample9 = Same<{ a: number; b: string }, { b: string }>; // false

// Nested Objects.
export type NestedObjectExample1 = Same<{ user: { name: string } }, { user: { name: string } }>; // true
export type NestedObjectExample2 = Same<{ user: { name: string; age: number } }, { user: { name: string } }>; // false
export type NestedObjectExample3 = Same<{ user: { name: string } }, { user: { age: number } }>; // false

// Nested Arrays.
export type NestedArrayExample1 = Same<[number[], string[]], [string[], number[]]>; // false
export type NestedArrayExample2 = Same<[number[], string[]], [number[], string[]]>; // true
export type NestedArrayExample3 = Same<[[1, 2], ['a', 'b']], [number[], string[]]>; // false

// Mixed Types.
export type MixedTypesExample1 = Same<{ id: number } | { id: string }, { id: string | number }>; // false
export type MixedTypesExample2 = Same<{ id: string | number }, { id: number }>;  // false

// Function types.
export type FunctionExample1 = Same<() => string, () => string>; // true
export type FunctionExample2 = Same<() => string, () => number>; // false


// // Type.
// import { Same } from "../lib";


// export type Test19 = IsEqual<1, 1>; // true
// export type Test29 = IsEqual<1, 2>; // false
// export type Test39 = IsEqual<{ a: string }, { a: string }>; // true
// export type Test49 = IsEqual<{ a: string }, { a: number }>; // false
// export type Test59 = IsEqual<string | number, string | number>; // true
// export type Test69 = IsEqual<string | number, number | string>; // true ✅
// export type Test79 = IsEqual<string | number, number | string | symbol>; // false ❌ (symbol is extra)
    
// export type TestMutual1 = IsEqual<string | number, string | number>;   // boolean
// export type TestMutual2 = IsEqual<string | number, number | string | symbol>;   // boolean


// export type Test1 = Same<number, number>; // true
// export type Test2 = Same<number, string>; // false
// export type Test3 = Same<{ a: number; b: string }, { b: string; a: number }>; // true
// export type Test4 = Same<[1, 2], [1, 2]>; // true
// export type Test5 = Same<[1, 2], [2, 1]>; // false


// export type Test6 = Same<number | string, string | number>; // true
// export type Test7 = Same<{a: number}, {a: number, b: string}>; // false
// export type Test8 = Same<any, any>; // true
// export type Test9 = Same<unknown, unknown>; // true
// export type Test10 = Same<never, never>; // true