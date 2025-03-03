/**
 * @description Checks whether `A` can be assigned to `B` or vice versa, returning `true` if either condition is met, otherwise `false`.
 * 
 * - Checks if one type includes another.
 * - Checks if any member of `A` is assignable to `B` OR any member of `B` is assignable to `A`.
 * - Handles distribution over unions.
 * - Allows subtype/supertype compatibility.
 * - Supports partial compatibility, not requiring exact structure alignment.
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
 * - ✓ **None**: No mutual extendability check (only one direction is checked).
 * - ✕ **Non-tuple**: .
 * - ✕ **Tuple-based**: .
 * - ✕ **Function-based**: Return type comparison (strict equality check).
 * 
 * Distributive:
 * - ✕ Non-distributive(by using tuple): Prevents distributive behavior.
 * - ✕ Non-distributive(by using function type): Prevents distributive behavior.
 * - ✓ Distributive(without tuple): Allows distribution over unions.
 * 
 * Strict:
 * - ✓ Non-strict(without tuple)(one direction): Allows subtype/supertype compatibility. 
 * - ✕ Non-strict(without tuple) structural(both direction): Disallows subtype/supertype compatibility.
 * - ✕ Strict(by using tuple) structural(both direction): Ensures exact structural equality.
 * - ✕ Strict(by using function return type): Ensures exact structural equality.
 * @export
 * @template A 
 * @template B 
 * @example
 * 
 */
export type Assignable<A, B> =
  A extends B
    ? true
    : B extends A
      ? true
      : false;

// Aliases.
export type DistributiveAssignable<A, B> = Assignable<A, B>;
export type Inclusion<A, B> = Assignable<A, B>;
