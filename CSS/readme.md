# CSS Cheat Sheet

## navigation

[Flexbox](#flexbox)
[Grid](#grid)
[Position](#position)
[Transform](#transform)

# <mark>Flexbox</mark>

```html
<div class="parent">
  <div class="child child-one">One</div>
  <div class="child child-two">Two</div>
  <div class="child child-three">Three</div>
</div>
```

```css
/* ===============================
   🧱 FLEX CONTAINER (Parent)
   =============================== */
.parent {
  display: flex; /* Enables flexbox on direct children */

  /* 
  Defines main axis direction
  row (default): left → right
  column: top → bottom
  */
  flex-direction: row;

  /*
  Allows items to wrap to next line
  nowrap (default): everything stays in one line
  */
  flex-wrap: wrap;

  /*
  Aligns content on the cross axis
  Only works when there's extra space in the container (with wrap)
  */
  align-content: center;

  /*
  Aligns items on the cross axis (per line)
  */
  align-items: center;

  /*
  Aligns items on the main axis
  */
  justify-content: space-between;

  /*
  Gap between flex items (works like grid gap)
  */
  gap: 1rem;
}
```

```css
/* ===============================
   🎯 FLEX ITEM (Child)
   =============================== */
.child-one {
  /*
  flex-grow: how much the item can grow relative to others
  1 = item can grow to fill remaining space
  0 = item won’t grow
  */
  flex-grow: 1;

  /*
  flex-shrink: how much item can shrink when not enough space
  1 = shrink if needed
  0 = don’t shrink
  */
  flex-shrink: 1;

  /*
  flex-basis: initial size before growing/shrinking
  Can override width/height in the flex direction
  */
  flex-basis: 150px;

  /*
  Shorthand:
  flex: grow shrink basis
  */
  flex: 1 1 150px;

  /*
  Override alignment on cross axis for this item only
  */
  align-self: center;

  /*
  Change order of appearance
  Default = 0. Lower value appears first
  */
  order: 1;
}
```

---

## ✅ Summary of Common `justify-content` values:

| Value           | Effect                             |
| --------------- | ---------------------------------- |
| `flex-start`    | Items start at beginning (default) |
| `flex-end`      | Items at end                       |
| `center`        | Items in center                    |
| `space-between` | Equal spacing between items        |
| `space-around`  | Equal space around each item       |
| `space-evenly`  | Equal space before, between, after |

---

## ✅ Summary of Common `align-items` / `align-self`:

| Value        | Description                  |
| ------------ | ---------------------------- |
| `stretch`    | (default) Fill container     |
| `flex-start` | Align to top (or left)       |
| `flex-end`   | Align to bottom (or right)   |
| `center`     | Center along cross axis      |
| `baseline`   | Align based on text baseline |

---

## ✅ Useful Shorthand's

```css
/* FLEX shorthand (most used) */
flex: grow shrink basis; /* e.g., flex: 1 1 150px */
flex: auto; /* equals 1 1 auto */
flex: none; /* equals 0 0 auto */
flex: 1; /* equals 1 1 0% */

/* ALIGN shorthand */
place-items: center; /* align-items + justify-items */
place-content: center; /* align-content + justify-content */
```

---

---

---

---

# <mark>Grid</mark>

## ✅ Grid Container

```css
display: grid; /* Enable grid layout */
display: inline-grid; /* Grid inside inline-level element */
```

---

## 🧱 Defining Columns & Rows

```css
grid-template-columns: 200px 1fr 2fr;
grid-template-rows: auto 1fr 100px;
```

### ✅ Shorthand

```css
grid-template: 80px 1fr 60px / 250px 1fr;
```

Format: `rows / columns`

---

## 🔁 Repeat Function

```css
grid-template-columns: repeat(3, 1fr);
```

---

## 📦 Gap (Spacing Between Rows/Cols)

```css
gap: 20px; /* row + column */
row-gap: 10px;
column-gap: 15px;
```

---

## 🔢 Grid Line Positioning

```css
grid-column: 1 / 3; /* Start at line 1, end before line 3 */
grid-row: 2 / 4;
```

### ✅ Span Syntax

```css
grid-column: span 2;
grid-row: span 3;
```

---

## 🧾 Grid Item Placement (Shorthand)

```css
grid-area: 2 / 1 / 4 / 3;
```

Format: `row-start / column-start / row-end / column-end`

---

## 🪄 Named Grid Areas

### Define in container:

```css
grid-template-areas:
  'header header'
  'sidebar main'
  'footer footer';
```

### Assign to items:

```css
grid-area: header;
```

---

## 📍 Grid Auto Placement

```css
grid-auto-flow: row; /* default */
grid-auto-flow: column;
grid-auto-flow: dense; /* fills in gaps */
```

---

## 🧮 Implicit Rows/Cols

```css
grid-auto-rows: 100px;
grid-auto-columns: 1fr;
```

---

## 🔧 Minmax, Auto-fit, Auto-fill

```css
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
```

| Keyword   | Description                   |
| --------- | ----------------------------- |
| auto-fit  | collapses empty columns       |
| auto-fill | keeps space for empty columns |
| minmax()  | sets min and max size range   |

---

## 🎯 Alignment (Grid Items)

```css
justify-items: start | end | center | stretch;
align-items: start | end | center | stretch;
```

### ✅ Shorthand

```css
place-items: center; /* align-items + justify-items */
```

---

## 🎯 Alignment (Individual Item)

```css
justify-self: center;
align-self: start;
```

---

## 🧲 Grid Container Alignment (Whole Grid)

```css
justify-content: start | end | center | space-between | space-around |
  space-evenly;
align-content: start | end | center | space-between;
```

### ✅ Shorthand

```css
place-content: center; /* align-content + justify-content */
```

---

## 📦 Grid Track Terminology

| Concept   | Description                  |
| --------- | ---------------------------- |
| Track     | A row or column              |
| Grid line | The vertical/horizontal line |
| Cell      | One grid item space          |
| Area      | Named rectangular space      |

---

## 🔁 Useful Responsive Pattern

```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

Use for responsive cards or galleries.

---

## 💡 Pro Tips

- Use `overflow-y: auto` in `.main` when locking layout height.
- Combine Grid and Flexbox when needed (e.g., sidebar grid, inner flex layout).
- Use `grid-template-areas` for semantic layout naming.

---

# ✅ Summary of Key Grid Shorthand's

| Property      | Shorthand                                   |
| ------------- | ------------------------------------------- |
| grid-template | `rows / columns`                            |
| grid-area     | `row-start / col-start / row-end / col-end` |
| place-items   | `align-items + justify-items`               |
| place-content | `align-content + justify-content`           |

---

---

---

---

# <mark>Position</mark>

## Position Types

| Position   | Description                                                                   | Behavior / Notes                                                                        |
| ---------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `static`   | Default position                                                              | Follows normal flow. Top, bottom, left, right **do not work**.                          |
| `relative` | Relative to its **normal position**                                           | Can be moved using `top`, `bottom`, `left`, `right`. Space is still reserved in layout. |
| `absolute` | Relative to **nearest positioned ancestor** (`relative`, `absolute`, `fixed`) | Removed from normal flow. Positioned inside ancestor; if none, relative to `<html>`.    |
| `fixed`    | Relative to **viewport**                                                      | Always stays in place when scrolling. Removed from normal flow.                         |
| `sticky`   | Switches between `relative` and `fixed`                                       | Acts like `relative` until a threshold (`top`, etc.) is reached, then becomes `fixed`.  |
| `inherit`  | Inherits position from parent                                                 | Rarely used for positions.                                                              |

## Quick Examples

```css
/* Static (default) */
.element {
  position: static;
}

/* Relative (move from original spot) */
.element {
  position: relative;
  top: 10px;
  left: 20px;
}

/* Absolute (position inside nearest ancestor) */
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 0;
  right: 0;
}

/* Fixed (always visible on screen) */
.element {
  position: fixed;
  bottom: 10px;
  right: 10px;
}

/* Sticky (sticks after scrolling) */
.element {
  position: sticky;
  top: 0;
  background: yellow;
}
```

---

---

---

---

# <mark>Transform</mark>

---

## 🧱 What is `transform`?

The `transform` property lets you visually manipulate an element in 2D or 3D space without changing its layout in the DOM.

---

## ✅ Syntax

```css
transform: <function>(<value>);
```

You can **combine** multiple transforms like this:

```css
transform: rotate(45deg) scale(1.2) translateX(100px);
```

---

## 🔄 2D Transform Functions

### 🔹 `translateX()`, `translateY()`, `translate()`

```css
transform: translateX(50px); /* move right */
transform: translateY(-20px); /* move up */
transform: translate(50px, -20px); /* X and Y together */
```

> Moves the element **without changing layout**  
> Units: px, %, em (relative to self)

---

### 🔹 `scaleX()`, `scaleY()`, `scale()`

```css
transform: scaleX(2); /* double width */
transform: scaleY(0.5); /* half height */
transform: scale(1.5); /* increase both */
```

> Zoom in/out. `1` = original size, `0.5` = half

---

### 🔹 `rotate()`

```css
transform: rotate(45deg); /* clockwise */
transform: rotate(-90deg); /* counterclockwise */
```

> Rotates around the element’s center  
> Units: `deg`, `rad`, `turn`

---

### 🔹 `skewX()`, `skewY()`, `skew()`

```css
transform: skewX(15deg);
transform: skewY(10deg);
transform: skew(15deg, 10deg);
```

> Slants the element diagonally  
> Mostly used for stylistic effects

---

### 🔹 `matrix(a, b, c, d, e, f)`

```css
transform: matrix(1, 0, 0, 1, 30, 20);
```

> Advanced shorthand for all transforms:

```
matrix(scaleX, skewY, skewX, scaleY, translateX, translateY)
```

> Rarely used directly — use it for complex animations or SVG manipulation

---

## 🔁 3D Transform Functions

To use these, you **must** set perspective (on parent or self):

```css
transform-style: preserve-3d;
perspective: 1000px;
```

---

### 🔹 `rotateX()`, `rotateY()`, `rotateZ()`

```css
transform: rotateX(30deg);
transform: rotateY(45deg);
transform: rotateZ(90deg); /* same as 2D rotate */
```

---

### 🔹 `translateZ()` (3D Depth Movement)

```css
transform: translateZ(100px);
```

> Moves the element **closer or farther** from the viewer  
> Often used in **flip card** or **VR interfaces**

---

### 🔹 `scaleZ()`, `scale3d()`

```css
transform: scale3d(1, 2, 1);
```

> Scales on all three axes: X, Y, Z

---

### 🔹 `rotate3d(x, y, z, angle)`

```css
transform: rotate3d(1, 1, 0, 45deg);
```

> Rotates in 3D around a vector axis  
> Example above rotates diagonally across X and Y

---

## 📌 `transform-origin`

```css
transform-origin: center; /* default */
transform-origin: top left;
transform-origin: 100% 0%;
```

> Defines the **pivot point** for transform  
> Can use keywords or `x y` format

---

## 🎨 Real Use Cases

| Use Case           | Transform Used                        |
| ------------------ | ------------------------------------- |
| Button scale hover | `scale(1.1)`                          |
| Slide in menu      | `translateX(-100%)` → `translateX(0)` |
| Spinner            | `rotate(360deg)` + animation          |
| Tilted cards       | `skewY(5deg)`                         |
| Flip cards         | `rotateY(180deg)` + `perspective`     |

---

## 🚀 Best Practices

✅ GPU-friendly: `transform` and `opacity` are fast  
❌ Avoid layout-changing properties like `top`, `left` for animation

---

## 💡 Pro Tip: `will-change`

```css
.element {
  will-change: transform;
}
```

> Tells the browser to **optimize** for upcoming transform

---

## 🔧 Combine with `transition` or `animation`

```css
.element {
  transition: transform 0.3s ease;
}

.element:hover {
  transform: scale(1.1) rotate(5deg);
}
```

Or use with keyframes:

```css
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loader {
  animation: spin 1s linear infinite;
}
```

---

## 🧪 Visual Example

```css
transform: translate(50px, 0) scale(1.2) rotate(10deg);
```

> Moves the element right → scales it → rotates slightly
