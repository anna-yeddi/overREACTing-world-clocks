import React from 'react'
import PropTypes from 'prop-types'
import Clock from './Clock'

class Clocks extends React.Component {
  constructor(props) {
    super(props)

    // Set a start time as a state
    this.state = { now: new Date() }

    // Bind remove event handler
    this.handleRemove = this.handleRemove.bind(this)
  }

  componentDidMount() {
    // Set timeout for hands' position to update every second
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    // Clear timeout
    clearInterval(this.timerID)
  }

  // Move seconds hand
  tick() {
    const now = new Date(new Date().getTime())

    this.setState({
      now,
    })
  }

  // Lift state update up
  handleRemove = (id) => {
    this.props.onRemove(id)
  }

  render() {
    return (
      <div className="clock-container">
        {this.props.clocks.map((o) => (
          <Clock
            clock={o}
            now={this.state.now}
            onRemove={this.handleRemove}
            key={o.id}
          />
        ))}
      </div>
    )
  }
}

Clocks.propTypes = {
  /** @param {Array [Object]} clocks Set of objects with city data for clocks */
  clocks: PropTypes.arrayOf(
    PropTypes.shape({
      /** @param {Object {string|number}} clock Set of city data for the clock */
      clock: PropTypes.shape({
        /** @param {string} id Identificator for the city data object */
        id: PropTypes.string.isRequired,
        /** @param {string} city Name of the city for the clock */
        city: PropTypes.string.isRequired,
        /** @param {number} gmt Offset / Time zone for the clock */
        gmt: PropTypes.number.isRequired,
      }),
    })
  ).isRequired,
  /** @param {func} onRemove Function to lift the state up */
  onRemove: PropTypes.func.isRequired,
}

export default Clocks
