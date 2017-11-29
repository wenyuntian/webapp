import React, {Component} from 'react';
import './style.less'


export default class HomeHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value || ''
    }
  }

  render() {
    return (
      <div className="header-search">
        <i className="icon-search"></i>
        <input 
          value={this.state.value} 
          onChange={this.handleChange} 
          onKeyUp={this.handleKeyUp}
          type="text" 
          placeholder="输入关键字搜索"/>
      </div>
    )
  }

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      value: value
    })
  }

  handleKeyUp = (e) => {
    if(e.keyCode !== 13) {
      return
    }

    let value = this.state.value;
    this.props.enterHandle(value)
  }
};

