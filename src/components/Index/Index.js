import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import './index.css';
import Auth from './Auth';
class Index extends Component {
  state = {
    user_name: '',
    user_pwd: ''
  };
  componentDidMount() {
    new Swiper('.swiper-container', {
      touchRatio: 0.5
    });
  }
  setUserInfo(event, key) {
    let obj = {};
    obj[key] = event.target.value;

    this.setState(obj);
  }
  // constructor() {
  //   this.isLogin = false; //是否登录
  // }
  // login(user_name, user_pwd, callback) {
  //   if (user_name === 'jack' && user_pwd === '123') {
  //     this.isLogin = true;
  //     callback(); //登录成功，调用回调函数
  //   } else {
  //     alert('登录失败');
  //   }
  // }
  render() {
    return (
      <div className="swiper-container indexwrap">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E5%BC%95%E5%AF%BC%E9%A1%B5/u1.jpg?raw=true"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E5%BC%95%E5%AF%BC%E9%A1%B5/u3.jpg?raw=true"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E5%BC%95%E5%AF%BC%E9%A1%B5/u5.jpg?raw=true"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E5%BC%95%E5%AF%BC%E9%A1%B5/u8.jpg?raw=true"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E5%BC%95%E5%AF%BC%E9%A1%B5/u10.jpg?raw=true"
              alt=""
            />
          </div>
          <div className="swiper-slide lastimg">
            <div className="login-top">
              <div>
                <input
                  type="text"
                  placeholder="点击输入手机号/Email登录"
                  onChange={e => {
                    this.setUserInfo(e, 'user_name');
                  }}
                />
                <input
                  type="password"
                  placeholder="输入密码"
                  onChange={e => {
                    this.setUserInfo(e, 'user_pwd');
                  }}
                />
              </div>
              {/* onClick=
              {() => {
                alert(this.state.user_name + ':' + this.state.user_pwd);
              }} */}
              <div className="login">
                <span
                  onClick={() => {
                    let auth = new Auth();
                    auth.login(
                      this.state.user_name,
                      this.state.user_pwd,
                      () => {
                        this.props.history.push('/home');
                      }
                    );
                  }}
                >
                  登录
                </span>
                <span>注册</span>
              </div>
            </div>
            <div className="login-mid">
              <span className="iconfont icon-tongyi" />
              <span>
                <span className="firstspan">登录或注册即同意艺集</span>
                用户服务协议
              </span>
            </div>
            <div className="login-bot">
              <div>
                <span className="iconfont icon-weibo share" />
                <span>微博</span>
              </div>
              <div>
                <span className="iconfont icon-weixin share" />
                <span>微信</span>
              </div>
              <div>
                <span className="iconfont icon-qq share" />
                <span>QQ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Index;
