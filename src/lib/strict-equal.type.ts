/**
 * @description Determines if two types `A` and `B` are **strictly** equal.
 * - Structural equality check.
 * - Ensures exact type match.
 * - One-way exact compatibility.
 * - Ensures structural assignability.
 * - Ensures deep structure match.
 * 
 * - ✓ Ensures both types mutually extend each other: it checks if any member of `A` is assignable to `B` **AND** any member of `B` is assignable to `A`.
 * - ✕ Ensures a **definite `true` or `false` result**, avoiding `boolean` ambiguity. 
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
 * - ✕ Non-tuple.
 * - ✓ Tuple-based.
 * - ✕ Function-based: Return type comparison (strict equality check).
 * 
 * Distributive:
 * - ✓ Non-distributive(by using tuple): Prevents distributive behavior.
 * - ✕ Non-distributive(by using function type): Prevents distributive behavior.
 * - ✕ Distributive(without tuple): Allows distribution over unions.
 * 
 * Strict:
 * - ✕ Non-strict(without tuple)(one direction): Allows subtype/supertype compatibility. 
 * - ✕ Non-strict(without tuple) structural(both direction): Disallows subtype/supertype compatibility.
 * - ✓ Strict(by using tuple) structural(both direction): Ensures exact structural equality.
 * - ✕ Strict(by using function return type): Ensures exact structural equality.
 * @export
 * @template A 
 * @template B 
 */
export type StrictEqual<A, B> =
  [A] extends [B]
    ? [B] extends [A]
      ? true
      : false
    : false;

// Aliases.
export type StructuralEqual<A, B> = StrictEqual<A, B>;
