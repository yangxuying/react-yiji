import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
class Lunbo extends Component {
  state = {};
  componentDidMount() {
    new Swiper('.IndexSwiper .swiper-container ', {
      touchRatio: 0.5,
      loop: true,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }
  render() {
    return (
      <div className="IndexSwiper">
        <div className="swiper-container indexwrap">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E7%99%BB%E5%BD%95/u62.jpg?raw=true"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E7%99%BB%E5%BD%95/u65.jpg?raw=true"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E7%99%BB%E5%BD%95/u68.jpg?raw=true"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lunbo;
