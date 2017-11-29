import React, {Component} from 'react';
import './loadMore.less'


export default class LoadMore extends Component {

  componentDidMount() {
    let timeOutID;  // 节流器
    let loadFn = this.handleLoadMore;
    let isLoadingMore = this.props.isLoadingMore;
    const loadMoreDom = this.refs.loadMoreDom;  // 通过ref属性拿到dom节点

    function callback() {
      const top = loadMoreDom.getBoundingClientRect().top;  // 加载更多距离顶部的距离
      const windowHeight = window.screen.height;  // 屏幕高度

      // 如果加载更多出现在可视范围内时，就执行加载更多的函数
      if(top && top < windowHeight) {
        if(isLoadingMore) {
          return
        }
        loadFn();
      }
    }

    // 绑定鼠标滚动事件
    window.addEventListener('scroll', () => {
      
      // 当判断为连续滑动鼠标时，清除定时器，不执行加载函数
      if(timeOutID) {
        clearTimeout(timeOutID)
      }

      // 滚动页面时，延迟50执行加载函数
      timeOutID = setInterval(callback, 50)
    })
  }

  render() {
    return (
      <div className="load-more" ref="loadMoreDom">
        {this.props.isLoadingMore ? <span>加载中...</span> : <span className="" onClick={this.handleLoadMore}>加载更多</span>}
      </div>
    )
  }

  handleLoadMore = () => {
    this.props.loadMore()
  }
};

