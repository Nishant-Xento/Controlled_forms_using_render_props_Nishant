import React from 'react'
import { render } from 'react-dom'
import ControlledForm from './ControlledForm'
import TextField from './TextField'
import FormRow from './FormRow'
import './style.css'

const fields = {
  first: { required: true },
  last: { required: true },
  email: { required: true },
  favorite_color: { required: false }
}

const styleSubmitBtn = {
  backgroundColor: 'darkolivegreen',
  border: 'none',
  color: 'white',
  fontSize: '1rem',
  padding: '8px 16px'
}

const styleDisabledSubmitBtn = {
  ...styleSubmitBtn,
  opacity: '0.5'
}

const App = () => (
  <ControlledForm
    fields={fields}
    onSubmit={fields => alert(JSON.stringify(fields, null, 2))}
    render={({ fields, handlers, isComplete }) => (
      <React.Fragment>
        <FormRow>
          <TextField
            label="First Name"
            field={{
              name: 'first',
              ...handlers,
              ...fields.first
            }}
          />
        </FormRow>
        <FormRow>
          <TextField
            label="last Name"
            field={{
              name: 'last',
              ...handlers,
              ...fields.last
            }}
          />
        </FormRow>
        <FormRow>
          <TextField
            label="Email"
            field={{
              name: 'email',
              ...handlers,
              ...fields.email
            }}
          />
        </FormRow>
        <FormRow>
          <TextField
            label="Favorite Color"
            field={{
              name: 'favorite_color',
              ...handlers,
              ...fields.favorite_color
            }}
          />
        </FormRow>
        <button
          style={isComplete ? styleSubmitBtn : styleDisabledSubmitBtn}
          disabled={!isComplete}
        >
          Submit
        </button>
      </React.Fragment>
    )}
  />
)

render(<App />, document.getElementById('root'))
