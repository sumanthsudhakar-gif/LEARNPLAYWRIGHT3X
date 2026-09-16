# Identifier Rules

An **identifier** is a name given to a variable, function, class, property, or label so it can be referenced in code. JavaScript has strict rules about what makes a valid identifier.

---

## Core Rules

| Rule | Details | Valid Example | Invalid Example |
|------|---------|---------------|-----------------|
| **Allowed characters** | Letters (`a-z`, `A-Z`), digits (`0-9`), underscore (`_`), dollar sign (`$`) | `myVar`, `_temp`, `$root` | `my-var` (hyphen) |
| **Cannot start with a digit** | Must begin with a letter, `_`, or `$` | `_1value` | `1value` |
| **Case-sensitive** | `Name` and `name` are different identifiers | `count`, `Count` | N/A — both are valid but distinct |
| **No reserved keywords** | Cannot use JavaScript keywords as identifiers | `userName` | `let`, `const`, `class` |
| **Unicode support** | ES6+ allows Unicode letters (e.g., accents, Greek, Cyrillic) | `const π = 3.14` | N/A |

---

## Allowed Characters Breakdown

| Character Type | Can Use? | Examples |
|---------------|----------|----------|
| `a–z` (lowercase) | ✅ Yes | `myvariable` |
| `A–Z` (uppercase) | ✅ Yes | `MyVariable` |
| `0–9` (digits) | ✅ Yes (not as first char) | `var1`, `data2` |
| `_` (underscore) | ✅ Yes (any position) | `_private`, `__proto__`, `my_var` |
| `$` (dollar) | ✅ Yes (any position) | `$elem`, `jQuery`, `$$$` |
| Unicode letters (é, ü, ñ, Ω, π) | ✅ Yes (ES5+) | `const ñ = 1`, `let α = 0.5` |
| `-` (hyphen) | ❌ No | `my-var` |
| Space | ❌ No | `my var` |
| `@`, `#`, `%`, `&`, `*`, `!` | ❌ No | `my@var` |

---

## Reserved Keywords You CANNOT Use as Identifiers

### Cannot use as variable, function, or class names

| Category | Keywords |
|----------|----------|
| **Variables/Declaration** | `let`, `const`, `var` |
| **Control Flow** | `if`, `else`, `switch`, `case`, `default`, `break`, `continue` |
| **Loops** | `for`, `while`, `do`, `in`, `of` |
| **Functions** | `function`, `return`, `async`, `await`, `yield` |
| **Classes/Objects** | `class`, `new`, `this`, `super`, `extends`, `static`, `get`, `set` |
| **Error Handling** | `try`, `catch`, `finally`, `throw` |
| **Modules** | `import`, `export`, `from`, `as` |
| **Type/Value** | `typeof`, `instanceof`, `void`, `delete`, `true`, `false`, `null`, `undefined` |
| **Other** | `debugger`, `with` |

---

## Future Reserved Keywords

These are reserved for potential future use (in strict mode):

| Strict Mode Only | Context |
|-----------------|---------|
| `implements` | Interface (future class feature) |
| `interface` | Interface (future class feature) |
| `package` | Package/module (future) |
| `private` | Private class fields |
| `protected` | Protected class fields |
| `public` | Public class fields |
| `static` | Already in use from ES6 |

---

## Naming Conventions (Not Rules, But Strongly Followed)

| Convention | Pattern | Example | When To Use |
|-----------|---------|---------|-------------|
| **camelCase** | Starts lowercase, each word uppercase | `userName`, `getData()` | Variables, functions, methods |
| **PascalCase** | Every word starts uppercase | `UserProfile`, `HttpClient` | Classes, constructors, components |
| **UPPER_SNAKE_CASE** | All caps, words separated by `_` | `MAX_SIZE`, `API_URL` | Constants, environment variables |
| **\_prefix** | Underscore at start | `_privateVar`, `_internal()` | "Private" / internal-only (convention) |
| **$prefix** | Dollar sign at start | `$element`, `$scope` | jQuery / Angular conventions |

---

## Comparison: Valid vs Invalid Identifiers

| Identifier | Valid? | Reason |
|-----------|--------|--------|
| `name` | ✅ | Simple, starts with letter |
| `userName` | ✅ | camelCase |
| `_temp` | ✅ | Underscore prefix allowed |
| `$root` | ✅ | Dollar sign allowed |
| `firstName123` | ✅ | Digits at end allowed |
| `π` | ✅ | Unicode letter (valid in ES5+) |
| `class` | ❌ | Reserved keyword |
| `123abc` | ❌ | Starts with digit |
| `my-var` | ❌ | Hyphen not allowed |
| `my var` | ❌ | Space not allowed |
| `let` | ❌ | Reserved keyword |

---

## Pipeline: How JavaScript Validates Identifiers

```
Source Code
    ↓
Lexer (Tokenization)
    ↓   Checks: valid characters? starts with letter/_/$? not a keyword?    
If All Checks Pass → Tokenized as Identifier
    ↓
Parser → AST Node (VariableDeclaration, FunctionDeclaration, etc.)
    ↓
Execution → Memory allocated for identifier
```

---

## TL;DR
- An **identifier** is a name you give to variables, functions, classes, etc.
- **Allowed characters:** letters, digits (not first), `_`, `$`, Unicode
- **Cannot** start with a digit or be a reserved keyword
- **Case-sensitive** — `name` and `Name` are different
- **Conventions:** `camelCase` for variables/functions, `PascalCase` for classes, `UPPER_SNAKE` for constants
