import React, {Component} from 'react';
import './style.less'


export default class Star extends Component {

  render() {
    let starArr = [1, 2, 3, 4, 5];  // 一组星数量
    let starDegree = this.props.star;  // 评星等级
    let lightClass = '';  // 高亮显示星背景
    return (
      <div className="star">
        {starArr.map((item, index) => {
          lightClass =  (starDegree % 5) >= item ? 'light' : '';  
          return <i key={index} className={`icon-star ${lightClass}`}></i>
        })} 
      </div>
    )
  }
};

