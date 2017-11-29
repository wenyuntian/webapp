import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../components/cityHeader/header'
import LoginComponent from '../../components/loginComponent'
import { userLogin } from '../../action/login';  //登录的action


class Login extends Component {

  render() {
    return (
      <div>
        <Header title="登录" backRouter="/" />
        <LoginComponent handleLogin={this.handleLogin}/>
      </div>
    )
  }

  componentWillMount() {
    // 判断用户是否已经登录
    this.checkLogin()
  }

  checkLogin = () => {
    const userInfor = this.props.userInfor
    const userName = userInfor.userName

    if(userName) {
      const history = this.props.history;
      history.push('/user')
    }
  }

  handleLogin = (userName, checkCode) => {
    if(this.checkUser(userName, checkCode)) {   // 用户名符合要求

      // 将用户信息保存到redux中
      this.props.userLogin(userName);
      
      // 获取路由中的router参数
      const params = this.props.match.params;
      const router = params.router;

      const history = this.props.history;
      if(router) {
        history.push(`${decodeURIComponent(router)}`)
      }
      else {
        history.push('/user')
      }
    }
    else {
      return false;
    }
  }

  // 检查用户用户输入合法性
  checkUser = (userName, checkCode) => {
    // 手机号不正确
    if(userName.length !== 11){
      return false;
    }
    // 验证码不正确
    else if(!checkCode || checkCode.length !== 4){
      return false
    }

    return true
  }
};



const mapStateToProps = (state) => {
  return ({
    userInfor: state.userInfor
  }
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: function(data) {
       dispatch(userLogin(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
