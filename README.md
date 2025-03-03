<a href="https://github.com/typescript-package">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=150&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    title="A collection of TypeScript packages for precise, type-safe development."
  />
</a>

## typedly/check

<!-- npm badge -->
[![npm version][typedly-npm-badge-svg]][typedly-npm-badge]
[![GitHub issues][typedly-badge-issues]][typedly-issues]
[![GitHub license][typedly-badge-license]][typedly-license]

A **lightweight TypeScript** type definitions library for type comparison.

## Table of contents

- [Definitions](#definitions)
- [Installation](#installation)
- [Api](#api)
  - Type
    - [`Assignable`](#assignable)
    - [`Equal`](#equal)
    - [`ExactEqual`](#equal)
    - [`Mutual`](#mutual)
    - [`Same`](#same)
    - **Strict**
      - [`StrictAssignable`](#strictassignable)
      - [`StrictEqual`](#strictequal)
      - [`StrictMutual`](#strictmutual)
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)

### Definitions

**Boolean Ambiguity Prevention:**

- Ensures that type check returns a definite `true` or `false` result, instead of `boolean` especially seen in cases involving union types or complex conditions.
- When we use conditional types, like `A extends B ? (B extends A ?  true : false) : false`, it could lead to ambiguous results in certain scenarios, especially with unions.

**Distributive Equality:**

- It can be seen by using union type as the type parameter.
- Distributive equality occurs when a type equality check is performed across each member of a union type.
- If either or both of the types being compared are union types, the comparison is distributed over each individual member of the union.

Example:

`number | string` being checked against `string | number` will check `number` against `string`, `number` against `number`, `string` against `string`, and `string` against `number`.

**Structural Equality:**

- Ensures that two types have the exact same structure, including properties, types, and the order of those properties (in the case of objects).
- Unlike subtype compatibility, where one type can be a more general form of another, structural equality requires that the types are identical in structure.

Example:

`{ a: number; b: string }` and `{ b: string; a: number }` are structurally equal.

**Strict Equality:**

- Enforced using the tuple `[A]` and `[B]`.
- Disallows subtype/supertype compatibility.
- Both types need to have the same properties, the same number of properties, and the same order of properties.

Example:

`[1, 2]` is strictly equal to `[1, 2]`, but not to `[2, 1]`. `number | string` is not strictly equal to `string | number` when using a non distributing equality check.

> [!NOTE]
> It seems TypeScript's type system currently doesn't support full strict object equality (including key order) directly.
> If you're working with objects, you can check for strict structure, but not necessarily key order or exact value assignment without additional constraints or custom logic.

## Installation

```bash
npm install @typedly/check --save-peer
```

## Api

```typescript
import {
  Assignable, DistributiveAssignable, Inclusion,
  Compatible, StrictAssignable, StructuralAssignable,
  Equal, DistributiveEqual,
  Mutual, BooleanDistributiveEqual,
  Same, StrictlySame,
  StrictEqual, StructuralEqual,
  StrictMutual, MutualAssignable,
} from '@typedly/check';
```

### `Assignable`

Checks whether `A` can be assigned to `B` or vice versa, returning `true` if either condition is met, otherwise `false`.

- Checks if **one type includes another**.
- Checks if any member of `A` is assignable to `B` or vice versa.
- Handles distribution over unions (distributive check).
- Allows **subtype/supertype compatibility**.
- Supports **partial compatibility**, not requiring exact structure alignment.

```typescript
import { Assignable } from '@typedly/check';

// Union.
export type UnionExample1 = Assignable<"a" | "b", "a">;  // boolean
export type UnionExample2 = Assignable<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = Assignable<'a' | 'b', 'a' | 'b'>; // true
export type UnionExample4 = Assignable<string | number, number | string>; // true
export type UnionExample5 = Assignable<number | string, number | string>; // true
```

[More examples](https://github.com/typedly/check/blob/main/src/test/assignable.spec.ts)

### `Equal`

Determines if `A` and `B` are **structurally identical** by ensuring both `A extends B` and `B extends A`.

- Ensures **every** member of `A` is assignable to `B` and vice versa.
- **Does not** ensure full correctness due to potential `boolean` ambiguity with union types.
- Disallows **subtype/supertype compatibility** by requiring exact structural equality.

```typescript
import { Equal } from '@typedly/check';

// Union.
export type UnionExample1 = Equal<"a" | "b", "a">;  // boolean
export type UnionExample2 = Equal<'a' | 'b', 'b' | 'a'>; // boolean
export type UnionExample3 = Equal<'a' | 'b', 'a' | 'b'>; // boolean
export type UnionExample4 = Equal<string | number, number | string>; // boolean
export type UnionExample5 = Equal<number | string, number | string>; // boolean
```

[More examples](https://github.com/typedly/check/blob/main/src/test/equal.spec.ts)

### `ExactEqual`

```typescript
import { ExactEqual } from '@typedly/check';

// Union.
// The difference between `StrictEqual` / `Equal` / `ExactEqual`
export type UnionExample1 = ExactEqual<"a" | "b", "a">;  // false / boolean / false
export type UnionExample2 = ExactEqual<'a' | 'b', 'b' | 'a'>; // true / boolean / true
export type UnionExample3 = ExactEqual<'a' | 'b', 'a' | 'b'>; // true / boolean / true
export type UnionExample4 = ExactEqual<string | number, number | string>; // true / boolean / true
export type UnionExample5 = ExactEqual<number | string, number | string>; // true / boolean / true
```

[More examples](https://github.com/typedly/check/blob/main/src/test/exact-equal.spec.ts)

### `Mutual`

Determines if two types `A` and `B` are **mutually** equal preventing `boolean` ambiguity.

- Checks if **every** member of `A` is assignable to `B` and vice versa.
- **Ensures** a **definite `true` or `false` result**, avoiding `boolean` ambiguity in union types.
- Handles distribution over unions, ensuring correctness in cases like `A | B`. (distributive check)
- **Structural equality check** — requires the exact same structure, not just subtype compatibility.

```typescript
import { Mutual } from '@typedly/check';

// Union.
export type UnionExample1 = Mutual<"a" | "b", "a">;  // false
export type UnionExample2 = Mutual<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = Mutual<'a' | 'b', 'a' | 'b'>; // true
export type UnionExample4 = Mutual<string | number, number | string>; // true
export type UnionExample5 = Mutual<number | string, number | string>; // true
```

[More examples](https://github.com/typedly/check/blob/main/src/test/mutual.spec.ts)

### `Same`

Ensures exact equality by strictly **comparing function return types**.

```typescript
import { Same } from '@typedly/check';

// Union.
export type UnionExample1 = Same<"a" | "b", "a">;  // false
export type UnionExample2 = Same<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = Same<'a' | 'b', 'a' | 'b'>; // true
export type UnionExample4 = Same<string | number, number | string>; // true
export type UnionExample5 = Same<number | string, number | string>; // true
```

[More examples](https://github.com/typedly/check/blob/main/src/test/same.spec.ts)

### `StrictAssignable`

Checks whether `A` can be strictly(by using tuple wrapping) assigned to `B` or vice versa, returning `true` if either condition is met, otherwise `false`.

```typescript
import { StrictAssignable } from '@typedly/check';

// Union.
export type UnionExample1 = StrictAssignable<"a" | "b", "a">;  // true
export type UnionExample2 = StrictAssignable<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = StrictAssignable<'a' | 'b', 'a' | 'b'>; // true
export type UnionExample4 = StrictAssignable<string | number, number | string>; // true
export type UnionExample5 = StrictAssignable<number | string, number | string>; // true
```

[More examples](https://github.com/typedly/check/blob/main/src/test/strict-assignable.spec.ts)

### `StrictEqual`

Determines if two types `A` and `B` are **strictly** equal.

- Ensures both types mutually extend each other: it checks if **every** member of `A` is assignable to `B` **and every** member of `B` is assignable to `A`.
- **Ensures** a **definite `true` or `false` result**, avoiding `boolean` ambiguity.
- **Prevents distribution behavior**: no distribution over unions.
- **Strict(by using tuple)** structural(both direction): Ensures exact structural equality in both directions.

```typescript
import { StrictEqual } from '@typedly/check';

// Union.
// The difference between Equal and StrictEqual
export type UnionExample1 = StrictEqual<"a" | "b", "a">;  // false instead of boolean
export type UnionExample2 = StrictEqual<'a' | 'b', 'b' | 'a'>; // true instead of boolean
export type UnionExample3 = StrictEqual<'a' | 'b', 'a' | 'b'>; // true instead of boolean
export type UnionExample4 = StrictEqual<string | number, number | string>; // true instead of boolean
export type UnionExample5 = StrictEqual<number | string, number | string>; // true instead of boolean
```

[More examples](https://github.com/typedly/check/blob/main/src/test/strict-equal.spec.ts)

### `StrictMutual`

Determines if two types `A` and `B` are **strictly and mutually** equal.

- Ensures that both types mutually extend each other: Checks if **every** member of `A` is assignable to `B` **and every** member of `B` is assignable to `A`.
- **Guarantees** a **definite `true` or `false` result**, avoiding `boolean` ambiguity.
- **Prevents distribution behavior**: no distribution over unions.
- **Strict(by using tuple)** structural(both direction): Ensures exact structural equality in both directions.

```typescript
import { StrictMutual } from '@typedly/check';

// Union.
export type UnionExample1 = StrictMutual<"a" | "b", "a">;  // false
export type UnionExample2 = StrictMutual<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = StrictMutual<'a' | 'b', 'a' | 'b'>; // true
export type UnionExample4 = StrictMutual<string | number, number | string>; // true
export type UnionExample5 = StrictMutual<number | string, number | string>; // true
```

[More examples](https://github.com/typedly/check/blob/main/src/test/strict-mutual.spec.ts)

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- [Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][typedly-license])

## Packages

- **[@typedly/array](https://github.com/typedly/array)**: A **TypeScript** type definitions package to handle array-related operations.
- **[@typedly/character](https://github.com/typedly/character)**: A **TypeScript** type definitions package for various character types.
- **[@typedly/context](https://github.com/typedly/context)**: A **TypeScript** type definitions package for context data structures.
- **[@typedly/descriptor](https://github.com/typedly/descriptor)**: A **TypeScript** type definitions package for property descriptor.
- **[@typedly/digit](https://github.com/typedly/digit)**: A **TypeScript** type definitions package for digit types.
- **[@typedly/letter](https://github.com/typedly/letter)**: A **TypeScript** type definitions package for handling letter types.
- **[@typedly/object](https://github.com/typedly/object)**: A **TypeScript** type definitions package to handle object-related operations.
- **[@typedly/payload](https://github.com/typedly/payload)**: A **TypeScript** type definitions package for payload data structures.
- **[@typedly/property](https://github.com/typedly/property)**: A **TypeScript** type definitions package to handle object property-related operations.
- **[@typedly/regexp](https://github.com/typedly/regexp)**: A **TypeScript** type definitions package for `RegExp`.
- **[@typedly/symbol](https://github.com/typedly/symbol)**: A **TypeScript** type definitions package for various symbols.

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [typedly-badge-issues]: https://img.shields.io/github/issues/typedly/check
  [typedly-badge-forks]: https://img.shields.io/github/forks/typedly/check
  [typedly-badge-stars]: https://img.shields.io/github/stars/typedly/check
  [typedly-badge-license]: https://img.shields.io/github/license/typedly/check
  <!-- GitHub: badges links -->
  [typedly-issues]: https://github.com/typedly/check/issues
  [typedly-forks]: https://github.com/typedly/check/network
  [typedly-license]: https://github.com/typedly/check/blob/master/LICENSE
  [typedly-stars]: https://github.com/typedly/check/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [typedly-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Fproject.svg
  [typedly-npm-badge]: https://badge.fury.io/js/@typedly%2Fproject

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
