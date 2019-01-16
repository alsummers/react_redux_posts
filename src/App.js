import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Posts from './components/posts'
import PostForm from './components/postForm'
import store from './components/store'
// redux store

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">

            Learn Redux <small>w/ React</small>
        </header>
        <PostForm />
        <hr />
        <Posts />
      </div>
      </Provider>
    );
  }
}

export default App;
