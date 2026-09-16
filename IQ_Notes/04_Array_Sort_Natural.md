# Array.sort() — Default (Lexicographic) vs Natural Sorting

## TL;DR

- `sort()` with **no argument** converts everything to **strings** and sorts by **dictionary order** (character by character).
- `[10, 1, 21, 2].sort()` → `[1, 10, 2, 21]` because `"10"` (starts with `"1"`) sorts before `"2"` (starts with `"2"`).
- To get **natural sorting** (numbers as numbers), pass a comparator: `nums.sort((a, b) => a - b)` → `[1, 2, 10, 21]`.

## Comparison Table

| | Default `sort()` | Natural sort `sort((a, b) => a - b)` |
|---|---|---|
| What it compares | **Strings** (via `String()` conversion) | **Numbers** (subtraction result) |
| Order | Lexicographic / dictionary | Numeric / ascending |
| `[10, 1, 21, 2]` → | `[1, 10, 2, 21]` | `[1, 2, 10, 21]` |
| `["banana","apple","cherry"]` → | `["apple","banana","cherry"]` | Same (strings work either way) |
| Comparator argument | none | `(a, b) => a - b` (ascending) or `(a, b) => b - a` (descending) |
| When to use | Sorting words, file names, mixed text | Sorting numbers, prices, ages, scores |

## Why default sort gives `1, 10, 2, 21`

### Step 1 — Every element becomes a string

```
10  → "10"
1   → "1"
21  → "21"
2   → "2"
```

### Step 2 — Compare character by character (left to right)

```
"10"  vs  "2"   →  compare "1" vs "2"  →  "1" < "2"   →  "10" comes first
"1"   vs  "10"  →  "1" is a prefix of "10"            →  "1" comes first
"2"   vs  "21"  →  "2" is a prefix of "21"            →  "2" comes first
```

### Step 3 — Result

```
String order:  "1" < "10" < "2" < "21"
Array result:  [1, 10, 2, 21]
```

## Pipeline Diagram

```
[10, 1, 21, 2]
     │  sort() — default
     ▼
["10", "1", "21", "2"]      ← toString conversion
     │  compare char-by-char (Unicode order)
     ▼
["1", "10", "2", "21"]
     │
     ▼
[1, 10, 2, 21]              ← final array

vs.

[10, 1, 21, 2]
     │  sort((a, b) => a - b)
     ▼
[1, 2, 10, 21]              ← natural/numeric order
```

## Example Walkthrough

```js
let nums = [10, 1, 21, 2];
nums.sort();                    // [1, 10, 2, 21]  ← string order
nums.sort((a, b) => a - b);     // [1, 2, 10, 21]  ← numeric order
nums.sort((a, b) => b - a);     // [21, 10, 2, 1]  ← numeric descending
```

| Input pair `(a, b)` | Default sort compares | `a - b` result | Meaning |
|---|---|---|---|
| `(10, 2)` | `"10"` vs `"2"` → `"1"` vs `"2"` | `8` (positive) | `a` after `b` |
| `(2, 10)` | `"2"` vs `"10"` → `"2"` vs `"1"` | `-8` (negative) | `a` before `b` |
| `(1, 1)` | equal strings | `0` | keep order |

## Key Takeaways

1. **Default `sort()` = string sort.** Numbers get treated as text.
2. **The "Natural sorting" comment in the code is misleading** — that example is *not* natural sorting; natural sorting requires the comparator.
3. **Always pass `(a, b) => a - b`** when sorting numeric arrays.
4. For objects, sort by a key: `people.sort((x, y) => x.age - y.age)`.
