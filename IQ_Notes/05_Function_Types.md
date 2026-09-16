# JavaScript Function Types — The Full Catalog

A **function** is a reusable block of code. JavaScript lets you *create* them many ways and *use* them in many roles. This note covers both: **how you write them** (syntax types) and **what job they do** (role types).

---

## 1. How You Write Them (Syntax Types)

| Type | Syntax | Hoisted? | Example |
|------|--------|----------|---------|
| **Function Declaration** | `function name() {}` | ✅ Yes | `function add(a, b) { return a + b; }` |
| **Function Expression** | `const name = function() {}` | ❌ No | `const add = function(a, b) { return a + b; };` |
| **Arrow Function** | `const name = () => {}` | ❌ No | `const add = (a, b) => a + b;` |
| **Method** | Property of an object | ❌ No | `const obj = { add(a, b) { return a + b; } };` |
| **Constructor Function** | `function Name()` + `new` | ✅ Yes | `function Person(n) { this.name = n; }` |
| **Generator Function** | `function* name() {}` | ✅ Yes | `function* count() { yield 1; yield 2; }` |

### Breakdown: The 3 You'll Use 90% of the Time

| Aspect | Function Declaration | Function Expression | Arrow Function |
|--------|---------------------|---------------------|----------------|
| Example | `function add(a, b) { return a + b; }` | `const add = function(a, b) { return a + b; };` | `const add = (a, b) => a + b;` |
| Can be called before its line? | ✅ Yes (hoisted) | ❌ No | ❌ No |
| Has its own `this`? | ✅ Yes | ✅ Yes | ❌ No (inherits outer `this`) |
| Can be used as a constructor (`new`)? | ✅ Yes | ✅ Yes | ❌ No |
| Has `arguments` object? | ✅ Yes | ✅ Yes | ❌ No (use rest `...args`) |
| Best for | Top-level logic | Assigning functions dynamically | Callbacks & one-liners |

---

## 2. What Job They Do (Role Types)

| Role | What It Does | Example |
|------|--------------|---------|
| **Anonymous Function** | A function with **no name** — passed or assigned inline | `scores.map(function(x) { return x + 5; })` |
| **Named Function Expression** | An expression with a name (useful for recursion/debugging) | `const f = function fact(n) { return n <= 1 ? 1 : n * fact(n - 1); };` |
| **IIFE** (Immediately Invoked Function Expression) | Runs **the moment it's defined** — creates a private scope | `(function() { let secret = 42; })();` |
| **Callback Function** | Passed **into another function** to run later | `btn.addEventListener('click', handleClick)` |
| **Higher-Order Function** | A function that **takes or returns** a function | `scores.map(x => x + 5)` — `map` is the HOF |
| **Recursive Function** | Calls **itself** to solve a problem in smaller pieces | `function fact(n) { return n <= 1 ? 1 : n * fact(n - 1); }` |

---

## 3. Example Walkthrough: Same Job, 4 Different Syntaxes

**Task:** double every number in `[2, 4, 6]` → `[4, 8, 12]`

| Style | Code |
|-------|------|
| Function declaration (passed as callback) | `nums.map(function double(x) { return x * 2; })` |
| Anonymous function expression | `nums.map(function(x) { return x * 2; })` |
| Arrow (full body) | `nums.map(x => { return x * 2; })` |
| Arrow (implicit return — no `return` needed) | `nums.map(x => x * 2)` |

All four produce **exactly the same result**: `[4, 8, 12]`. The syntax is a choice; the behavior is identical.

---

## 4. Comparison: Callback vs Higher-Order Function vs IIFE

| Aspect | Callback | Higher-Order Function | IIFE |
|--------|----------|----------------------|------|
| Who calls it? | The function it was passed into | You (and it calls others) | Itself, immediately |
| When does it run? | Later (event, loop, async) | When you invoke it | Instantly, once |
| Purpose | "Do this when X happens" | "Coordinate other functions" | "Run once, hide my variables" |
| Example | `onClick`, `map`, `setTimeout` | `map`, `filter`, `reduce` | Module/scope isolation |

---

## 5. Pipeline: What Happens With `nums.map(x => x * 2)`

```
nums = [2, 4, 6]
   ↓
map() is a HIGHER-ORDER FUNCTION (it accepts a function)
   ↓
The arrow function x => x * 2 is a CALLBACK (it will run later)
   ↓
For each element:
    2 ──► callback(2) ──► 4
    4 ──► callback(4) ──► 8
    6 ──► callback(6) ──► 12
   ↓
Result: [4, 8, 12]
```

One line of code contains **three** function concepts at once: a higher-order function (`map`), a callback (the arrow), and an anonymous function (no name).

---

## 6. Quick Reference: When To Use Which

| Goal | Use |
|------|-----|
| Top-level reusable logic | **Function declaration** |
| Store a function in a variable / pass it around | **Function expression** |
| Short callback, one-liner | **Arrow function** |
| Keep outer `this` (e.g. inside a class/event) | **Arrow function** |
| Need its own `this` / `arguments` | **Function declaration or expression** |
| Run code once and isolate variables | **IIFE** |
| Create objects from a blueprint | **Constructor function** (with `new`) |
| Lazy / one-at-a-time sequence | **Generator function** (`function*`, `yield`) |
| "Do X when event fires" | **Callback** |
| Function that orchestrates other functions | **Higher-order function** |

---

## TL;DR
- **Syntax types:** declaration (hoisted), expression (not hoisted), arrow (no own `this`), method, constructor, generator.
- **Role types:** anonymous, named expression, IIFE, callback, higher-order, recursive.
- **Declaration vs arrow:** declarations are hoisted and have their own `this`; arrows are concise but inherit `this`.
- **Arrow vs expression:** arrows cannot be constructors and have no `arguments` object.
- **`map(x => x * 2)`** shows three concepts at once: higher-order function + callback + anonymous arrow function.
