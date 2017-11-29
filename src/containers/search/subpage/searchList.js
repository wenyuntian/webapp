import React, {Component} from 'react';
import utils from '../../../conmon/js/utils.js';
import CommendList from '../../../components/commendList';
import LoadMore from '../../../components/loadMore/loadMore.js'
import './searchList.less';


export default class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hasMore: false,
      list: [],
      isLoadingMore: false,
    }
  }

  componentWillMount() {

    this.loadfirstPage();
  }

  render() {
    return (
      <div className="search-list">
        <CommendList list={this.state.list}/>
        {this.state.hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMore={this.loadMore}/> : ''}
      </div>
    )
  }

  // 根据关键字获取后台数据
  loadfirstPage = () => {
    let searchResult = utils.getData('/api/search/aaa/123')
    this.handleResult(searchResult);
  }

  // 下拉加载更多
  loadMore = (e) =>  {
    this.setState({
      isLoadingMore: true
    })

    let searchResult = utils.getData('/api/search/aaa/123')
    this.handleResult(searchResult);
  }

  // 处理获取到的promise数据
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

