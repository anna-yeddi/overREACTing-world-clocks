import React from 'react'
import PropTypes from 'prop-types'

function FormInput(props) {
  const handleInput = (e) => {
    const { name, value } = e.target

    // Parse value to integer if a number is expected
    if (props.type === 'number') {
      props.onInput(name, parseInt(value, 10))
    } else {
      props.onInput(name, value)
    }
  }

  // Check if visible label text is passed and create one if not
  const inputLabel = props.label
    ? props.label
    : props.name.replace(/^\w/, (str) => str.toUpperCase())

  return (
    <>
      <label htmlFor={props.name}>{inputLabel}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={handleInput}
        id={`${props.name}-input`}
        className="form-input"
        required
      />
      <p className="form-input-constraint" id="gmt-constraint">
        {props.children}
      </p>
      {/* <span className="form-input-validity"></span> */}
    </>
  )
}

FormInput.defaultProps = {
  type: 'text',
}

FormInput.propTypes = {
  /** @param {string} type=text Type of the input field */
  type: PropTypes.string.isRequired,
  /** @param {string} name Name of the input field */
  name: PropTypes.string.isRequired,
  /** @param {string|number} [value] Value set by the input control */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** @param {string} [inputLabel] Visible label for input, if passed */
  inputLabel: PropTypes.string,
  /** @param {func} onInput Function to lift the state up */
  onInput: PropTypes.func.isRequired,
}

export default FormInput
