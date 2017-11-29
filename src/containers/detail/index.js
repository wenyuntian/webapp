import React, {Component} from 'react';
import CityHeader from '../../components/cityHeader/header';
import Infor from './subpage/infor'
import Store from './subpage/store'
import UserComment from './subpage/userCommentList'


export default class Detail extends Component {

  render() {
    let params = this.props.match.params; // 获取地址栏参数
    let id= params.id;    // 获取参数中的id值
    return (
      <div>
        <CityHeader title="商户详情"/>
        <Infor />
        <Store id={id} history={this.props.history}/>
        <UserComment />
      </div>
    )
  }
};

