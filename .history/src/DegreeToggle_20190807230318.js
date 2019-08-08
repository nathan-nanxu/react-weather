import React from 'react';

const DegreeToggle = ({degreeType, updateForecastDegree}) => {

    updateForecastDegree = event => {
        this.setState({
          degreeType: event.target.value
        }, () => console.log(this.state))
      }
  return (
    <React.Fragment>
    <div className="form-check form-check-inline">
        <input
        className="form-check-input"
        type="radio"
        name="degree-type"
        id="celsius"
        value="celsius"
        onChange={this.updateForecastDegree()}
        checked={degreeType === "celsius"}
        />
        <label className="form-check-label" for="celsius">Celsius</label>
      </div>
      <div className="form-check form-check-inline">
        <input
        className="form-check-input"
        type="radio"
        name="degree-type"
        id="farenheit"
        value="fahrenheit"
        onChange={this.updateForecastDegree()}
        checked={degreeType === "fahrenheit"}
        />
        <label className="form-check-label" for="farenheit">Farenheit</label>
      </div>
    </React.Fragment>
  )
}

export default DegreeToggle;