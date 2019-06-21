# <Checkbox />

**< Checkbox />** element allow to use each html property. Also, it's have own properties: 
* **errorClassName**
* **activeClassName**
* **nativeRef**
* **values**

**values** property is required. It represents two flags: ***active*** and ***disabled***. For example:

```js
// With strings
<Checkbox values={["Yes", "No"]} />

// With boolean
<Checkbox values={[true, false]} />

// With numbers
<Checkbox values={[1, 0]} />

// Even with objects
<Checkbox values={[{value: true}, {value: false}]} />
```

For more details, see [Checkbox docs](https://github.com/MAKARD/react-formawesome/blob/master/readme/Checkbox.md)
