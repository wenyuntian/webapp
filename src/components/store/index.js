import React, {Component} from 'react';
import './style.less'


export default class Star extends Component {

  render() {
    
    return (
      <div className="store-items">
        <input className={this.props.isStore ? 'active' : ''} type="button" value={this.props.isStore ? '已收藏' : '收藏'} onClick={this.props.handleStore}/>
        <input type="button" value="购买" onClick={this.props.handleBuy} />
      </div>
    )
  }
};

