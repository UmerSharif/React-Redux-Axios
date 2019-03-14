import React, { Component } from 'react';
import '../App.css';
import Post from '../components/Post'
import Postform from '../components/Postform'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Posts</h1>
       <Postform />
       <Post />
      </div>
    );
  }
}

export default App;
