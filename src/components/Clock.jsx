import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClockSvg from './ClockSvg'
import ClockBtnRemove from './ClockBtnRemove'
import moment from 'moment'

export default class Clock extends Component {
  constructor(props) {
    super(props)

    // Prepare a label for GMT value
    this.gmtShow =
      this.props.clock.gmt === 0
        ? ''
        : ['', '+'][Number(this.props.clock.gmt > 0)] + this.props.clock.gmt

    // Options for printing the current time:
    this.options = {
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
      // timeZone: 'UTC',
      // timeZone: this.props.clock.gmt,
      // timeZoneName: 'short',
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
  }

  // dispatching an action based on state change
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.now !== this.props.now) {
      this.updateClocks()
    }
  }

  updateClocks() {
    // Calculate time zone requested:
    this.timeLocal = moment().utcOffset()
    this.timeReq = moment()
      .add(this.timeLocal * -1, 'm')
      .add(this.props.clock.gmt, 'h')
      .toDate()

    // Update digital clock
    // this.timeNow = moment(this.timeReq).format('h:mm a')
    this.timeNow = new Intl.DateTimeFormat('default', this.options).format(
      this.timeReq
    )

    // Update analog clock
    // Variables for setting hands position
    this.showTimeVars = {
      '--start-seconds': moment(this.timeReq).seconds(),
      '--start-minutes': moment(this.timeReq).minutes(),
      '--start-hours': moment(this.timeReq).hours(),
    }
    // this.showTimeVars = {
    //   '--start-seconds': this.props.now.getUTCSeconds(),
    //   '--start-minutes': this.props.now.getUTCMinutes(),
    //   '--start-hours': this.props.now.getHours(),
    // }
    Object.keys(this.showTimeVars).map((key) => {
      return this.clockSvg.style.setProperty(key, this.showTimeVars[key])
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
        <h3 className="clock-digital">{this.timeNow}</h3>
      </div>
    )
  }
}

Clock.propTypes = {
  /** @param {Object} clock Set of city data for the clock */
  clock: PropTypes.shape({
    /** @param {string} id Identificator for the city data object */
    id: PropTypes.string.isRequired,
    /** @param {string} city Name of the city for the clock */
    city: PropTypes.string.isRequired,
    /** @param {number} gmt Offset / Time zone for the clock */
    gmt: PropTypes.number.isRequired,
  }),
  /** @param {Data} now Date object */
  now: PropTypes.instanceOf(Date).isRequired,
  /** @param {func} onRemove Function to lift the state up */
  onRemove: PropTypes.func.isRequired,
}
