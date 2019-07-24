import React from 'react'

const FieldError = () => (
  <span
    style={{
      color: 'red',
      display: 'block',
      fontSize: '13px',
      marginTop: '8px'
    }}
  >
    {'This field is required'}
  </span>
)

export default FieldError
