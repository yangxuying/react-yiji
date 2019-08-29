import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Pinglun.css';
import { focus, addComment } from '../../store/actions';
class Pinglun extends Component {
  state = { val: '' };
  goBackPage = () => {
    this.props.history.goBack(); //返回上一页这段代码
  };
  change = event => {
    this.setState({
      comment: event.target.value
    });
    console.log(this.state.comment);
  };
  addcomment = (e, postId) => {
    const { val } = this.state;
    if (e.keyCode === 13) {
      this.props.addComment({
        postId,
        id: new Date().getTime(),
        text: val,
        touxiang:
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1864942380,1660582897&fm=26&gp=0.jpg',
        name: '杨旭莹',
        time: '2019.08.26'
      });
    }
    // else {
    //   alert('请输入有效内容');
    // }
  };
  render() {
    const postId = this.props.match.params.id;

    const { comments } = this.props;
    const postItem = comments.cards.find(ele => ele.id === postId);
    return (
      <div className="pinglun-wrap">
        <div className="pinglun-top">
          <span onClick={this.goBackPage}>{'<'}</span>
          <span onClick={() => this.addComment(this.state.comment)}>评论</span>
          <span className="iconfont icon-feiji" />
        </div>
        <textarea
          onChange={event => {
            this.setState({
              val: event.target.value
            });
          }}
          onKeyDown={event => {
            this.addcomment(event, postItem.id);
          }}
        ></textarea>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};
export default connect(
  mapStateToProps,
  { focus, addComment }
)(Pinglun);
