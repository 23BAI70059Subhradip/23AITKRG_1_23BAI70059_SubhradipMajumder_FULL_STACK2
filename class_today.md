# Exp1: React & Modern Frontend Architecture: Core Concepts
A comprehensive guide to understanding React's architecture, data flow, and ecosystem—from JSX to Fiber.

---

## 1. Core Definitions

### What is React?
React is a **JavaScript library** developed by **Meta** for building user interfaces.
* **Library vs. Framework:** React is a library because it primarily handles the **View** layer. You are free to choose your own tools for routing, state management, and styling.
* **Component-Based:** The UI is broken down into small, isolated pieces called components.
* **SPA (Single Page Application):** React enables SPAs where only the content changes without a full page reload, managed by client-side routing.

### JSX (JavaScript XML)
JSX is **syntactic sugar** for `React.createElement()`.
* **The Process:** `JSX` -> **Babel** (Compiler) -> `JS Objects` -> `HTML`.
* **Fragments (`<> </>`):** Used to wrap multiple elements. It attaches to its lexical parent without adding extra nodes to the DOM, maintaining a clean component tree.

---

## 2. React Architecture & Rendering

### Map
`map()` applies a **function to each element** of an iterable and returns a new iterable with transformed values.

#### Syntax
```python
map(function, iterable)
```
- Takes each element from the iterable
- Applies the function
- Stores the result in a new iterable

### Example
```python
numbers = [1, 2, 3, 4]
squared = list(map(lambda x: x**2, numbers))
print(squared)
```

### Output
```
[1, 4, 9, 16]
```

### Use Cases
- Converting data types
- Mathematical transformations
- Applying formulas to datasets

---

## 2. Filter

### Definition
`filter()` selects elements from an iterable **based on a condition** (returns `True` or `False`).

### Syntax
```python
filter(function, iterable)
```

### How It Works
- Evaluates each element using a condition
- Keeps elements where the condition is `True`

### Example
```python
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)
```

### Output
```
[2, 4, 6]
```

### Use Cases
- Data cleaning
- Removing unwanted values
- Selecting valid records

---

## 3. Reduce

### Definition
`reduce()` **reduces an iterable to a single value** by repeatedly applying a function.

> Note: In Python, `reduce()` is available in the `functools` module.

### Syntax
```python
from functools import reduce
reduce(function, iterable)
```

### How It Works
- Takes first two elements
- Applies function
- Uses the result with the next element
- Continues until one value remains

### Example
```python
from functools import reduce

numbers = [1, 2, 3, 4]
sum_all = reduce(lambda x, y: x + y, numbers)
print(sum_all)
```

### Output
```
10
```

### Use Cases
- Sum, product, max, min
- Aggregating results
- Statistical calculations

---

## Comparison Table

| Function | Purpose | Input | Output |
|--------|--------|-------|--------|
| Map | Transform data | Iterable | Iterable |
| Filter | Select data | Iterable | Iterable |
| Reduce | Aggregate data | Iterable | Single value |

---

## Real-World Example

### Problem
From a list of numbers:
1. Square each number
2. Keep only even squares
3. Find their sum

### Solution
```python
from functools import reduce

numbers = [1, 2, 3, 4, 5]
result = reduce(
    lambda x, y: x + y,
    filter(lambda x: x % 2 == 0,
           map(lambda x: x**2, numbers))
)

print(result)
```

---

## Key Takeaways
- **Map → Transform**
- **Filter → Select**
- **Reduce → Combine**
- Often used together for clean, readable code

---

# Spread Operator – Deep Copy vs Shallow Copy

The **spread operator (`...`)** is commonly used in **JavaScript** to copy or merge arrays and objects.

---

## Spread Operator (`...`)
The spread operator expands elements of an array or properties of an object into a new array or object.

---

## 1. Pre (Primitive Data Types) → Deep Copy
For **primitive data types** (number, string, boolean, null, undefined), copying creates a **deep copy** because primitives are stored by value.

### Example
```js
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20
```


### The Virtual DOM (VDOM)
React creates a lightweight copy of the real DOM. 
* **Is it still used?** Yes. React compares the VDOM with a "snapshot" of the previous state.
* **Reconciliation & Diffing:** React uses a **diffing algorithm** to see what changed. It only updates the specific parts of the real DOM that actually changed, rather than re-rendering the whole page.

