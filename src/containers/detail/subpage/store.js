import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import StoreComponent from '../../../components/store';
import * as storeActionsFromFile from '../../../action/store';
import './store.less';


class Store extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      isStore: false,
    }
  }

  componentDidMount() {
    // 验证当前商户是否被收藏
    this.checkIsStore();
  }

  render() {
    return (
      <div className="store">
        <StoreComponent handleBuy={this.handleBuy} handleStore={this.handleStore} isStore={this.state.isStore}/>
      </div>
    )
  }

  // 验证当前商户是否被收藏
  checkIsStore = () => {
    const id = this.props.id;
    const store = this.props.store;

    store.some(item => {
      if(item.id === id) {
        this.setState({
          isStore: true
        })
        // 跳出循环
        return true
      }
      return true
    })
  }

  // 购买事件
  handleBuy = () => {
    let isLogin = this.checkLogin();  //判断用户是否登录

    if(isLogin) {
      // 执行购买逻辑
      this.props.history.push('/user')

    }
    else { 
      return 
    }
  }

  // 收藏事件
  handleStore = () => {
    let isLogin = this.checkLogin();

    if(isLogin) {
      // 执行收藏逻辑
      const id = this.props.id;
      const storeActions = this.props.storeActions;

      // 如果商户已经被收藏
      if(this.state.isStore) {
        storeActions.remove({id: id})
      }
      // 如果商户未被收藏
      else {
        storeActions.add({id: id})
      }

      this.setState({
        isStore: !this.state.isStore
      })
    }
    else { 
      return 
    }
  }

  checkLogin = () => {
    const id = this.props.id;
    const userInfor = this.props.userInfor;

    if(!userInfor.userName){

      this.props.history.push(`/login/${encodeURIComponent(`/detail/${id}`)}`)
      return false;
    }
    else {
      return true;
    }
  }
};

const mapStateToProps = (state) => {
  return {
    store: state.storeList,
    userInfor: state.userInfor
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeActions: bindActionCreators(storeActionsFromFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Store)

