import React from 'react'
import PropTypes from 'prop-types'

function ClockSvg(props) {
  const { clock, gmtShow } = props

  return (
    <svg
      viewBox="0 0 40 40"
      className="clock-svg"
      id={'clock-svg-' + clock.id}
      role="img"
      aria-label={'An animated clock showing time in ' + clock.city}>
      <circle cx="20" cy="20" r="19" />
      <g className="clock-svg-marks">
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
      </g>
      <g className="clock-svg-hands">
        <line x1="0" y1="0" x2="9" y2="0" className="clock-svg-hour" />
        <line x1="0" y1="0" x2="13" y2="0" className="clock-svg-minute" />
        <line x1="0" y1="0" x2="16" y2="0" className="clock-svg-seconds" />
        <circle cx="20" cy="20" r="0.7" className="clock-svg-pin" />
        <text x="0" y="0" className="clock-svg-text">
          GMT{gmtShow}
        </text>
      </g>
    </svg>
  )
}

ClockSvg.propTypes = {
  /** @param {Object} clock Set of city data for the clock */
  clock: PropTypes.shape({
    /** @param {string} id Identificator for the city data object */
    id: PropTypes.string.isRequired,
    /** @param {string} city Name of the city for the clock */
    city: PropTypes.string.isRequired,
    /** @param {number} gmt Offset / Time zone for the clock */
    gmt: PropTypes.number.isRequired,
  }),
  /** @param {string} gmtShow A label for GMT value of the clock */
  gmtShow: PropTypes.string.isRequired,
}

export default ClockSvg
