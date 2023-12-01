Typescript - session.0

### Agenda:

1. Introduction of the Typescript.
2. Comparison with Javascript.
3. Typescript as Javascript+.
4. Pros. Cons and Trade-offs.
5. QnA

---

###Introduction of the Typescript.

- TypeScript offers all of JavaScript’s features + TypeScript’s type system.

- The main benefit of TypeScript is that it can highlight unexpected behavior in your code, **lowering the chance of bugs**

### Comparison with Javascript.

### Typescript as Javascript+.

### Pros. Cons and Trade-offs.

> Pros

#### Static Typing:

**Type Safety**: TypeScript introduces static typing, allowing developers to define types for variables, function parameters, and return values. This helps catch type-related errors during development rather than at runtime.

#### Enhanced Code Quality:

**Better Tooling Support**: Static typing enables more advanced tooling, including code completion, intelligent suggestions, and better refactoring support in integrated development environments (IDEs).

**Reduced Bugs**: The ability to catch type-related errors early in the development process leads to more robust and bug-free code.

#### Improved Maintainability:

**Readability and Documentation**: Type annotations serve as documentation, making the code more readable and self-explanatory. Developers can understand the expected types without extensive comments.
**Refactoring**: With TypeScript's strong typing, refactoring becomes safer and more straightforward. Renaming variables or changing function signatures can be done confidently.

#### Modern ECMAScript Features:

**Compatibility**: TypeScript supports the latest ECMAScript features, allowing developers to write modern JavaScript code. The TypeScript compiler then transpiles the code to an older version of JavaScript if needed.

#### Object-Oriented Programming (OOP) Features:

**Interfaces and Classes**: TypeScript introduces interfaces and class-based object-oriented programming features, making it more suitable for large-scale applications with a structured and modular codebase.

#### Enhanced Development Experience

**Code Navigation**: IDEs that support TypeScript offer advanced code navigation features, allowing developers to quickly jump between definitions, find references, and explore the project structure more efficiently.
**Code Completion**: TypeScript enables better code completion, helping developers write code faster and with fewer errors.
Strong Ecosystem and Community:

#### Large Developer Community:

TypeScript has a large and active developer community. Many popular libraries and frameworks, including Angular and NestJS, are written in TypeScript or provide TypeScript typings.
**Declaration Files**: TypeScript allows the use of declaration files (\*.d.ts), which provide type information for existing JavaScript libraries, enabling seamless integration.

#### Gradual Adoption:

**Existing JavaScript Code**: TypeScript is designed to be compatible with existing JavaScript code. Developers can gradually adopt TypeScript by adding type annotations to their JavaScript codebase incrementally.

**Code Quality Tools**:
TSLint and ESLint Integration: TypeScript supports TSLint for code quality checks, and it can also be integrated with ESLint for additional linting capabilities.

> Cons

#### Learning Curve

**Complexity**: For developers who are new to TypeScript or come from a JavaScript background, there is a learning curve associated with understanding and embracing TypeScript's additional features, especially static typing.

##### Build Process Overhead:

**Build Step Required**: TypeScript code needs to be transpiled into JavaScript before it can run in the browser or on a Node.js server. This additional build step introduces complexity and may slightly slow down the development workflow.
Tooling Overhead:

**IDE and Editor Support**: While TypeScript has excellent support in many integrated development environments (IDEs) and editors, setting up and configuring the tools may require additional effort compared to working with plain JavaScript.
Runtime Overhead:

**Runtime Type Information (RTTI)**: TypeScript's type information is only available at compile time and is erased during transpilation. This means that type information is not available at runtime, which may limit certain runtime features and checks.
Potential Overuse of Types:

**Over-Engineering**: There is a risk of over-engineering or adding excessive type annotations to the code, especially in cases where the benefits of strong typing are not significant. This can lead to increased code verbosity.

**Compatibility with JavaScript Ecosystem**: Library and Module Support: While TypeScript has a wide range of declaration files for popular libraries, some JavaScript libraries may not have TypeScript typings available. This can result in less type-safe integrations.

#### Increased Boilerplate Code:

**Type Annotations**: Adding type annotations to variables, functions, and interfaces can sometimes lead to more verbose code, particularly in cases where the types are complex or involve generics.

#### Tooling Dependency:

**Dependency on TypeScript Compiler**: Projects using TypeScript depend on the TypeScript compiler (tsc). Any issues or limitations in the compiler may impact the development workflow and the ability to adopt new ECMAScript features.

##### Community Fragmentation:

**Divergence in Practices**: While TypeScript has a growing and vibrant community, there might be divergent practices and opinions on certain features, leading to different approaches and coding styles.
Adoption in Legacy Projects:

**Migration Challenges**: Integrating TypeScript into an existing JavaScript project or a large legacy codebase can pose challenges. Migrating existing code to TypeScript might require significant effort.

### QnA
