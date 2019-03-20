import React, { Component } from 'react';
import '../App.css';
import {Provider} from 'react-redux'
import Post from '../components/Post'
import Postform from '../components/Postform'
import { createStore, applyMiddleware } from 'redux';

const store = createStore(() => [], {}, applyMiddleware)

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
       <h1>Posts</h1>
       <Postform />
       <Post />
      </div>
      </Provider>
    );
  }
}

export default App;
