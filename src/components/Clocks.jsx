import React from 'react'
import PropTypes from 'prop-types'
import ClockSvg from './ClockSvg'
import ClockBtnRemove from './ClockBtnRemove'

function Clocks(props) {
  const { clock } = props

  // Prepare a label for GMT value
  const gmtShow = clock.gmt >= 0 ? 'GMT+' + clock.gmt : 'GMT' + clock.gmt

  // Lift state update up
  const handleRemove = (id) => {
    props.onRemove(id)
  }

  // Capture and store the current time:
  const now = new Date(),
    options = {
      // day: 'numeric',
      // month: 'long',
      // weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
    },
    timeNow = now.toLocaleString(undefined, options),
    timeNowHr = now.getUTCHours(),
    timeNowMin = now.getUTCMinutes(),
    timeNowSec = now.getUTCSeconds()

  // Set a start time
  const startTime = {
    '--start-seconds': timeNowSec,
    '--start-minutes': timeNowMin,
    '--start-hours': timeNowHr,
  }

  const clockSvg = document.getElementById('clock-svg-00')

  console.log(clockSvg)

  // Update CSS for .clock-svg
  const addTimeToClock = () =>
    Object.keys(startTime).map((key) => {
      document.documentElement.style.setProperty(key, startTime[key])
    })

  console.log(timeNowHr, timeNowMin, typeof timeNowSec)

  return (
    <div className="clock-container">
      <div className="clock">
        <h2 className="clock-city">
          {clock.city} <small className="clock-timezone">({gmtShow})</small>
        </h2>
        <div className="clock-image">
          <ClockSvg clock={clock} gmtShow={gmtShow} />
          <ClockBtnRemove
            id={clock.id}
            city={clock.city}
            onRemove={handleRemove}
          />
        </div>
        <h3 className="clock-digital">{timeNow}</h3>
      </div>
    </div>
  )
}

Clocks.propTypes = {
  /** @param {Object} clock Set of city data for the clock */
  clock: PropTypes.shape({
    /** @param {string} id Identificator for the city data object */
    id: PropTypes.string.isRequired,
    /** @param {string} city Name of the city for the clock */
    city: PropTypes.string.isRequired,
    /** @param {number} gmt Offset / Time zone for the clock */
    gmt: PropTypes.number.isRequired,
  }),
  /** @param {func} onRemove Function to lift the state up */
  onRemove: PropTypes.func.isRequired,
}

export default Clocks
