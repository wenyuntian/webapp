import React, {Component} from 'react';
import './style.less'

export default class City extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      checkCode: ''
    }
  }

  render() {
    
    return (
      <div className="login">
        <div className="login-username">
          <i className="icon-mobile"></i>
          <input className="phoneNUmber" type="text" placeholder="输入手机号" value={this.state.userName}  onChange={this.changeUserName}/>
        </div>
        <div className="login-checkCode">
          <i className="icon-key"></i>
          <input className="checkCode" type="text" placeholder="输入验证码" value={this.state.checkCode} onChange={this.changeCheckCode}/>
          <span className="send-checkCode" onClick={this.showcheckCode}>发送验证码</span>
        </div>
        <div className="login-button" onClick={this.handleLogin}>登录</div>
      </div>
    )
  }

  showcheckCode = () => {
    // 随机生成验证码
    let checkCode = this.createRandom();
    this.setState({
      checkCode: checkCode
    })
  }

  // 处理登录操作
  handleLogin = () => {
    let checkCode = this.state.checkCode;
    let userName = this.state.userName;

    this.props.handleLogin(userName, checkCode);
  }

  // 根据用户输入改变用户名
  changeUserName = (e) => {
    let userName = e.target.value
    this.setState({
      userName: userName
    })
  }

  // 根据用户输入改变验证码
  changeCheckCode = (e) => {
    let checkCode = e.target.value
    this.setState({
      checkCode: checkCode
    })
  }

  // 随机生成验证码
  createRandom = () => {
    let random = ''
    for(let i=0; i<4; i++){
      random += Math.floor(Math.random()*10);
    }
    return random;
  }
};

