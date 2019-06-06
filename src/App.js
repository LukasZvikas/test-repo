import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: '' };
  }

  async componentDidMount() {
    const postArr = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postArr.json();
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
    console.log('state', posts);
    return <div className="App" />;
  }
}

export default App;
