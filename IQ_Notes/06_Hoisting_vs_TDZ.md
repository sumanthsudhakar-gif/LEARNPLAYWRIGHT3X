# Hoisting vs TDZ — Why `var` "Works" and `let` Throws

**Hoisting** and the **Temporal Dead Zone (TDZ)** are two sides of the same mechanism: JavaScript's two-pass behavior when it enters a scope. Hoisting is what *does* happen for all declarations; the TDZ is the *window of time* where `let`/`const` exist but aren't usable yet.

---

## 1. The Comparison Table

| Aspect | Hoisting | Temporal Dead Zone (TDZ) |
|--------|----------|--------------------------|
| **What it is** | The engine **moves declarations to the top** of their scope at compile time | The **time gap** between a binding entering scope and its initialization |
| **Applies to** | `var`, `function`, `class`*, `let`, `const` (all declarations are hoisted) | Only `let` and `const` (and `class`*) |
| **Value before its line** | `var` → `undefined`; `function` → the full function | ❌ **ReferenceError** — the binding exists but is uninitialized |
| **Can you touch it early?** | ✅ Yes (`undefined` for `var`, callable for functions) | ❌ No — throws `ReferenceError: Cannot access 'x' before initialization` |
| **Why it exists** | JavaScript's original design — "call functions from anywhere" | A safety net — catch use-before-initialize bugs at runtime |
| **Relationship** | The mechanism (declarations get processed first) | A *consequence* of hoisting for block-scoped bindings |

> \* `class` declarations are hoisted but land in the TDZ — you can't `new` a class before its line. `var` is hoisted **and initialized** to `undefined`; `let`/`const` are hoisted **but left uninitialized**.

---

## 2. Breakdown: What Actually Happens at Each Phase

Every scope goes through **two phases**:

| Phase | What the engine does | `var x` | `let y` |
|-------|---------------------|---------|---------|
| **1. Creation (compile)** | Scans for declarations, registers names, allocates memory | Slot created, **initialized to `undefined`** | Slot created, **left uninitialized** ⚠️ |
| **2. Execution (runtime)** | Runs code line by line, assignments happen | `x` is readable (it's `undefined`) | `y` sits in the **TDZ** until its declaration line runs |
| At its own declaration line | Assignment executes | value set | value set → **TDZ ends** |

```
Enter scope
   │
   ├─► var x          → memory allocated, initialized to undefined  ✅ usable
   ├─► let y          → memory allocated, NOT initialized           ⚠️ TDZ starts
   │
   │   ...execution runs, line by line...
   │
   └─► let y line runs → y is initialized                           ✅ TDZ ends
```

The name **Temporal** Dead Zone is the key: it's *time-based*, not location-based. `y` isn't unusable because of where it appears in the code — it's unusable until the *moment in time* when its initializer runs.

---

## 3. Example Walkthrough

**Scenario 1: `var` — hoisted and pre-initialized**

```js
console.log(x);        // undefined  (no error!)
var x = 10;
console.log(x);        // 10
```

The engine actually sees this as:

```js
var x;                 // hoisted + initialized to undefined
console.log(x);        // undefined
x = 10;
console.log(x);        // 10
```

**Scenario 2: `let` — hoisted but in the TDZ**

```js
console.log(y);        // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

The engine *does* hoist the declaration (the memory slot exists) — but the slot is empty until line 2 runs. Line 1 touches an uninitialized binding → **TDZ violation** → throw.

**Scenario 3: the classic `var` loop bug vs `let` fix**

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i));   // 3, 3, 3
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j));   // 0, 1, 2
}
```

Why? `var` creates **one** hoisted binding shared by all three callbacks (they all read the final value `3`). Each `let` iteration gets its **own fresh binding** — each callback closes over a different `j`.

---

## 4. Quick Reference: What Throws and What Doesn't

| Code | Result | Reason |
|------|--------|--------|
| `console.log(x)` before `var x = 10` | `undefined` | `var` hoisted **and** initialized |
| `f()` before `function f() {}` | Runs fine | function declaration fully hoisted |
| `console.log(y)` before `let y = 10` | **ReferenceError** | `y` is in the TDZ |
| `new C()` before `class C {}` | **ReferenceError** | `class` is hoisted but TDZ'd |
| `typeof z` before `let z` | **ReferenceError** | TDZ throws even for `typeof` (the one case where `typeof` can throw!) |
| `typeof w` before `var w` | `undefined` | `var` hoisting wins |

> ⚠️ Gotcha: `typeof` is normally safe on undeclared names (`typeof q` → `"undefined"`), but it **throws** on a TDZ'd `let`/`const`. That's a classic interview trap.

---

## 5. Pipeline: The Life of a `let` Variable

```
Source code
   │
   ▼
Creation phase:  engine finds "let y" → reserves a slot, leaves it EMPTY  ⚠️ TDZ active
   │
   ▼
Execution:       line 1: console.log(y)  → reads empty slot → ReferenceError 🔥
   │
   ▼ (if no early access)
Execution:       line N: let y = 10      → slot filled → TDZ over ✅
   │
   ▼
Rest of scope:   y is a normal, readable variable
```

---

## 6. Why It Matters in Interviews (and Code)

| Question | Answer |
|----------|--------|
| "Are `let`/`const` hoisted?" | **Yes** — but they're hoisted into the TDZ. The declaration is processed; the initialization isn't. |
| "Hoisting vs TDZ in one sentence?" | Hoisting is *"declarations move up"*; the TDZ is *"`let`/`const` stay frozen until their line runs."* |
| "Why does `var` not throw?" | `var` is hoisted **with** an `undefined` initialization baked in; `let`/`const` are hoisted **without** one. |
| "How do I avoid TDZ errors?" | Always declare with `let`/`const` **before** first use; keep declarations near the top of their block. |

---

## TL;DR
- **Hoisting** = all declarations (`var`, `let`, `const`, `function`, `class`) are processed before code runs.
- **`var`** is hoisted **+ initialized to `undefined`** → reading it early gives `undefined`, no error.
- **`let`/`const`** are hoisted **+ left uninitialized** → reading them early hits the **TDZ** → `ReferenceError`.
- The TDZ is **time-based**: it lasts from scope entry until the binding's initializer executes.
- Function declarations are the most useful case of hoisting: call them anywhere in their scope.
