import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './search.css';
class Search extends Component {
  state = {};
  render() {
    return (
      <div className="search-wrap">
        <div className="search-top">
          <span className="iconfont icon-sousuo" />
          <input type="text" />
          <NavLink to="/home">
            <span className="iconfont icon-cross" />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Search;
