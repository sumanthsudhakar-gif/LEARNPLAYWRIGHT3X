# Array.map() — The Transform Method

`array.map(callback)` creates a **new array** by running a function on every element of the original array. It transforms data without changing the original.

---

## Core Concept: What Each Part Means

| Part | What It Is | Example |
|------|-----------|---------|
| `scores` | The **source array** being transformed | `[45, 82, 91, 60, 73]` |
| `.map` | A **method** that lives on `Array.prototype` — every array inherits it | `scores.map` |
| `(` `)` | The **argument list** — map expects one argument: the callback function | `(x => x + 5)` |
| **callback** | A function run **once for each element**; its return value becomes an element in the new array | `x => x + 5` |
| **return value** | A **brand-new array** — the original `scores` is untouched | `[50, 87, 96, 65, 78]` |

---

## Comparison: map vs forEach vs for-of vs filter

| Aspect | `map()` | `forEach()` | `for...of` loop | `filter()` |
|--------|---------|-------------|-----------------|------------|
| Returns a new array | ✅ Yes | ❌ No (returns `undefined`) | ❌ No (you build it manually) | ✅ Yes |
| Modifies the original? | ❌ Never | ❌ (unless you write to it) | ❌ (unless you write to it) | ❌ Never |
| Purpose | **Transform** every element | Run a **side effect** (log, save, etc.) | Full manual control | **Keep** matching elements |
| Number of results | Same as input (1:1) | Same as input | Depends on you | ≤ input (1:0-or-1) |
| Can `return` a value? | Yes — it collects them | Return is ignored | Yes, but only exits the loop | Yes — it collects them |

**When to use what:**
- Want `[45,82,91,60,73]` → `[50,87,96,65,78]` (every element changed)? → **`map()`**
- Just want to print each score? → **`forEach()`** or `for...of`
- Want only scores ≥ 70? → **`filter()`**

---

## The Callback: What It Receives

The callback can take up to **3 arguments** (you usually need only the first):

| Parameter | What It Contains | Example Value (1st call) |
|-----------|-----------------|--------------------------|
| `element` | The current item | `45` |
| `index` | Position of the item (0-based) | `0` |
| `array` | The whole original array | `[45, 82, 91, 60, 73]` |

```js
scores.map((element, index, array) => {
  // use all three if you need them
});
```

---

## Example Walkthrough: scores.map(x => x + 5)

**Source array:** `scores = [45, 82, 91, 60, 73]`

| Call # | `element` | `index` | Function result `element + 5` | Pushed into new array |
|--------|-----------|---------|-------------------------------|-----------------------|
| 1 | `45` | `0` | `50` | `50` |
| 2 | `82` | `1` | `87` | `87` |
| 3 | `91` | `2` | `96` | `96` |
| 4 | `60` | `3` | `65` | `65` |
| 5 | `73` | `4` | `78` | `78` |

**Result:** `[50, 87, 96, 65, 78]`

```js
let scores = [45, 82, 91, 60, 73];
let boosted = scores.map(x => x + 5);   // [50, 87, 96, 65, 78]
console.log(scores);                    // [45, 82, 91, 60, 73] — original UNCHANGED
```

---

## ⚠️ The Bug In Your File: `scores.map()` With No Arguments

```js
scores.map()   // ← TypeError! map requires a callback function
```

`map()` **must** receive a function. Calling it with no arguments throws:

```
TypeError: undefined is not a function
```

**Why:** map tries to run the callback on each element — but you gave it nothing (`undefined`), so it can't. It's like telling someone to "cook the food" but not giving them a recipe.

**Fix — always pass a function:**

```js
scores.map(x => x)       // [45, 82, 91, 60, 73] — identity (a copy)
scores.map(x => x + 5)   // [50, 87, 96, 65, 78] — transform
scores.map(String)       // ["45","82","91","60","73"] — to strings
```

---

## Common Real-World Patterns

| Goal | Code | Result |
|------|------|--------|
| Double every score | `scores.map(x => x * 2)` | `[90, 164, 182, 120, 146]` |
| Convert to strings | `scores.map(String)` | `["45","82","91","60","73"]` |
| Add 5 points (passing grade) | `scores.map(x => x + 5)` | `[50, 87, 96, 65, 78]` |
| Extract a property from objects | `students.map(s => s.name)` | `["Ava","Ben","Cam"]` |
| Use the index too | `scores.map((x, i) => `Score ${i+1}: ${x}`)` | `["Score 1: 45", ...]` |

---

## Pipeline: What Happens Inside `scores.map(callback)`

```
scores = [45, 82, 91, 60, 73]
    ↓
map() creates an EMPTY new array
    ↓
For each element (left → right):
    element ──► callback(element, index, array) ──► return value
    ↓
Return value pushed into the new array
    ↓
New array [50, 87, 96, 65, 78] returned  (original scores unchanged)
```

---

## TL;DR
- `map()` creates a **new array** by running a callback on **every element** — a 1:1 transform.
- It **never modifies** the original array.
- The callback receives `(element, index, array)`; whatever it **returns** lands in the new array.
- `scores.map()` **without a function throws a TypeError** — the callback is mandatory.
- Use `map()` to transform, `forEach()` for side effects, `filter()` to select, `for...of` for full control.
