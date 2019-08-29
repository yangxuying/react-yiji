import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import './lunbo1.css';
class Lunbo1 extends Component {
  state = {};
  componentDidMount() {
    new Swiper('.IndexMinSwiper .swiper-container ', {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true
    });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   new Swiper('.swiper-container1', {
  //     touchRatio: 0.5,
  //     loop: true,
  //     slidesPerView: 2.4
  //   });
  // }
  render() {
    return (
      <div className="IndexMinSwiper">
        <div className="swiper-container swiper-min">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u97_01.jpg?raw=true"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u97_03.jpg?raw=true"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u97_05.jpg?raw=true"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u97_07.jpg?raw=true"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u97_09.jpg?raw=true"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u97_11.jpg?raw=true"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lunbo1;
