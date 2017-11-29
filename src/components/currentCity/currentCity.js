import React, {Component} from 'react';
import './style.less'

export default class CurrentCity extends Component {
  render() {
    return (
      <div className="city-current">
        {this.props.title}
      </div>
    )
  }
};

