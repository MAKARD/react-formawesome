# TextArea

User-interactive component.

*`TextArea` should be wrapped into `FormGroup`*

## Public interface

### Props

`TextArea` contains html `<textarea />` element. All props for `<textarea />` are valid for `TextArea`.

Own props:
 - `errorClassName` - class that applies when model attribute is invalid. By default - `has-error`.
 - `focusClassName` - class that applies when nested user-interactive element have focus. By default - `has-focus`.
 - `nativeRef` - callback for React `ref`. `Optional`

## Example

```jsx
<Form 
    onSubmit={async (values) => await someRequest(values)}
    validator={new SchemaValidator(ExampleSchema)}
    errorParser={(error) => myCustomParser(error)}
>
    <FormGroup attribute="surname" validateOn="blur">
        <TextArea />
    </FormGroup>
</Form>
```
