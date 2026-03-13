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
```jsx
test("add 2 + 2 = 4") 
```
defines the test case and checks the output. 
example actual code: 
```jsx
export const add= (a, b) => a + b;

test("checks even", () => {
    expect(add(5,2)).toBe(7); 
    //add multiple
})
```

to run: `npm test`

## Integration 
Fake or **mocking** an API call to reduce the API calls to reduce the 
1. financial burdain on the workflow. 
2. 3rd party problem like delay or down. 

```jsx
// global - window in the browser 
global.fetch(()=> {
    Promise.resolve({
        json: ()=> Promise.resolve({name: "Ansh"});
    })
})
```
Want to test the render of the object without fetching the API iteself. So we will test the API call. 

1. **reder** > creates a virtual component tree 
2. **screen** > selects the element from the virtual dom tree, dont load all the component but just the component to be tested. 

**toBe** is an matcher which matches the output given there in the code to be with the parameter given in the code there. 

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';
import * as productAPI from './productAPI';

jest.mock('./productAPI');

test("test the API function with mock", async ()=> {
   productAPI.API.mockResolvedValue({
    "name": "Subh", 
    "age": 22
   });
   render(<App />);
   const nameElement = await screen.findByText(/Name: Subh/i);
   const ageElement = await screen.findByText(/Age: 22/i);
   expect(nameElement).toBeInTheDocument();
   expect(ageElement).toBeInTheDocument();
})
```

Here's an explanation of the functions used in this testing code:

## Function Explanations

### `jest.mock('./productAPI')`
- **Purpose**: Automatically mocks all exports from the `./productAPI` module
- **What it does**: Replaces the actual API functions with Jest mock functions that can be controlled during testing
- **Why used**: Prevents actual API calls during testing and allows us to control what the API returns

### `productAPI.API.mockResolvedValue({...})`
- **Purpose**: Configures the mocked API function to return a resolved Promise with specific data
- **What it does**: Makes the mocked API function return a Promise that resolves to the provided object `{ "name": "Subh", "age": 22 }`
- **Why used**: Simulates a successful API response with test data

### `render(<App />)`
- **Purpose**: Renders the React component in a virtual DOM for testing
- **What it does**: Mounts the App component and makes it available for queries and assertions
- **Source**: From `@testing-library/react`

### `screen.findByText(/Name: Subh/i)`
- **Purpose**: Asynchronously finds an element containing text matching the regex pattern
- **What it does**: Searches the DOM for an element with text content that matches `/Name: Subh/i` (case-insensitive)
- **Returns**: A Promise that resolves when the element is found (waits up to 1000ms by default)
- **Why used**: Ideal for elements that appear after async operations (like API calls)

### `expect(nameElement).toBeInTheDocument()`
- **Purpose**: Asserts that the element exists in the DOM
- **What it does**: Verifies that the found element is actually present in the document
- **Source**: From Jest's expect API combined with Jest DOM matchers

### Key Testing Concepts Used

- **Mocking**: Replacing real implementations with controlled test doubles
- **Async Testing**: Using `await` with `findBy` queries to handle asynchronous rendering
- **DOM Assertions**: Verifying that expected content appears after component renders.


## SnapShot testing 
we save the tree structure in the file is called the **Snapshot**. It is to test the structure of the output. **It don't check the logic**. 


To update the test snapshot.  
```cmd
npm test -- -u 
```

```jsx

export default function Component({data}) {
  return (
    <div>component {data}</div>
  )
}

import { render} from '@testing-library/react';
import Component from "./../component";


