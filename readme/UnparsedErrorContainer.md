# UnparsedErrorContainer

Component for notify user about errors that cannot be applied to model.

*`UnparsedErrorContainer` should be wrapped into `Form`*

## Public interface

### Props

`UnparsedErrorContainer` contains `<div />` . All props for `<div />` are valid for `UnparsedErrorContainer`.

Own props:
 - `children` - should be a function that returns valid component. `Required`

*If error not exist, `UnparsedErrorContainer` wouldn't render `children`*

*If `Form` prop `handleUnparsedErrors` is falsy, `UnparsedErrorContainer` wouldn't render `children`*

## Example

```jsx
<Form 
    onSubmit={async (values) => await someRequest(values)}
    validator={new SchemaValidator(ExampleSchema)}
    errorParser={(error) => myCustomParser(error)}
    handleUnparsedErrors
>
    <UnparsedErrorContainer>
        {(error) => <p>{error.message}</p>}
    </UnparsedErrorContainer>
</Form>
```
