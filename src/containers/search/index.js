import React, {Component} from 'react';
import SearchHeader from '../../components/searchHeader';
import SearchList from './subpage/searchList';


export default class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      category: '',
      keyWord: ''
    }
  }

  componentWillMount() {
    // 获取路由中的参数
    const params = this.props.match.params; 
    const category = params.category;
    const keyWord = params.keyWord;

    this.setState({
      category: category,
      keyWord: keyWord
    })
  }

  render() {
    return (
      <div className="search-list">
        <SearchHeader keyWord={this.state.keyWord} goBackHistory={this.goBackHistory} enterHandle={this.enterHandle}/>
        <SearchList/>
      </div>
    )
  }

  // 返回前一页
  goBackHistory = () => {
    let history = this.props.history;
    history.push('/')
  }

  // 按键回车跳转到搜索结果页面
  enterHandle = (value) => {
    const history = this.props.history;
    history.push(`/search/all/${value}`)
  }
};

