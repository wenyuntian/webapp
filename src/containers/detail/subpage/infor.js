import React, {Component} from 'react';
import utils from '../../../conmon/js/utils.js';
import Star from '../../../components/star';
import './infor.less';


export default class Infor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      img: '',
      title: '',
      star: 0,
      price: '',
      subTitle: '',
      desc: ''
    }
  }

  componentWillMount() {
    this.loadInfor()
  }

  render() {
    return (
      <div className="detail">
        <div className="detail-show">
          <div className="detail-img">
            <img src={this.state.img} alt="图片"/>
          </div>
          <div className="detail-infor">
            <h1>{this.state.title}</h1>
            <div className="detial-star">
              <Star star={this.state.star}/>
              <span className="price">{this.state.price}</span>
            </div>
            <p>{this.state.subTitle}</p>
          </div>
        </div>
        <div className="detail-describe">
          <p dangerouslySetInnerHTML={{__html: this.state.desc}}></p>
        </div>
      </div>
    )
  }

  loadInfor = (e) => {
    let result = utils.getData('/api/detail/info/1')
    this.handleResult(result);
  }

  handleResult = (result) =>  {
    result.then(value => {
      this.setState({
        img: value.img,
        title: value.title,
        star: value.star,
        price: value.price,
        subTitle: value.subTitle,
        desc: value.desc
      });
    });
  }
};

