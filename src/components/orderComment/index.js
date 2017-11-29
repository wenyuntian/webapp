import React, {Component} from 'react';
import './style.less'


export default class Comment extends Component {

  render() {
    
    return (
      <div className="order-comment">
        <textarea placeholder="感谢您为商品点评" ref="userComment"></textarea>
        <div className="button-menu">
          <input type="button" value="提交" className="submit-comment" onClick={this.handleSubmit} />
          <input type="button" value="取消" className="cancle-commit" onClick={this.props.handleClick} />
        </div>
      </div>
    )
  }

  handleSubmit = () => {
    let userComment = this.refs.userComment.value.trim()

    if(userComment) {
      this.props.handleSubmit(userComment)
    }
    
    else {
      return
    }
  }
};