### React Fiber & Incremental Rendering
Introduced to make the rendering engine faster and more fluid.
* **Incremental Rendering:** The ability to split rendering work into chunks and spread it out over multiple frames.
* **The Cascade Effect:** By default, if a **Parent's state** changes, all its **Children** will also re-render. Fiber helps manage this work efficiently.

---

## 3. Data Flow & State Management

### State vs. Props
| Feature | Props | State |
| :--- | :--- | :--- |
| **Definition** | Data passed from parent to child | Internal data managed by component |
| **Mutability** | **Immutable** (Read-only) | **Mutable** (via setter functions) |
| **Direction** | Top-to-bottom (Unidirectional) | Local to the component |

* **Unidirectional Data Flow:** Data flows down. Lookups are expensive, so React ensures data moves in one direction to keep logic predictable.
* **Prop Drilling:** Passing props through many layers of components.
* **Context API:** A way to share state globally without drilling props through every level.

---

## 4. Hooks & Lifecycle

Hooks are functions that allow functional components to use state and lifecycle features.

### `useEffect` Hook
Used for side effects (API calls, subscriptions, manual DOM changes).
* **No Dependency Array:** Runs on every render (Potential for infinite loops).
* **Empty Array `[]`:** Runs only once (on Mount). Acts like `componentDidMount`.
* **With Dependency `[val]`:** Runs only when `val` changes.

### Reflow vs. Repaint
* **Reflow:** When the browser has to recalculate the positions and geometries of elements (re-rendering elements).
* **Repaint:** When the browser updates the skin/visuals of elements (full page or specific area render).

---

## 5. Development Ecosystem

### Package Managers
* **npm:** Used to install and manage dependencies in a project.
* **npx:** An executor. It allows you to run packages (like `create-react-app`) without permanently installing them globally.

### Bundlers (Vite & Webpack)
Bundlers take all your files (JSX, CSS, Images) and package them into a single file for the browser.
* **Vite:** The modern standard. It uses native ES modules to provide near-instant server start times compared to older tools like Webpack.

### UI Libraries
* **Material UI (MUI):** Pre-styled components following Google's Material Design.
* **Shadcn/ui:** A collection of re-usable components that you copy-paste into your own code, giving you full control over the styling.

---

## 6. JavaScript Essentials

* **Var vs. Let vs. Const:** * `var`: Function scoped (outdated).
    * `let`: Block-scoped, re-assignable.
    * `const`: Block-scoped, immutable reference (Preferred for React).
* **Pure Functions:** Functions that return the same output for the same input. React components should be "pure" to avoid UI bugs.
* **Arrow Functions:** Often used as logic carriers or event handlers because they don't have their own `this` context.
* **Referential Equality:** React checks if the "memory address" of an object or array has changed. This is why we use `[...oldArray, newItem]` to trigger a re-render.

---

## 7. Entry Points
* **App.js/tsx:** Usually the entry point of your logic.
* **main.js/tsx:** Where React attaches your App to the `root` DOM node (using `createRoot`).



# Exp2 
Single and multipage webpages. 

## BrwoserRouter 
wiring different pages into a single page application and its connects the route to the react router, act as the parent.
`
<BrowserRouter />
`

## Routes and Route
Routes are the URl pathway and which component to show will be given by the routes (what to render).
`
<Routes /> <Route/>
`

## Link
don't use the `<a />` which basically redirects us to another page and the render and repaint is done, but the `<Link />` dont reload the page instead it will use to render the component only.

## Protected Routes
those routes which requires the auths like tokens or verifications etc.
- Gate Keeper logic. 

## Outlet
when we have multiple resuable of computable, we wrape the headers and the tailers in the output which is not rendered multiple time instead it will store the components in the cache of the page. Which will ultimately reduce the performance overhead.
**It is used to identify the outlet about the dynamic UI.** - `helps to reduce the processing`

In case of the Uber maps
- drivers profile **remember since it will remember only the endpoints is different** 
- map **remember since it will remember only the endpoints is different**
- faire 
- customer profile
so we will use the components persistant UI, static it will reduce the workload and increase the performance.

## Where does the State Live? 
what appens to a state when multiple states? 
in each iteration the urls are the best, url will not loose the data of the filtered data. The Urls are the universal constant for multiple iterations (But for only shareable one).

