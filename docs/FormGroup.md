# FormGroup

A wrapper component for user-interactive elements (input / select ..ets). 

*`FormGroup` should be wrapped into `Form`*

## Public interface

### Props

`FormGroup` contains html `<div />` element. All props for `<div />` are valid for `FormGroup`.

Also `FormGroup` represents [FormGroupProvider](https://github.com/MAKARD/react-formawesome-core/blob/master/docs/FormGroupProvider.md) from [react-formawesome-core](https://github.com/MAKARD/react-formawesome-core) package. All props for `FormGroupProvider` are valid for `FormGroup`.

Own props:
 - `errorClassName` - class that applies when model attribute is invalid. By default - `is-error`.
 - `focusClassName` - class that applies when nested user-interactive element have focus. By default - `is-focus`.
 - `valueClassName` - class that applies when model attribute have value. By default - `have-value`.

## Example

```jsx
<Form 
    onSubmit={async (values) => await someRequest(values)}
    validator={new SchemaValidator(ExampleSchema)}
    errorParser={(error) => myCustomParser(error)}
>
    <FormGroup attribute="surname" validateOn="blur">
        ...
    </FormGroup>
    <FormGroup attribute="name" validateOn="focus">
        ...
    </FormGroup>
    <FormGroup attribute="phone" validateOn="change">
        ...
    </FormGroup>
    <FormGroup attribute="address" validateOn={(values, errors) => values.address.length === 3}>
        ...
    </FormGroup>
</Form>
```
