import React, {Component} from 'react';
import {connect} from 'redux';

class WeatherList extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state) {
//     // "state.weather" is from "reducers/indjex.js/rootReducer"
//     return {weather: state.weather};
// }
function mapStateToProps({weather}) {
    // "state.weather" is from "reducers/indjex.js/rootReducer"
    return {weather};
}

export default connect(mapStateToProps)(WeatherList)


