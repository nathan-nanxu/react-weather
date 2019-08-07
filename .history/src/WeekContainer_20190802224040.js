import React from 'react';
import apiConfig from './apiKeys';

class WeekContainer extends React.Component {
  render() {

    const weatherURL =
    `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apiConfig.owmKey}`

    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default WeekContainer;