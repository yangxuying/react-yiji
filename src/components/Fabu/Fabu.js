import React, { Component } from 'react';
import Bot from '../Bottom/Bot';
import './fabu.css';
class Fabu extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="fabu-wrap">
          <div className="fabu-top">
            上传照片
            <span className="iconfont icon-feiji share" />
          </div>
          <textarea defaultValue="说点什么...." />
          <div className="fabu-pic">
            <span className="iconfont icon-tupian share" />
            <span>点击添加图片</span>
          </div>
          <span className="iconfont icon-xiangji share fabu-xj" />
          <div className="fabu-bot">
            <div className="fabu-bot-l">
              <span
                className="iconfont icon-danseshixintubiao-
share"
              />
              <span>点击获取位置</span>
            </div>
            <div className="fabu-bot-r">
              <span
                className="iconfont icon-tag-fill
 share"
              />
              <span>添加标签</span>
            </div>
          </div>
        </div>
        <Bot />
      </div>
    );
  }
}

export default Fabu;
