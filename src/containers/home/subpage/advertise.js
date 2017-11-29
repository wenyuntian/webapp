import React, {Component} from 'react';
import utils from '../../../conmon/js/utils.js';
import './advertise.less'


export default class Advertise extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    utils.getData('/api/ad')
    .then(value => {
      this.setState({
          data: value
        });
    });
  }

  render() {
    return (
      <div className="advertise">
        <h1>超值特惠</h1>
        <ul className="advertise-list">
          {this.state.data.length ? this.state.data.map((item, index) => (
            <li className="advertise-item" key={index}>
              <a href="#">
                <img src={item.img} alt=""/>
              </a>
            </li>
          )) : `加载中...`}
        </ul>
      </div>
    )
  }
};

