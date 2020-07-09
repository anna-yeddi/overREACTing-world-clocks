import React from 'react'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>World Clocks</h1>
      <form className="form">
        <div className="form-item">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            value="Moscow"
            // value={props.city}
            id="city"
            className="form-input"
            required
            // onChange={handleChange}
          />
          {/* <span className="form-input-validity"></span> */}
        </div>
        <div className="form-item">
          <label htmlFor="gmt">Time Zone (GMT)</label>
          <input
            type="text"
            name="gmt"
            value="+3"
            placeholder="+5 or -5"
            // value={props.gmt}
            id="gmt"
            className="form-input"
            required
            // onChange={handleChange}
          />
          <p className="form-input-constraint">
            Start with a plus (+) or minus (-)
            <br />
            sign followed by a number, i.e. "+3"
          </p>
          {/* <span className="form-input-validity"></span> */}
        </div>
        <button type="submit" className="form-item form-cta form-input">
          ADD
        </button>
      </form>
      <div className="watch-container">
        <div className="watch">
          <h2 className="watch-city">
            New York <small className="watch-timezone">(GMT-5)</small>
          </h2>
          <div className="watch-image">
            <svg
              viewBox="0 0 40 40"
              className="watch-svg"
              role="img"
              aria-label="An animated clock showing time in New York">
              <circle cx="20" cy="20" r="19" />
              <g className="watch-svg-marks">
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
              <g className="watch-svg-hands">
                <line x1="0" y1="0" x2="9" y2="0" className="watch-svg-hour" />
                <line
                  x1="0"
                  y1="0"
                  x2="13"
                  y2="0"
                  className="watch-svg-minute"
                />
                <line
                  x1="0"
                  y1="0"
                  x2="16"
                  y2="0"
                  className="watch-svg-seconds"
                />
                <circle cx="20" cy="20" r="0.7" className="watch-svg-pin" />
                <text x="0" y="0" className="watch-svg-text">
                  GMT-5
                </text>
              </g>
            </svg>
            <button
              className="watch-remove-btn"
              // onClick={() => handleRemove(file.id)}
            >
              <i className="material-icons" role="presentation">
                clear
              </i>
              <span className="sr-only">Remove New York</span>
            </button>
          </div>
          <h3 className="watch-digital">08:07:43 am</h3>
        </div>
        <div className="watch">
          <h2 className="watch-city">
            London <small className="watch-timezone">(GMT+0)</small>
          </h2>
          <div className="watch-image"></div>
          <h3 className="watch-digital">01:07:43 pm</h3>
        </div>
      </div>
    </div>
  )
}

export default App
