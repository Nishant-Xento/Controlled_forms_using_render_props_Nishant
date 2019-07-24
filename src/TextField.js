import React from 'react'
import FieldError from './FieldError'

const labelStyle = {
  display: 'block',
  marginBottom: '8px'
}

const fieldStyle = {
  width: '100%',
  height: '36px',
  border: '1px solid #999',
  fontSize: '16px',
  paddingLeft: '8px'
}

const fieldErrStyle = {
  ...fieldStyle,
  borderColor: 'red'
}

const TextField = ({
  label,
  field: { error, required, touched, ...fieldProps }
}) => (
  <div>
    <label style={labelStyle}>
      {label} <span>*</span>
    </label>

    <input
      type="text"
      {...fieldProps}
      style={touched && error ? fieldErrStyle : fieldStyle}
    />
    {touched && error && <FieldError />}
  </div>
)

export default TextField
