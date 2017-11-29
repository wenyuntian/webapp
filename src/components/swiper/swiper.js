import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactSwipe from 'react-swipe';
import './style.less'


export default class Swiper extends Component {

constructor(prop) {
    super(prop);

    // 初始化轮播图
    this.state = {
      index: 0
    };
  }

  render() {
    // 轮播图基本配置
    let swiperOption = {
      continuous: false,      // 是否自动翻页
      callback: (index) => {  // 每次翻页之后的回调函数
        this.setState({
          index: index
        })
      }
    }

    let swiperList = ['ktv', 'food', 'view', 'flower', 'parcle', 'drink', 'medicine', 'fruit', 'hotel', 'movie']
    return (
      <div className="swiper">
        <ReactSwipe className="carousel" swipeOptions={swiperOption}>
          <div className="swiper-page">
            <ul className="swipe-list">
              {swiperList.map(function(item, index){
                return (
                  <li key={index}>
                    <Link to = {`/search/${item}`}>
                      <i className="icon-picture-o"></i>
                      <p>美食</p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="swiper-page">
            <ul className="swipe-list">
              {swiperList.map(function(item, index){
                return (
                  <li key={index}>
                    <Link to = {`/search/${item}`}>
                      <i className="icon-picture-o"></i>
                      <p>美食</p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="swiper-page">
            <ul className="swipe-list">
              {swiperList.map(function(item, index){
                return (
                  <li key={index}>
                    <Link to = {`/search/${item}`}>
                      <i className="icon-picture-o"></i>
                      <p>美食</p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </ReactSwipe>
        
        <ul className="swiper-switch">
          <li className={this.state.index === 0 ? "selected" : ''}></li>
          <li className={this.state.index === 1 ? "selected" : ''}></li>
          <li className={this.state.index === 2 ? "selected" : ''}></li>
        </ul>
      </div>
    )
  }
};