## Nested Layout 
It is the classic example of the Uber map case where the changeable items like profile, cost etc are used in the outlet and the other elements will remain static during the usage of the applications. we use the Persistant ui and Dynamic UI.

## Context 
it is a global state which is shared with all the components of the react app. 
1. Create the Context. **Create Context**
2. Use it. **useContext**
The most important is the Authentication of the context.
```jsx
const { createContext } = require("react");

const AuthContext = createContext(null); 
export const AuthProvider = ({children}) => {
    return(
        <AuthContext.Provider value={{isAuthenticated, setAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useAuth(AuthContext); // medium to pass this context to you. 
```


## Strict Mode 
This strict mode is used to create the app rendered twice using the VDOM it is specially in case of the developer mode of the react application. 
**Key Behaviors and Benefits (Development Only)**
- Strict Mode helps you write more resilient, future-proof code by making potential bugs more obvious through intentional, development-only behaviors: 
- Detecting Impure Renders: React assumes components are pure functions. To find bugs caused by accidental side effects in rendering logic, Strict Mode intentionally calls certain functions twice, including function component bodies and state updater functions.
- Finding Missing Effect Cleanup: It helps uncover bugs in useEffect and useLayoutEffect hooks by running an extra setup/cleanup cycle (mount -> unmount -> mount) for every effect. This ensures that your cleanup logic works correctly and prevents potential memory leaks in production.
- Warning About Deprecated APIs: It checks for and warns about the use of legacy APIs, such as the string ref API, findDOMNode, and unsafe class component lifecycle methods (componentWillMount, etc.), encouraging migration to modern alternatives.
- Ensuring Reusable State: In React 18, it helps ensure that components can handle being unmounted and remounted while preserving their state, a necessary behavior for future concurrent features. 

By using Strict Mode, you can catch a variety of subtle issues and follow best practices, leading to higher quality and more maintainable code. 



# Exp3 
## Redux 
we dont led componetns let change the value in the global state. It act as the exteranl central store for the react app. It holds the states together. 
Redux is a standalone JavaScript library for predictable, centralized state management in applications, commonly used with React via the official React Redux library. The recommended modern approach for integrating Redux in React applications is using Redux Toolkit (RTK), which simplifies setup and reduces boilerplate code. 

component -> reducer(external storage) -> store -> UI; 

**Components and the Principals**

**Redux Toolkit** it's an lib that has the boiler plate code into it and it is very verbose in nature, it reduces that. 
Functions 
- Configure store like useContext(null); 
- Creating Slice => creates the disection for different store all together, like mall have different section. 
- CreateAsyncThunk => just acts like the promise and it will provide the capture valut trade here.  Binding the state to the initial state, example is the cart system.

## Redux vs ContextAPI


## Store 
The global container for application store. **CreatedOnce**
1. Current state 
2. Reducers 
3. Middleware

**slice** have its own reducer logic but they all are in the same container, and the actions are done by the components.
**Lazy loading** is a performance optimization technique that defers loading non-critical resources (like images, videos, or code modules) until they are actually needed, usually when a user scrolls to them or interacts with the page, resulting in faster initial page loads, reduced bandwidth, and better user experience, unlike "eager loading" which loads everything at once.

# Exp5 Unit 2 
testing 

**types**
1. **Uni*t testing** one perticular component and function outputs.
2. **Integration** comunation of multiple components and what the dev actually works. example = API testing like mocking the api for faster checkking. 
3. **End to End Testing** the entire testing. 

*Jest* is used the unit testing and *React Testing Library* is used to integration testing.

## Jest
Most financial for each api, 20 to 100 tests are written to run the code.for each the api call need to api calls to test (increase the calls financial). It gives us the feature of the mocking or fake api call or pseudo response of the API. it lets us call the api without the initiating of the api call. 

## Snapshot 
UI designs the wireframes, they had to design and replicate the data in the code format. 
The UI/UX component with there positions and there code with the wireframes. paramas like pos, elev, etc. And there proper prototyping. 
**It will check the exact css information of the component and also there functionality.**

**Test Structure** 
structure **filename.test.js** 
`
test("add 2 + 2 = 4"   ) 
`defines the test case and checks the output. 
example actual code: 
`
export const add= (a, b) => a + b;
`
`
test("checks even", () => {
    expect(add(5,2)).toBe(7); 
    //add multiple
})
`

to run: `npm test`