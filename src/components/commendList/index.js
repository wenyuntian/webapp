import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.less';


export default class CommendList extends Component {

  render() {
    return (
      <ul className="commend-list">
        {this.props.list.length ? this.props.list.map((item, index) => (
          <Link to={`/detail/${item.id}`} key={index}>
            <li>
              <div className="goods-img">
                <img src={item.img} alt="图片"/>
              </div>
              <div className="goods-infor">
                <p><span className="title">{item.title}</span><span className="distance">{item.distance}</span></p>
                <p>{this.sliceString(item.subTitle)}</p>
                <p><span className="price">￥{item.price}</span><span className="sold">已售:{item.number}</span></p>
              </div>
            </li>
          </Link>
        )) : `加载中...`}
      </ul>
    )
  }

  sliceString = (string) => {
    return  string.length < 12 ? string : `${string.slice(0, 12)}...`
  }
};

