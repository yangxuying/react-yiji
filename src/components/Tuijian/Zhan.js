import React, { Component } from 'react';
import '../Ing/ing.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
class Zhan extends Component {
  state = { change: true };
  changeheart = event => {
    this.setState({
      change: !this.state.change
    });
  };
  render() {
    const tuijians = this.props.tuijians.tuijians;
    const { change } = this.state;
    const cardList = tuijians
      .filter(item => item.type === 'zhan')
      .map(ele => (
        <NavLink key={ele.id} to={`/xiangqing1/${ele.id}`}>
          <div className="zhuanfa-wrap">
            <img src={ele.src} alt="" />
            <div className="zhuanfa">
              <span className="iconfont icon-zhuanfa" />
              <div className="zhuanfa-right">
                <div>
                  <span
                    onClick={event => this.changeheart(event)}
                    style={{
                      color: change ? '#c1372c' : '#fff'
                    }}
                    className="iconfont icon-xin"
                  />
                  <span className="cards-text">{ele.heart}</span>
                </div>
                <div>
                  <span className="iconfont icon-yanjing" />
                  <span className="cards-text">{ele.eye}</span>
                </div>
                <div>
                  <span className="iconfont icon-xiaoxi" />
                  <span className="cards-text">{ele.comment}</span>
                </div>
              </div>
            </div>
            <div className="day">剩余{ele.day}天</div>
          </div>
        </NavLink>
      ));
    return <div>{cardList}</div>;
  }
}
const mapStateToProps = state => {
  return {
    tuijians: state.tuijians
  };
};
export default connect(mapStateToProps)(Zhan);
