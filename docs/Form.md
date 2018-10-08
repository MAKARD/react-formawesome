# Form

Root component that provide context to nested children.

## Public interface

### Props

`Form` contains html `<form/>` element. All props for `<form/>` are valid for `Form`.

Also `Form` represents [FormProvider](https://github.com/MAKARD/react-formawesome-core/blob/master/docs/FormProvider.md) from [react-formawesome-core](https://github.com/MAKARD/react-formawesome-core) package. All props for `FormProvider` are valid for `Form`.

## Example

```tsx
<Form 
    onSubmit={async (values) => await someRequest(values)}
    validator={new SchemaValidator(ExampleSchema)}
    errorParser={(error) => myCustomParser(error)}
>
    ...
</Form>
```
