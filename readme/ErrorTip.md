# ErrorTip

Component for notify user about errors.

*`ErrorTip` should be wrapped into `FormGroup`*

## Public interface

### Props

By default renders `<span />`. All props for `<span />` are valid for `ErrorTip`.

- `children` - Only function allowed. Error text is passing as argument.

*If error not exist, `ErrorTip` will not render anything*

## Example

```jsx
<Form 
    onSubmit={async (values) => await someRequest(values)}
    validator={new SchemaValidator(ExampleSchema)}
    errorParser={(error) => myCustomParser(error)}
>
    <FormGroup attribute="surname" >
		<ErrorTip>
			{(error) => <p>{error}</p>}
		</ErrorTip>
    </FormGroup>
</Form>
```
