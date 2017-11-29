import React, {Component} from 'react';
import {connect} from 'react-redux';
import CityHeader from '../../components/cityHeader/header'
import CurrentCity from '../../components/currentCity/currentCity'
import CityList from '../../components/cityList/cityList'
import localStorage from '../../conmon/js/localStorage.js';
import { changeCity } from '../../action/city'  // 中改变城市的action

class City extends Component {
  render() {
    const userInfor = this.props.userInfor;

    return (
      <div>
        <CityHeader title="选择城市"/>
        <CurrentCity title={userInfor.city}/>
        <CityList changeCity={this.props.changeCityFn.bind(this)}/>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    userInfor: state.userInfor  
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    // 改变城市函数
    changeCityFn: function(newCity) {
      if(newCity == null) {
        return 
      }

      // 将city更新到localStorage
      localStorage.setItem('CITY_NAME', newCity)

      // 更改redux中的userInfor
      dispatch(changeCity(newCity))

      // 跳转到首页
      const history = this.props.history
      history.push('/') 
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)

