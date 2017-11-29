import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import './header.less'

class City extends Component {
  render() {
    return (
      <div className="city">
        <h1><i className="icon-angle-left" onClick={this.clickHandle}></i>{this.props.title}</h1>
      </div>
    )
  }

  clickHandle = () => {

    const backRouter = this.props.backRouter;

    // 如果父组件传了backRouter
    if(backRouter) {
      let history = this.props.history

      history.push(`${backRouter}`)
    }
    else {
      window.history.back()
    }
  }
};

export default withRouter(City)

