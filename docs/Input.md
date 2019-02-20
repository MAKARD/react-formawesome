# Input

User-interactive component.

*`Input` should be wrapped into `FormGroup`*

## Public interface

### Props

`Input` contains html `<input />` element. All props for `<input />` are valid for `Input`.

Own props:
 - `errorClassName` - class that applies when model attribute is invalid. By default - `has-error`.
 - `focusClassName` - class that applies when user-interactive element have focus. By default - `has-focus`.
 - `valueClassName` - class that applies when model attribute have value. By default - `has-value`.
 - `nativeRef` - callback for React `ref`. `Optional`

## Example

```jsx
<Form 
    onSubmit={async (values) => await someRequest(values)}
    validator={new SchemaValidator(ExampleSchema)}
    errorParser={(error) => myCustomParser(error)}
>
    <FormGroup attribute="surname" validateOn="blur">
        <Input />
    </FormGroup>
</Form>
```
