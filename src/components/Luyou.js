import React from 'react';
import { Route } from 'react-router-dom';
import Index from './Index/Index';
import Home from './Home/Home';
import Tuijian from './Tuijian/Tuijian';
import Fabu from './Fabu/Fabu';
import Geren from './Geren/Geren';
import Search from './Search/Search';
import XiangQing from './XiangQing/XiangQing';
import Here from './Here/Here';
import XiangQing1 from './XiangQing/XiangQing1';
import Pinglun from './Pinglun/Pinglun';
const Luyou = () => {
  return (
    <div>
      <Route path="/" exact component={Index} />
      <Route path="/home" exact component={Home} />
      <Route path="/ing" exact component={Home} />
      <Route path="/tuijian" exact component={Tuijian} />
      <Route path="/fabu" exact component={Fabu} />
      <Route path="/geren" exact component={Geren} />
      <Route path="/search" exact component={Search} />
      <Route path="/xiangqing/:id" exact component={XiangQing} />
      <Route path="/xiangqing1/:id" exact component={XiangQing1} />
      <Route path="/here" component={Here} />
      <Route path="/pinglun/:id" component={Pinglun} />
    </div>
  );
};
export default Luyou;
