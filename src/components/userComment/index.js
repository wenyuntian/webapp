import React, {Component} from 'react';
import Star from '../star';
import './style.less'


export default class UserComment extends Component {

  render() {
    return (
      <div className="userComment">
        <h1>用户点评</h1>
        <ul className="userComment-list">
          {this.props.list.length ? this.props.list.map((item, index) => (
            <li key={index}>
              <h1>
                <i className="icon-user"></i>
                {item.username}
              </h1>
              <div>
                <Star star={item.star}/>
              </div>
              <p>{item.comment}</p>
            </li>
          )) : `暂无用于点评...`}
        </ul>
      </div>
    )
  }
};

