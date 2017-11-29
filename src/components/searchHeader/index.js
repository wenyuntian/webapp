import React, {Component} from 'react';
import SearchInput from '../searchInput'
import './style.less'


export default class HomeHeader extends Component {
  
  render() {
    return (
      <div className="search-header">
        <div className="header-back">
          <i className="icon-angle-left" onClick={this.props.goBackHistory}></i>
        </div>
        <SearchInput
         value={this.props.keyWord || ''}
         enterHandle = {this.props.enterHandle}/>
      </div>
    )
  }
};

