import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temparture</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather}; // ES6 {weather } === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
