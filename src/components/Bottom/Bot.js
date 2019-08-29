import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './bot.css';
class Bot extends Component {
  state = {};
  render() {
    return (
      <div className="home-bot">
        <div className="box">
          <NavLink exact activeClassName="active" to="/home">
            <span className="iconfont icon-xin share" />
            <span>展讯</span>
          </NavLink>
        </div>
        <div className="box">
          <NavLink activeClassName="active" to="/tuijian">
            <span className="iconfont icon-xiangji share" />
            <span>推荐</span>
          </NavLink>
        </div>
        <div className="box">
          <NavLink activeClassName="active" to="/fabu">
            <span className="iconfont icon-feiji share" />
            <span>发布</span>
          </NavLink>
        </div>
        <div className="box">
          <NavLink activeClassName="active" to="/geren">
            <span className="iconfont icon-geren share" />
            <span>个人</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Bot;
