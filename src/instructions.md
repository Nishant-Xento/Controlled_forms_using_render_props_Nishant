# Controlled Form

Check out the [final result](https://zw388y3m4.codesandbox.io/)
for visual acceptance criteria.

This app is a little complex, so some rather detailed instructions follow.

1) Create a `ControlledForm` component that does the following:

- controls state for all fields in the form and a general completion status
- accepts the following props:
  - render (required)
  - fields (required) (used to generate starting state)
    ```javascript
    {
      [fieldName]: {
        value: String (optional),
        required: Bool (required)
      }
    }
    ```
  - onSubmit (required)
- provides the following to render function:
  - `fields` (from state)
  - `handlers`
    ```javascript
    {
      onBlur: Function,
      onChange: Function
    }
    ```
  - `isComplete` (all required fields are filled)

2) In *index.js* use `ControlledForm` to create a simple form with 4 fields:

1. First Name (required)
2. Last Name (required)
3. Email (required)
4. Favorite color (optional)

- Pass `ControlledForm` an appropriate `fields` prop
- Pass an onSubmit button that alerts the form values
- Show a submit button that should be disabled when `isComplete` is `false`
- create as many declarative components as you need to handle the fields

Fields should show a label, input and error color + error message when the field
is in an error state (see the final result for details.) A field is in an error
state if it has been touched and has an error.

This is a somewhat naîve implementation of a form that does not
control for field validation. We'll only be handling required errors.
We will also only be considering text fields for simplicity.

## Tips

Track the following things per field:
- value (can have starting value from `fields`, but controlled by change handler)
- required (provided by `fields` prop)
- touched (set to `true` after first blur)
- error (don't track until touched)

The `isComplete` prop should be `true` only if all required fields have
non-empty values. That means a form can be complete on first render, if
all required fields have starting values.

To pretty print an object (like the field state in `onSubmit`), use the following:
```javascript
JSON.stringify(someObj, null, 2)
```