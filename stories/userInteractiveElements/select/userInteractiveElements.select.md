# <Select />

**<Select>** element allow to use each html property. Also, it's have own properties: 
* **errorClassName**
* **focusClassName**
* **valueClassName**
* **nativeRef**
* **options**
* **children**

**options** property is requried. It represents available options for selection. For example:

```js
// With string values
<Select options={[{value: "male", label: "Male"}, {value: "female", label: "Female"}]} />

// With boolean values
<Select options={[{value: true, label: "Yes"}, {value: false, label: "No"}]} />

// With number values
<Select options={[{value: 1, label: "One"}, {value: 2, label: "Two"}]} />
```

**children** property allows to render custom options. For example:

```js
<Select options={[{value: 1, label: "One"}, {value: 2, label: "Two"}]}>
    {(options, selected) => (
        options.map((item) => (
			<option
				key={item.value} 
				value={item.value}
				className={selected === item.value ? "active" : ""}
			>
				{item.label}
			<option>
		))
    )}
</Select>
```

For more details, see [Select docs](https://github.com/MAKARD/react-formawesome/blob/master/readme/Select.md)
