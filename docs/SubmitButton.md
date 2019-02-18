# SubmitButton

Button for submitting form.

*`SubmitButton` should be wrapped into `Form`*

## Public interface

### Props

`SubmitButton` contains html `<button />` element. All props for `<button />` are valid for `SubmitButton`.

Own props:
 - `loadingClassname` - class that applies while submit. By default - `is-loading`.
 - `loadingComponent` - component that will render while submit. `Optional`

## Example

```jsx
<Form 
    onSubmit={async (values) => await someRequest(values)}
    validator={new SchemaValidator(ExampleSchema)}
    errorParser={(error) => myCustomParser(error)}
>
	<SubmitButton loadingComponent={<span>wait...</span>}>
		<span>
			submit
		</span>
	</SubmitButton>
</Form>
```
