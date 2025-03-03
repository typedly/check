/**
 * @description
 * @export
 * @template A 
 * @template B 
 */
export type ExactEqual<A, B> = 
  [A] extends [B] 
    ? [B] extends [A] 
      ? (A extends B ? (B extends A ? true : false) : false)
      : false
    : false;
