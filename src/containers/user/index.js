import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserHeader from '../../components/cityHeader/header';
import OrderList from './subpage/order'

class User extends Component {

  render() {
    return (
      <div className="user">
        <UserHeader title="用户中心" backRouter="/" />
        {this.props.userInfor.userName
        ? <OrderList />
        : ''}
        
      </div>
    )
  }

  componentWillMount() {
    // 判断用户是否登录
    this.checkLogin();
  }

  checkLogin = () => {
    const userInfor = this.props.userInfor;
    const userName = userInfor.userName;
    const history = this.props.history;
    
    // 如果用户没有登录，则跳转到登录页面
    if(!userName) {
      history.push('/login')
    }

    return 
  }
};

const mapStateToProps = (state) => {
  return {
    userInfor: state.userInfor  
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

// 连接redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)

