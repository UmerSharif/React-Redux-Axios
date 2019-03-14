import React, { Component } from 'react';
import '../App.css';
import Post from '../components/Post'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Posts</h1>
       <Post />
      </div>
    );
  }
}

export default App;
