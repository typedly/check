/**
 * @description Ensures exact equality by strictly comparing function return types.
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
 * - ✕ Tuple-based.
 * - ✓ Function-based: Return type comparison (strict equality check).
 * 
 * Distributive:
 * - ✕ Non-distributive(by using tuple): Prevents distributive behavior.
 * - ✓ Non-distributive(by using function type): the function comparison prevents distributive behavior.
 * - ✕ Distributive(without tuple): Allows distribution over unions.
 * 
 * Strict:
 * - ✕ Non-strict(without tuple): Allows subtype/supertype compatibility.
 * - ✕ Strict(by using tuple): Ensures exact structural equality.
 * - ✓ Strict(by using function return type): Ensures exact structural equality.
 * @export
 * @template A 
 * @template B 
 */
export type Same<A, B> =
  (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
    ? (<T>() => T extends B ? 1 : 2) extends (<T>() => T extends A ? 1 : 2)
      ? true
      : false
    : false;

export type StrictlySame<A, B> = Same<A, B>;
