import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../components/homeHeader/header'
import Swiper from '../../components/swiper/swiper'
import Advertise from './subpage/advertise.js'
import Commend from './subpage/commend.js'


class Home extends Component {
  
  render() {
    // props中的用户信息
    let userInfor = this.props.userInfor
    return (
      <div>
        <Header city = { userInfor.city } enterHandle={this.enterHandle}/>
        <Swiper />
        <Advertise />
        <Commend />
      </div>
    )
  }

  enterHandle = (value) => {
    const history = this.props.history;
    history.push(`/search/all/${value}`)
  }
};

const mapStateToProps = (state) => {
  return (
    state
  )
}

export default connect(
  mapStateToProps
)(Home)
