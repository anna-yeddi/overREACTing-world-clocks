import React from 'react'
import PropTypes from 'prop-types'
import FormInput from './FormInput'

function CityForm(props) {
  console.log(props)

  const handleInput = (name, value) => {
    props.onInput(name, value)
  }

  // Lift form state up to update clocks
  const handleSubmit = (e) => {
    // Prevent default submit event
    e.preventDefault()

    props.onSubmit()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-item">
        <FormInput name="city" onInput={handleInput}>
          Enter a city name
        </FormInput>
      </div>
      <div className="form-item">
        <FormInput
          type="number"
          name="gmt"
          label="Time Zone (offset from GMT/UTC)"
          onInput={handleInput}>
          Enter a difference in hours with Greenwich
        </FormInput>
      </div>
      <button type="submit" className="form-item form-cta form-input">
        {props.children}
      </button>
    </form>
  )
}

CityForm.propTypes = {
  /** @param {Object} form State of form fields */
  form: PropTypes.shape({
    /** @param {string} city Name of the city for the clock */
    city: PropTypes.string.isRequired,
    /** @param {number} gmt Offset / Time zone for the clock */
    gmt: PropTypes.number.isRequired,
  }).isRequired,
  /** @param {*} [name] Name of the input control */
  name: PropTypes.any,
  /** @param {func} onInput Function to lift the state up from props */
  onInput: PropTypes.func.isRequired,
  /** @param {func} onSubmit Function to lift the state up from props
   * and update clocks  */
  onSubmit: PropTypes.func.isRequired,
}

export default CityForm
