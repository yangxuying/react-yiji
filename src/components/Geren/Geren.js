import React, { Component } from 'react';
import Bot from '../Bottom/Bot';
import './geren.css';
import { Tabs } from 'element-react';
import 'element-theme-default';

class Geren extends Component {
  goBackPage = () => {
    this.props.history.goBack(); //返回上一页这段代码
  };
  state = {
    yixiangs: [
      {
        id: '121',
        src:
          'https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/%E4%B8%AA%E4%BA%BA%E9%A1%B5-%E9%A6%96%E9%A1%B5_04.jpg?raw=true',
        read: 11
      },
      {
        id: '122',
        src:
          'https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/%E4%B8%AA%E4%BA%BA%E9%A1%B5-%E9%A6%96%E9%A1%B5_06.jpg?raw=true',
        read: 9
      },
      {
        id: '123',
        src:
          'https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/%E4%B8%AA%E4%BA%BA%E9%A1%B5-%E9%A6%96%E9%A1%B5_08.jpg?raw=true',
        read: 49
      }
    ],
    yuanchuangs: [
      'https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/%E4%B8%AA%E4%BA%BA%E9%A1%B5-%E9%A6%96%E9%A1%B5_13.jpg?raw=true',
      'https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/%E4%B8%AA%E4%BA%BA%E9%A1%B5-%E9%A6%96%E9%A1%B5_15.jpg?raw=true'
    ],
    show: true,
    change: false,
    changed: false
  };
  change = () => {
    this.setState({
      change: !this.state.change
    });
  };
  changed = () => {
    this.setState({
      changed: !this.state.changed
    });
    console.log(111);
  };
  render() {
    const { show, yixiangs, yuanchuangs, change, changed } = this.state;
    const yixiang = yixiangs.map(ele => (
      <div key={ele.id}>
        <img src={ele.src} alt="" />
        <span>订阅/{ele.read}</span>
      </div>
    ));
    const yuanchuang = yuanchuangs.map(ele => (
      <img key={ele} src={ele} alt="" />
    ));
    return (
      <div
        style={{
          marginLeft: change ? '-10.8rem' : '0'
        }}
        className="geren-wrap"
      >
        <div className="gerenone">
          <div className="geren-top">
            <div className="touxiang">
              <img
                onClick={this.changed}
                src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1864942380,1660582897&fm=26&gp=0.jpg"
                alt=""
              />
              <span>杨旭莹</span>
            </div>
            <div className="touxiang-xinxi">
              <div>
                <span>关注</span>
                <span>11</span>
              </div>
              <div>
                <span>发布</span>
                <span>9</span>
              </div>
              <div>
                <span>访客</span>
                <span>49</span>
              </div>
            </div>
            <span className="shezhi" onClick={this.change}></span>
            <span className="return" onClick={this.goBackPage}></span>
          </div>
          <div className="geren-main">
            <div className="yixiang">
              <div className="yixiang-top">
                <span>艺象云集</span>
                <span>关注 ></span>
              </div>
              <div className="yixiang-bot">{yixiang}</div>
            </div>
          </div>
          <div className="geren-bot">
            <Tabs
              style={{
                backgroundImage: show
                  ? "url('https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u334_02.jpg?raw=true')"
                  : "url('https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u334_02.jpg?raw=true')"
              }}
              activeName="2"
              onTabClick={() => {
                this.setState({
                  show: !this.state.show
                });
              }}
            >
              <Tabs.Pane onTabClick={this.change} name="1">
                <div className="tabmain yuanchuang">{yuanchuang}</div>
              </Tabs.Pane>
              <Tabs.Pane onTabClick={this.change} name="2">
                <div className="tabmain yuanchuang">bb</div>
              </Tabs.Pane>
            </Tabs>
          </div>

          <Bot />
        </div>
        <div className="ot-wrap">
          <div className="gerentwo">
            <img
              src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u358_01.jpg?raw=true"
              alt=""
            />
            <ul className="grtwo-top">
              <li>
                <span>自动离线缓存</span>
                <span>开/关</span>
              </li>
              <li>
                <span>W-Fi状态下自动离线缓存高清作品</span>
                <span>></span>
              </li>
              <li>
                <span>使用流量状态下提醒</span>
                <span>开/关</span>
              </li>
            </ul>
            <ul>
              <li>消息推送</li>
              <li>意见反馈</li>
              <li>当前版本</li>
              <li>关于艺集</li>
            </ul>
            <img
              src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u358_03.jpg?raw=true"
              alt=""
            />
            <span
              onClick={() =>
                this.setState({
                  change: !this.state.change
                })
              }
              className="grtwo-return"
            ></span>
          </div>

          <div
            style={{
              marginLeft: changed ? '-10.8rem' : '0',
              zIndex: changed ? '999' : '1',
              display: changed ? 'block' : 'none'
            }}
            className="gerenthree"
          >
            <img
              src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u358_01.jpg?raw=true"
              alt=""
            />
            <span
              onClick={() =>
                this.setState({
                  changed: !this.state.changed
                })
              }
              className="grtwo-return"
            ></span>
            <ul className="grtwo-top">
              <li>
                <span>自动离线缓存</span>
                <span>开/关</span>
              </li>
              <li>
                <span>W-Fi状态下自动离线缓存高清作品</span>
                <span>></span>
              </li>
              <li>
                <span>使用流量状态下提醒</span>
                <span>开/关</span>
              </li>
            </ul>
            <ul>
              <li>消息推送</li>
              <li>意见反馈</li>
              <li>当前版本</li>
              <li>关于艺集</li>
            </ul>
            <img
              src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u364_02.jpg?raw=true"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Geren;
