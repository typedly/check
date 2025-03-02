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

```typescript
import { Assignable } from '@typedly/check';

// Union.
export type UnionExample1 = Assignable<"a" | "b", "a">;  // boolean
export type UnionExample2 = Assignable<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = Assignable<'a' | 'b', 'a' | 'b'>; // true
export type UnionExample4 = Assignable<string | number, number | string>; // true
export type UnionExample5 = Assignable<number | string, number | string>; // true
```

### `Equal`

```typescript
import { Equal } from '@typedly/check';

// Union.
export type UnionExample1 = Equal<"a" | "b", "a">;  // boolean
export type UnionExample2 = Equal<'a' | 'b', 'b' | 'a'>; // boolean
export type UnionExample3 = Equal<'a' | 'b', 'a' | 'b'>; // boolean
export type UnionExample4 = Equal<string | number, number | string>; // boolean
export type UnionExample5 = Equal<number | string, number | string>; // boolean
```

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

### `Mutual`

```typescript
import { Mutual } from '@typedly/check';

// Union.
export type UnionExample1 = Mutual<"a" | "b", "a">;  // false
export type UnionExample2 = Mutual<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = Mutual<'a' | 'b', 'a' | 'b'>; // true
export type UnionExample4 = Mutual<string | number, number | string>; // true
export type UnionExample5 = Mutual<number | string, number | string>; // true
```

### `Same`

```typescript
import { Same } from '@typedly/check';

// Union.
export type UnionExample1 = Same<"a" | "b", "a">;  // false
export type UnionExample2 = Same<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = Same<'a' | 'b', 'a' | 'b'>; // true
export type UnionExample4 = Same<string | number, number | string>; // true
export type UnionExample5 = Same<number | string, number | string>; // true
```

### `StrictAssignable`

```typescript
import { StrictAssignable } from '@typedly/check';

// Union.
export type UnionExample1 = StrictAssignable<"a" | "b", "a">;  // true
export type UnionExample2 = StrictAssignable<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = StrictAssignable<'a' | 'b', 'a' | 'b'>; // true
export type UnionExample4 = StrictAssignable<string | number, number | string>; // true
export type UnionExample5 = StrictAssignable<number | string, number | string>; // true
```

### `StrictEqual`

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

### `StrictMutual`

```typescript
import { StrictMutual } from '@typedly/check';

// Union.
export type UnionExample1 = StrictMutual<"a" | "b", "a">;  // false
export type UnionExample2 = StrictMutual<'a' | 'b', 'b' | 'a'>; // true
export type UnionExample3 = StrictMutual<'a' | 'b', 'a' | 'b'>; // true
export type UnionExample4 = StrictMutual<string | number, number | string>; // true
export type UnionExample5 = StrictMutual<number | string, number | string>; // true
```

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
