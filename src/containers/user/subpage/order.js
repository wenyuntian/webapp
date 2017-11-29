import React, {Component} from 'react';
import {connect} from 'react-redux';
import OrderItem from '../../../components/orderItem';
import utils from '../../../conmon/js/utils.js';
import './order.less';


class Order extends Component {

  constructor(props) {
    super(props);

    this.state = {
      orderList: []
    }
  }

  componentDidMount() {
    // 后台获取订单列表数据
    this.getOrderList();
  }

  render() {
    return (
      <div className="user-order">
        <h1>您的订单</h1>
        <ul className="order-list">
          {this.state.orderList.length 
          ? this.state.orderList.map((item, index) => (
            <OrderItem key={index} item={item} handleSubmit={this.handleSubmit}/>
          ))
          : ''}
        </ul>
      </div>
    )
  }

  // 后台获取订单列表数据
  getOrderList = () => {
    // 从redux中获取用户信息
    const userInfor = this.props.userInfor;
    const userName = userInfor.userName || 111;

    // 调用后端获取购买记录的接口
    let result = utils.getData(`/api/orderList/${userName}`)
    this.handleOrderResult(result);
  }

  // 处理后台返回的订单数据
  handleOrderResult = (result) => {
    result.then(value => {
      this.setState({
          orderList: value
        });
    });
  }

  // 用户点击提交按钮评论
  handleSubmit = (comment) => {
    let data = {
      userInfor: this.props.userInfor.userName,
      comment: comment
    }

    // 调用后端提交评论的接口
    let result = utils.postData('/api/userComment', data)

    this.handleCommentResult(result)
  }

  // 提交评论后处理后端返回的状态
  handleCommentResult = (result) => {
    result.then(value => {
      console.log(value)
    });
  }
};

const mapStateToProps = (state) => {
  return ({
    userInfor: state.userInfor
  }
  )
}

export default connect(
  mapStateToProps
)(Order)
