# Checkbox

User-interactive component.

*`Checkbox` should be wrapped into `FormGroup`*

## Public interface

### Props

`Checkbox` contains html `<input type="checkbox" />` element. All props for `<input type="checkbox" />` are valid for `Checkbox`.

Own props:
 - `values` - array with two elements. First - `active value`, second - `disabled value`. `Required`
 - `errorClassName` - class that applies when model attribute is invalid. By default - `has-error`.
 - `activeClassName` - class that applies when checkbox is checked. By default - `is-active`.
 - `nativeRef` - callback for React `ref`. `Optional`

## Example

```jsx
<Form 
    onSubmit={async (values) => await someRequest(values)}
    validator={new SchemaValidator(ExampleSchema)}
    errorParser={(error) => myCustomParser(error)}
>
    <FormGroup attribute="IHaveRead">
        <Checkbox values={[true, false]} />
    </FormGroup>
</Form>
```
