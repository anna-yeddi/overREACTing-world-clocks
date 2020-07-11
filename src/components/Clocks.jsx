import React from 'react'
import PropTypes from 'prop-types'
import ClockSvg from './ClockSvg'
import ClockBtnRemove from './ClockBtnRemove'

class Clocks extends React.Component {
  constructor(props) {
    super(props)
    // this.state = { ...props.clock }

    // Prepare a label for GMT value
    this.gmtShow =
      ['', '+'][Number(this.props.clock.gmt > 0)] + this.props.clock.gmt

    // Set a start time as a state
    this.state = { now: new Date() }

    // Options for printing the current time:
    this.options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Australia/Sydney',
      timeZoneName: 'short',
    }

    // Bind event handler to update hands position
    this.updateClocks = this.updateClocks.bind(this)

    // Bind remove event handler
    this.handleRemove = this.handleRemove.bind(this)
  }

  componentDidMount() {
    // Update CSS for .clock-svg as hands position
    this.clockSvg = document.getElementById(`clock-svg-${this.props.clock.id}`)
    this.updateClocks()

    // Set timeout for hands' position to update every second
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000)
  }

  // dispatching an action based on state change
  componentDidUpdate(prevProps, prevState) {
    if (prevState.now !== this.state.now) {
      this.updateClocks()
    }
  }

  componentWillUnmount() {
    // Clear timeout
    clearInterval(this.timerID)
  }

  // Move seconds hand
  tick() {
    this.setState({
      now: new Date(),
    })
  }

  updateClocks() {
    // this.timeNow = this.state.now.toUTCString(undefined, this.options)
    this.timeNow = this.state.now.toLocaleTimeString()

    // Variables for setting hands position
    this.showTimeVars = {
      '--start-seconds': this.state.now.getUTCSeconds(),
      '--start-minutes': this.state.now.getUTCMinutes(),
      '--start-hours': this.state.now.getHours(),
    }
    Object.keys(this.showTimeVars).map((key) => {
      this.clockSvg.style.setProperty(key, this.showTimeVars[key])
    })
  }

  // Lift state update up
  handleRemove = (id) => {
    this.props.onRemove(id)
  }

  render() {
    return (
      <div className="clock">
        <h2 className="clock-city">
          {this.props.clock.city}{' '}
          <small className="clock-timezone">(GMT{this.gmtShow})</small>
        </h2>
        <div className="clock-image">
          <ClockSvg clock={this.props.clock} gmtShow={this.gmtShow} />
          <ClockBtnRemove
            id={this.props.clock.id}
            city={this.props.clock.city}
            onRemove={this.handleRemove}
          />
        </div>
        <h3 className="clock-digital">
          {this.timeNow} GMT{this.gmtShow}
        </h3>
      </div>
    )
  }
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