test("Snap testing", ()=>{ 
    const data = render(<Component data = "test"/>);
    expect(data).toMatchSnapshot();

})
```
Imports the render function from React Testing Library
This function renders React components in a test environment,
Imports the component we want to test from its file location.
Defines a test case with description "Snap testing"
The function contains the test logic
Renders the Component with data="test" prop, Returns an object containing utilities to query the rendered component, 

**Creates a snapshot test**
1. **First run:** Creates a snapshot file with the rendered output
2. **Subsequent runs:** Compares current output with saved snapshot
3. Test fails if they don't match (helps detect unexpected changes)

### What the Test Does
1. Renders the component with data="test"
2. Captures the rendered output structure
3. Saves/compares it to a snapshot file (usually with .snap extension)
4. This is a common pattern to ensure UI components don't change unexpectedly.
5. Stores the data snapshot in the file with lots of stuff. 
```jsx
// Jest Snapshot v1, https://goo.gl/fbAQLP
exports[`Snap testing 1`] = `
Object {
  "asFragment": [Function],
  "baseElement": <body>
    <div>
      <div>
        component 
        test
      </div>
    </div>
  </body>,
  "container": <div>
    <div>
      component 
      test
    </div>
  </div>,
  "debug": [Function],
  "findAllByAltText": [Function],
  "findAllByDisplayValue": [Function],
  "findAllByLabelText": [Function],
  "findAllByPlaceholderText": [Function],
  "findAllByRole": [Function],
  "findAllByTestId": [Function],
  "findAllByText": [Function],
  "findAllByTitle": [Function],
  "findByAltText": [Function],
  "findByDisplayValue": [Function],
  "findByLabelText": [Function],
  "findByPlaceholderText": [Function],
  "findByRole": [Function],
  "findByTestId": [Function],
  "findByText": [Function],
  "findByTitle": [Function],
  "getAllByAltText": [Function],
  "getAllByDisplayValue": [Function],
  "getAllByLabelText": [Function],
  "getAllByPlaceholderText": [Function],
  "getAllByRole": [Function],
  "getAllByTestId": [Function],
  "getAllByText": [Function],
  "getAllByTitle": [Function],
  "getByAltText": [Function],
  "getByDisplayValue": [Function],
  "getByLabelText": [Function],
  "getByPlaceholderText": [Function],
  "getByRole": [Function],
  "getByTestId": [Function],
  "getByText": [Function],
  "getByTitle": [Function],
  "queryAllByAltText": [Function],
  "queryAllByDisplayValue": [Function],
  "queryAllByLabelText": [Function],
  "queryAllByPlaceholderText": [Function],
  "queryAllByRole": [Function],
  "queryAllByTestId": [Function],
  "queryAllByText": [Function],
  "queryAllByTitle": [Function],
  "queryByAltText": [Function],
  "queryByDisplayValue": [Function],
  "queryByLabelText": [Function],
  "queryByPlaceholderText": [Function],
  "queryByRole": [Function],
  "queryByTestId": [Function],
  "queryByText": [Function],
  "queryByTitle": [Function],
  "rerender": [Function],
  "unmount": [Function],
}
`;
```

# JAVA
string store in the **string constant pool**. Comparism is done using Hashing the Linked List and the dynamic array. 

## Garbage Collection
Automated minor and major collection 
free the memory using the **finalize** function. 
Heap memo cat into 
1. **permanent/ protected** - libs no minor not major. as
2. **new** - new keywords are inserted from the front of the memory. 
  - **S0 and S1** surviror zones 
  - S0 collects the object related (minor)
  - S1 minor gc is happend transfer the object from S0 to S1.  
3. **old** - Mark and sweep algorithm to collect garbage. eviction polices LRU and MRU. 

permaent + new = eden space exempted from the major garbage collection. 
**Deamon Thread** uses the executable services.


## Why Spring ? 
Java is not for interpreice application i.e scalable and fast, since object creation was manual it create a depenedincy was manual. Unit test was not possible, coupling was very tight. 
Spring Came up with inversion of control, giving the power to the program with the help of the **Beans**. 
**ServeLet** map the request and handle the requests. .war is the extention of the server. Application is deploied in the server. 

**Starter packs (auto configured) and annotaion and tomcat and jetty - spring boot. Prodcuction ready code for faster development.**
**legacy level code** is the Spring boot, ex - Amazon, netflix etc. but rust beats springboot.
**Bugs Bounty program** triggers the vulnarablity. o click, 1 click and 2 click.

**Dependency Injection** pass the object from one to other services. 
1. feild - Autowired always causes the feild injection. may cause the tightcoupling. 
2. Setter - private and setter 
3. Constructor injectons (prefered in the industry) - not use the autowired and dont refer to the global but to the local state.


### DTO - Data transfer object 
we should not send the `@Entity` since the data within it can be accessable easily so to provide the security and abstraction we need to add the DTO. 

```java
class User{
  private: 
    id, email, pass, etc
}

class UserDTO{
  private: 
    email, pass.  
}

```

**@springboot application**- Act as the entry point to the spring boot and it consists of three parts or tag i.e
1. **@IOCContainer** - inversion of control using beans stored in the IOC. 
2. **@AutoConfigaration**- Handle files configaration.
3. **@ComponentScan**- Scan the contents and collects all the resources and use it.


## Cascade 
1. merge 
2. delete 
3. persist

## JPQL 
runs on classes and on the names. 