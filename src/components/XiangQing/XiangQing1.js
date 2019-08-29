import React, { Component } from 'react';
import { connect } from 'react-redux';
import './xiangqing.css';

import { NavLink } from 'react-router-dom';

class XiangQing1 extends Component {
  state = {
    show: false
  };
  goBackPage = () => {
    this.props.history.goBack(); //返回上一页这段代码
  };
  show = () => {
    this.setState({
      show: !this.state.show
    });
  };
  close = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    const { show } = this.state;
    const a = this.props.tuijians.tuijians;
    console.log(a);
    const { id } = this.props.match.params;
    const item = a.find(ele => ele.id === id).zhanshi;
    const item1 = a.find(ele => ele.id === id).comments;
    const cardList = item.map(ele => (
      <div key={ele}>
        <div className="zhanshi-top">
          <img src={ele.top} alt="" />
          <span className="zhanshi-title">展览内容</span>
          <div className="zhanshi-text zhanshi-text-first">{ele.content}</div>
          <img src={ele.authorpic} alt="" />
          <div className="zhanshi-text">{ele.author}</div>
          <div dangerouslySetInnerHTML={{ __html: ele.product }}></div>
        </div>
      </div>
    ));
    const cardComment = item1.map(ele => (
      <li className="commentlist" key={ele.id}>
        <div className="li-top">
          <img src={ele.touxiang} alt="" />
          <div className="li-top-side">
            <span>
              <b>{ele.name}</b>
            </span>
            <span>{ele.time}</span>
          </div>
        </div>
        <span className="comment">{ele.text}</span>
      </li>
    ));
    return (
      <div>
        {cardList}
        <span className="zhanshi-title">展览评论</span>
        <ul className="zhanshi-bot">{cardComment}</ul>
        <span className="return" onClick={this.goBackPage}>
          {'<'}
        </span>
        <div className="xiangqing-bot">
          <div>
            <span className="iconfont icon-xin" />
            <span>关注</span>
          </div>
          <NavLink to="/here">
            <div>
              <span className="iconfont icon-luxian" />
              <span>到这</span>
            </div>
          </NavLink>
          <div onClick={this.show}>
            <span className="iconfont icon-zhuanfa" />
            <span>分享</span>
          </div>
          <NavLink to="/pinglun">
            <div>
              <span className="iconfont icon-xiaoxi" />
              <span>评论</span>
            </div>
          </NavLink>
        </div>
        {/* 遮罩层 */}
        <div
          style={{
            display: show ? 'block' : 'none'
          }}
          className="modal-wrap"
        >
          {/* 遮罩 */}
          <div onClick={this.close} className="modal-mask"></div>
          {/* 内容 */}
          <div className="modal">
            <img
              src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E7%99%BB%E5%BD%95/u213.jpg?raw=true"
              alt=""
            />
            <span onClick={this.close}></span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tuijians: state.tuijians
  };
};
export default connect(mapStateToProps)(XiangQing1);
