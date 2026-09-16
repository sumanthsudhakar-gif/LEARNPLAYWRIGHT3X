# Keyword Notes

A **keyword** in JavaScript is a reserved word that has a special, predefined meaning in the language. Keywords cannot be used as variable names, function names, or identifiers because the language engine interprets them differently.

---

## JavaScript Keywords — Full Breakdown

### 1. Variable Declaration Keywords

| Keyword | Scope | Reassignable? | Redeclarable? | Hoisted? | Initialization |
|---------|-------|--------------|--------------|---------|---------------|
| `let` | Block | ✅ Yes | ❌ No (in same scope) | ✅ Hoisted but **TDZ** | Optional |
| `const` | Block | ❌ No | ❌ No (in same scope) | ✅ Hoisted but **TDZ** | **Mandatory** |
| `var` | Function | ✅ Yes | ✅ Yes | ✅ Hoisted (as `undefined`) | Optional |

> **TDZ** = Temporal Dead Zone — accessing the variable before declaration throws a `ReferenceError`.

---

### 2. Control Flow — Looping

| Keyword | Purpose | Example Pattern |
|---------|---------|----------------|
| `for` | Loop with init/condition/increment | `for (let i=0; i<5; i++)` |
| `while` | Loop while condition is true | `while (x < 10)` |
| `do` | Execute once, then loop while true | `do { ... } while (cond)` |
| `break` | Exit loop/switch immediately | Inside any loop or `switch` |
| `continue` | Skip to next iteration | Inside any loop |
| `in` | Iterate object keys | `for (let key in obj)` |
| `of` | Iterate iterable values | `for (let val of arr)` |

---

### 3. Control Flow — Conditional

| Keyword | Role |
|---------|------|
| `if` | Execute block if condition is truthy |
| `else` | Execute block when preceding `if` was false |
| `switch` | Multi-way branch on an expression |
| `case` | A value clause inside `switch` |
| `default` | Fallback clause in `switch` or default `export` |

---

### 4. Function & Execution

| Keyword | What It Does |
|---------|-------------|
| `function` | Declares a function (hoisted) |
| `return` | Exits function and optionally sends a value back |
| `async` | Marks a function as asynchronous (returns a Promise) |
| `await` | Pauses `async` function until a Promise settles |
| `yield` | Pauses/resumes a generator function |
| `*` | Generator function indicator |

---

### 5. Object-Oriented (Class)

| Keyword | Role |
|---------|------|
| `class` | Declares a class |
| `new` | Creates an instance of a class / constructor function |
| `this` | Refers to the current execution context (object) |
| `super` | Calls parent class constructor or method |
| `extends` | Inherits from a parent class |
| `static` | Defines a static method/property (on class itself) |
| `get` | Binds a property to a getter function |
| `set` | Binds a property to a setter function |
| `constructor` | Special method for creating/initializing an object instance |

---

### 6. Error Handling

| Keyword | Role |
|---------|------|
| `try` | Wrap code that may throw an error |
| `catch` | Handle the error if thrown |
| `finally` | Always execute (whether error or not) |
| `throw` | Manually throw/custom error |

---

### 7. Modules

| Keyword | Role |
|---------|------|
| `import` | Bring in exported bindings from another module |
| `export` | Expose bindings to other modules |
| `from` | Specify the module path in `import` |
| `as` | Rename during import/export |

---

### 8. Type & Value Keywords

| Keyword | What It Evaluates To / Does |
|---------|----------------------------|
| `true` | Boolean `true` literal |
| `false` | Boolean `false` literal |
| `null` | Intentional absence of any object value |
| `undefined` | Variable declared but not assigned |
| `typeof` | Returns a string of the operand's type |
| `instanceof` | Checks if object is an instance of a constructor |
| `void` | Evaluates expression and returns `undefined` |

---

### 9. Other Keywords

| Keyword | Role |
|---------|------|
| `delete` | Removes a property from an object |
| `debugger` | Invokes any available debugging functionality |
| `with` | Extends the scope chain (❌ deprecated / strict-mode illegal) |

---

## Quick Reference — ES6+ Additions

| Keyword | ES Version | New In |
|---------|-----------|--------|
| `let` | ES6 (2015) | Block-scoped variable |
| `const` | ES6 (2015) | Block-scoped constant |
| `class` | ES6 (2015) | Class syntax |
| `import`/`export` | ES6 (2015) | Module system |
| `async`/`await` | ES8 (2017) | Async/await syntax |
| `of` | ES6 (2015) | `for...of` loops |
| `static`, `get`, `set` | ES6 (2015) | Class features |

---

## Pipeline: How JavaScript Processes Keywords

```
Source Code
    ↓
Lexical Analysis (Tokenization)
    ↓   Keywords are recognized as tokens (not identifiers)
Parser
    ↓   Keywords form the grammar structure (AST)
Execution Engine
    ↓   Keywords tell the engine what actions to take
Output
```

---

## TL;DR
- **Keywords** = reserved words with built-in meaning (you can't use them as variable names)
- ~40 reserved keywords in modern JS (ES6+)
- Categorized into: variables, loops, conditionals, functions, classes, error handling, modules, type operators
- `let`/`const` (block-scoped) > `var` (function-scoped) — use `const` by default, `let` when reassignment is needed
