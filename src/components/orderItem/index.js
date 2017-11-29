import React, {Component} from 'react';
import Comment from '../orderComment';
import './style.less';


export default class OrderList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      status: false,
      isComment: this.props.item.isComment
    }
  }
  render() {
    let item = this.props.item;
    return (
      <div>
        <li className="order-li">
          <div className= "order-item">
            <div className="order-img">
              <img src={item.img} alt="图片" />
            </div>
            <div className="order-detail">
              <p>商户：{item.saler}</p>
              <p>数量：{item.number}</p>
              <p>付款金额：{item.price}</p>
            </div>
          </div>
          <div className="comment-button">
            {
              // 如果正在评论，则不显示评价按钮
              this.state.status
              ? ''
              // 否则判断是否为已评价
              : this.state.isComment 
                  ? <input type="button" value="已评价" className='active'/>
                  : <input type="button" value="评价" onClick={this.handleClick}/>
                
            }
            
          </div>
        </li>
        {this.state.status
          ? <Comment handleClick={this.handleClick} handleSubmit={this.handleSubmit}/>
          : ''
        }
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      status: !this.state.status
    })
  }

  handleSubmit = (comment) => {
    this.props.handleSubmit(comment);

    this.setState({
      status: !this.state.status,
      isComment: !this.state.isComment
    })
  }
};

