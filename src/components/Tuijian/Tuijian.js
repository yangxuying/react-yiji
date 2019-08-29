import React, { Component } from 'react';
import Bot from '../Bottom/Bot';
import { Tabs } from 'element-react';
import 'element-theme-default';
import Zhan from './Zhan';
import Wen from './Wen';
class Tuijian extends Component {
  state = { show: true };
  render() {
    const { show } = this.state;
    return (
      <div>
        <div className="home-top" />
        <Tabs
          style={{
            backgroundImage: show
              ? "url('https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/u302.jpg?raw=true')"
              : "url('https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/u300.jpg?raw=true')"
          }}
          activeName="2"
          onTabClick={() => {
            this.setState({
              show: !this.state.show
            });
          }}
        >
          <Tabs.Pane onTabClick={this.change} name="1">
            <div className="tabmain">
              <Zhan />
            </div>
          </Tabs.Pane>
          <Tabs.Pane onTabClick={this.change} name="2">
            <div className="tabmain">
              <Wen />
            </div>
          </Tabs.Pane>
        </Tabs>
        <Bot />
      </div>
    );
  }
}

export default Tuijian;
