import React, {Component} from 'react';
import utils from '../../../conmon/js/utils.js';
import UserComment from '../../../components/userComment';
import LoadMore from '../../../components/loadMore/loadMore';
import './userComment.less'


export default class UserCommentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasMore: false,
      list: [],
      isLoading: false
    }
  }

  componentWillMount() {
    this.getComment()
  }

  render() {
    return (
      <div>
        <UserComment list={this.state.list} />
        {this.state.hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMore={this.loadMore}/> : ''}
      </div>
    )
  }


  // 首次加载获取评论数据
  getComment = (e) => {
    let result = utils.getData('/api/detail/commit/1/2')
    this.handleResult(result);
  }

  // 加载更多评论
  loadMore = (e) =>  {
    this.setState({
      isLoadingMore: true
    })

    let result = utils.getData('/api/detail/commit/1/2')
    this.handleResult(result);
  }

  // 处理获取到的评论数据
  handleResult = (result) =>  {
    result.then(value => {
      this.setState({
        hasMore: value.hasMore,
        list: this.state.list.concat(value.list),
        isLoadingMore: false
      });
    });
  }
};

