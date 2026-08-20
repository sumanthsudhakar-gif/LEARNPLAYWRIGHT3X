# JavaScript Fundamentals — Learning Path

This project covers **core JavaScript concepts** across multiple chapters. Below is the full breakdown of every JS topic, file, and directory.

---

## Chapter Map

| Chapter | Topics | Files |
|---------|--------|-------|
| **01_Chapter_JavaScript** | Hello World, `let` scoping, loops, conditionals | 7 files |
| **03_Chapter_Identifier** | Identifier rules, naming conventions, comments, interview Q&A | 4 files |
| **04_Chapter_Literal** | Literals, `null` vs `undefined`, Numbers (Hex/Octal/BigInt), `typeof` | 6 files |
| **05_Chapter_Operator** | Increment, Null Coalescing, String Concatenation, Ternary | 4 files |
| **IQ_Notes** | In-depth concept notes + interview prep | 5 markdown files |

---

## 01_Chapter_JavaScript — Getting Started

| File | Concept |
|------|---------|
| `01_Helloworld.js` | First JS program — `console.log()` |
| `02_let_concept.js` | Block scoping with `let` in `for` loops |
| `03_0723_Q1` | Quiz: `for` loop with semicolon + `i < NaN` |
| `05_0723_Q3` | Quiz: `do-while` with post-decrement `i--` |
| `If_Statement.js` | `if/else` — voting age check |
| `If_Statement_Marks` | Grading with `if/else if/else` (AA–FF) |
| `Q4_0723_Q2` | Quiz: infinite loop with `while (i < NaN)` |

---

## 03_Chapter_Identifier — Names & Rules

| File | Concept |
|------|---------|
| `03_Identifier_Rules.js` | Valid identifiers — `$`, `_`, letters, digits |
| `04_Identifier_Rules_Part2.js` | Naming conventions: camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE |
| `05_Comments.js` | Single-line `//`, multi-line `/* */`, JSDoc `/** */` |
| `06_Identifier_IQ.js` | Interview Q&A: valid identifiers, keyword restrictions, naming conventions |

---

## 04_Chapter_Literal — Values & Types

| File | Concept |
|------|---------|
| `07_Literal.js` | String, Boolean, Number, Null literals + `typeof` |
| `08_null_undefined.js` | `undefined` vs `null` — declared but unassigned vs intentionally empty |
| `09_Null_IQ.js` | Null assignment example |
| `10_Literal.js` | Integer (`10`), Float (`-9.99`), Hex (`0xFF`), Octal (`0o77`) |
| `11_Number.js` | Scientific notation (`1.23e4`), trailing dot (`5.`) |
| `12_Number_Part2.js` | **BigInt** (`123n`), **Infinity**, **NaN**, `typeof NaN` |

---

## 05_Chapter_Operator — Expressions

| File | Concept |
|------|---------|
| `18_Increment` | Pre-increment vs post-increment — `++i` vs `i++` |
| `19_Null_Coalescing.js` | Nullish coalescing `??` — defaults for `null`/`undefined` |
| `21_String_Op.js` | String concatenation `+` / `+=` |
| `22_Ternary_Op.js` | Ternary operator `? :` — inline conditionals |

---

## IQ_Notes — Deep Dives & Interview Prep

| File | What It Covers |
|------|----------------|
| `01_Identifier_Rules.md` | Allowed characters, reserved keywords, naming conventions, pipeline diagram, TL;DR |
| `02_Keyword_Notes.md` | `var`/`let`/`const`, loops, control flow, classes, error handling, modules, ES6+ additions, pipeline diagram |
| `Source_Code_ByteCODE_Binary_IQ.md` | Three-layer explanation: Source Code → Bytecode → Binary/Machine Code (V8 internals using `01_Helloworld.js`) |
| `Prompt_Template.md` | Template for requesting concept explanations |

---

## Concepts by Category

| Category | Concepts Covered |
|----------|-----------------|
| **Variables & Scope** | `let` block scoping, `var` vs `let`, naming conventions (camelCase, PascalCase, etc.) |
| **Data Types** | String, Number (int, float, hex, octal, BigInt, Infinity, NaN), Boolean, Null, Undefined |
| **Operators** | Ternary (`? :`), Null Coalescing (`??`), Increment (`++`), String Concatenation (`+`) |
| **Control Flow** | `if/else`, `for`, `while`, `do-while` |
| **Identifiers** | Legal characters, reserved keywords, naming rules |
| **Comments** | `//`, `/* */`, `/** */` (JSDoc) |
| **V8 Internals** | Source Code → Bytecode → Binary/Machine Code pipeline |

---

## How to Use This Repo

1. **Start with** `01_Chapter_JavaScript/` — basics first
2. **Move to** `03_Chapter_Identifier/` — understand naming rules
3. **Then** `04_Chapter_Literal/` — learn the type system
4. **Followed by** `05_Chapter_Operator/` — expressions and operators
5. **Solidify with** `IQ_Notes/` — concept deep dives and interview prep
