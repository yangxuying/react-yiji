import React, { Component } from 'react';
import './ing.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
class Ing extends Component {
  state = {
    change: true
  };
  changeheart = event => {
    this.setState({
      change: !this.state.change
    });
  };
  render() {
    const cards = this.props.comments.cards;
    console.log(cards);
    const { change } = this.state;
    const cardList = cards
      .filter(item => item.type === 'ing')
      .map(ele => (
        <NavLink key={ele.id} to={`/xiangqing/${ele.id}`}>
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
    comments: state.comments
  };
};
export default connect(mapStateToProps)(Ing);
