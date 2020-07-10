import React from 'react'
import PropTypes from 'prop-types'

function ClockBtnRemove(props) {
  const { id, city } = props

  const handleRemove = () => {
    props.onRemove(id)
  }

  return (
    <button className="clock-remove-btn" onClick={() => handleRemove()}>
      <i className="material-icons" role="presentation">
        clear
      </i>
      <span className="sr-only">Remove {city}</span>
    </button>
  )
}

ClockBtnRemove.propTypes = {
  /** @param {string} id Identificator for the city data object */
  id: PropTypes.string.isRequired,
  /** @param {string} city Name of the city for the clock */
  city: PropTypes.string.isRequired,
  /** @param {func} onRemove Function to lift the state up */
  onRemove: PropTypes.func.isRequired,
}

export default ClockBtnRemove
