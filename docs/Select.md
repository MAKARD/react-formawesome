# Select

User-interactive component.

*`Select` should be wrapped into `FormGroup`*

## Public interface

### Props

`Select` contains html `<select />` element. All props for `<select />` are valid for `Select`.

Own props:
 - `errorClassName` - class that applies when model attribute is invalid. By default - `has-error`.
 - `focusClassName` - class that applies when nested user-interactive element have focus. By default - `has-focus`.
 - `valueClassName` - class that applies when model attribute have value. By default - `has-value`.
 - `nativeRef` - callback for React `ref`. `Optional`.
 - `children` - should be a function that return valid component. `Optional`.
 - `options` - array of itmes that should be displayed. `Required`.

## Example

```jsx
<Form 
    onSubmit={async (values) => await someRequest(values)}
    validator={new SchemaValidator(ExampleSchema)}
    errorParser={(error) => myCustomParser(error)}
>
    <FormGroup attribute="counter" validateOn="blur">
		<Select
			options={[
				{
					value: 1,
					label: "one"
				},
				{
					value: 2,
					label: "two"
				}
			]}
		>
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
    </FormGroup>
</Form>
```
