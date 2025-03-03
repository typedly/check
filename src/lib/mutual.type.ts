/**
 * @description Determines if two types `A` and `B` are **mutually** equal preventing `boolean` ambiguity.
 * 
 * - ✓ Ensures a **definite `true` or `false` result**, avoiding `boolean` ambiguity. 
 * 
 * `Boolean` ambiguity:
 * - ✓ Ensures a **definite `true` or `false` result**, avoiding `boolean` ambiguity. 
 * - ✕ It does not explicitly force a `true` or `false` result, leading to `boolean` results in complex scenarios.
 * 
 * Direction:
 * - ✕ One-direction: `A extends B OR B extends A`.
 * - ✓ Bi-directional: `A extends B AND B extends A`.
 * 
 * Inclusion:
 * - ✕ One-way inclusion: Checks if one type includes another.
 * - ✓ Two-way inclusion: Checks if one type includes another and another includes one.
 * 
 * Mutual assignability:
 * - ✕ None.
 * - ✓ Non-tuple.
 * - ✕ Tuple-based.
 * - ✕ Function-based: Return type comparison (strict equality check).
 * 
 * Distributive:
 * - ✕ Non-distributive(by using tuple): Prevents distributive behavior.
 * - ✕ Non-distributive(by using function type): Prevents distributive behavior.
 * - ✓ Distributive(without tuple): Allows distribution over unions.
 * 
 * Strict:
 * - ✕ Non-strict(without tuple)(one direction): Allows subtype/supertype compatibility. 
 * - ✓ Non-strict(without tuple) structural(both direction): Disallows subtype/supertype compatibility.
 * - ✕ Strict(by using tuple) structural(both direction): Ensures exact structural equality.
 * - ✕ Strict(by using function return type): Ensures exact structural equality.
 * @export
 * @template A 
 * @template B 
 * @example
 */
export type Mutual<A, B> =
  (A extends B ? true : false) extends true
    ? (B extends A ? true : false)
    : false;

// Aliases.
export type BooleanDistributiveEqual<A, B> = Mutual<A, B>;
export type MutualAssignable<A, B> = Mutual<A, B>;
