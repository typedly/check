/**
 * @description Checks whether `A` can be strictly(by using tuple) assigned to `B` or vice versa, returning `true` if either condition is met, otherwise `false`.
 * 
 * - This type checks for assignability in a Non-distributive (structural) manner.
 * - It checks if the entire type `A` is assignable to `B` OR the entire type `B` is assignable to `A`.
 * - This means that A and B must have the same overall structure to return `true`.
 * 
 * - One-way exact compatibility.
 * - Tuple-based strict checking.
 * - Ensures structural assignability.
 * - Ensures deep structure match.
 * 
 * Direction:
 * - ✓ One-direction: `A extends B OR B extends A`.
 * - ✕ Bi-directional: `A extends B AND B extends A`.
 * 
 * Inclusion:
 * - ✓ One-way inclusion: Checks if one type includes another.
 * - ✕ Two-way inclusion: Checks if one type includes another and another includes one.
 * 
 * Mutual assignability:
 * - ✓ None.
 * - ✕ Non-tuple.
 * - ✕ Tuple-based.
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
export type StrictAssignable<A, B> =
  [A] extends [B]
    ? true
    : [B] extends [A]
      ? true
      : false;

// Aliases.
export type Compatible<A, B> = StrictAssignable<A, B>;
export type StructuralAssignable<A, B> = StrictAssignable<A, B>;
