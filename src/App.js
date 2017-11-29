import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './containers/home';
import City from './containers/city';
import Search from './containers/search'
import Detail from './containers/detail'
import Login from './containers/login'
import User from './/containers/user'
import './App.css';

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch> {/*只匹配一次*/}
            <Route exact path="/" component={Home}/> {/*路径为/时匹配首页*/}
            <Route path="/city" component={City}/> {/*路径为/city时匹配城市页面*/}
            <Route path="/search/:category/:keyWord?" component={Search}/> {/*路径为/searchl时匹配详情页面，参数为category和keyWord*/}
            <Route path="/detail/:id" component={Detail}/> {/*路径为/detail时匹配详情页面，参数为商铺id*/}
            <Route path="/login/:router?" component={Login}/> {/*路径为/login时匹配登录页面，参数为可选参数（登录前的页面）*/}
            <Route path="/user" component={User}/> {/*路径为/user时匹配个人中心页面*/}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
};
