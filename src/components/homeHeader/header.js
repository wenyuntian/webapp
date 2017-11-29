import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchInput from '../searchInput'
import './style.less'


export default class HomeHeader extends Component {
  
  render() {
    return (
      <div className="header">
        <div className="header-city">
          <Link to="/city">
            <span>{this.props.city}</span>
            <i className="icon-angle-down"></i>
          </Link>
        </div>
        <SearchInput enterHandle = {this.props.enterHandle}/>
        <div className="header-user">
          <Link to="/login">
          <i className="icon-user"></i>
          </Link>
        </div>
      </div>
    )
  }
};

