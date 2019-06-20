# Validation triggers

Every form field can be validated separately from each other. Only on submit, all fields are validated simultaneously.

There are 4 triggers:

* **blur**
* **focus**
* **change**
* **custom function**

**Custom function** should always return the boolean value. For example: 

```js
<FormGroup attribute="city" validateOn={(values, errors) => {
    // Checks that the country has been filled and validated
    return !!values.country && !errors.country;
}}>
```

[All props description](https://github.com/MAKARD/react-formawesome/blob/master/readme/FormGroup.md)
