/**
 * @description Determines if `A` and `B` are structurally identical by ensuring both `A extends B` and `B extends A`.
 * 
 * - ✓ To determine if two types are distributively equal.
 * - ✓ Checks if both types mutually extend each other: it checks if any member of `A` is assignable to `B` **AND** any member of `B` is assignable to `A`.
 * 
 * `Boolean` ambiguity:
 * - ✕ Ensures a **definite `true` or `false` result**, avoiding `boolean` ambiguity. 
 * - ✓ It does not explicitly force a `true` or `false` result, leading to `boolean` results in complex scenarios.
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
 * - ✕ **None**: No mutual extendability check (only one direction is checked).
 * - ✓ **Non-tuple**: .
 * - ✕ **Tuple-based**: .
 * - ✕ **Function-based**: Return type comparison (strict equality check).
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
 */
// (string extends number ? true : false) | (string extends string ? true : false) | (number extends number ? true : false) | (number extends string ? true : false)
export type Equal<A, B> =
  A extends B
    ? (B extends A
      ? true
      : false)
    : false;

// Aliases.
export type DistributiveEqual<A, B> = Equal<A, B>;
