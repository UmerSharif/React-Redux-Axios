import React, { Component } from "react";
import {connect} from 'react-redux'
import fetchPost from '../actions/postAction'

class Post extends Component {

  componentWillMount() {
    this.props.fetchPost()
  }

  // componentWillMount() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(response => response.json())
  //     .then(data => this.setState({ posts: data }));
  // }
  render() {
    const postdata = this.props.posts
      .filter(data => data.id <= 10)
      .map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ));
    console.log(postdata);
    return <div>{postdata}</div>;
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps,{fetchPost})(Post)
