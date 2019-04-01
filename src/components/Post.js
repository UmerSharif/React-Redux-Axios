import React, { Component } from "react";
import {connect} from 'react-redux'
import {fetchPost} from '../actions/postAction'
import PropTypes from 'prop-types';

class Post extends Component {

  componentWillMount() {
    this.props.fetchPost()
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  // componentWillMount() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(response => response.json())
  //     .then(data => this.setState({ posts: data }));
  // }
  render() {
    const postdata = this.props.posts
      .filter(data => data.id <= 10) // remove this condition if you want to see the new added post
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

Post.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps,{fetchPost})(Post)
