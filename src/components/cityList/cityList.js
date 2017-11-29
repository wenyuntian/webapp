import React, {Component} from 'react';
import './style.less'

export default class CityList extends Component {
  render() {
    let cityList = ['成都', '北京', '西安', '广州', '上海', '杭州', '重庆', '厦门', '武汉', '天津', '南京', '苏州'] // 模拟城市列表数据

    return (
      <div className="city-list">
        <h1>热门城市</h1>
        <ul className="cityList">
          {cityList.map((item, index) => (
            <li onClick={this.handleClick.bind(this, item)} key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }

  handleClick = (newCity) => {
    this.props.changeCity(newCity);
  }
};

