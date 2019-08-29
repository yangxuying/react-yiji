import React, { Component } from 'react';
import './home.css';
import Lunbo from '../MySwiper/Lunbo';
import Lunbo1 from '../MySwiper/Lunbo1';
import { Tabs } from 'element-react';
import 'element-theme-default';
import Bot from '../Bottom/Bot';
import Ing from '../Ing/Ing';
import Will from '../Will/Will';
import { NavLink } from 'react-router-dom';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  render() {
    const { show } = this.state;
    return (
      <div className="home-wrap">
        <div className="home-top">
          <NavLink to="/search">
            <span></span>
          </NavLink>
        </div>
        <Lunbo />
        <Lunbo1 />
        <div className="home-main">
          <div className="tabone">
            <div className="tabtop">
              <Tabs
                style={{
                  backgroundImage: show
                    ? "url('https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E7%99%BB%E5%BD%95/u127.jpg?raw=true')"
                    : "url('https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E7%99%BB%E5%BD%95/u124.jpg?raw=true')"
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
                    <Ing />
                  </div>
                </Tabs.Pane>
                <Tabs.Pane onTabClick={this.change} name="2">
                  <div className="tabmain">
                    <Will />
                  </div>
                </Tabs.Pane>
              </Tabs>
            </div>
          </div>
        </div>
        <Bot />
      </div>
    );
  }
}

export default Home;
