import React, {Component} from 'react';
import utils from '../../../conmon/js/utils.js';
import CommendList from '../../../components/commendList'
import LoadMore from '../../../components/loadMore/loadMore.js'
import './commend.less'


export default class Commend extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasMore: false,
      list:[],
      isLoadingMore: false,
      page: 0
    }
  }

  componentWillMount() {
    this.loadFirstPage()
  }

  render() {
    return (
      <div className="commend">
        <h1 className="commend-title">猜你喜欢</h1>
        <CommendList list={this.state.list} />
        
        {this.state.hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMore={this.loadMore}/> : ''}
      </div>
    )
  }

  loadFirstPage = () => {
    let result = utils.getData('/api/list/北京/2#/')
    this.handleResult(result);
  }

  loadMore = () =>  {
    this.setState({
      isLoadingMore: true
    })

    let page = this.state.page
    let result = utils.getData('/api/list/北京/2#/')
    this.handleResult(result);

    this.setState({
      page: page + 1
    })
  }

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

