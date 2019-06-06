import React, { Component } from 'react';
import Post from './components/post';
import Header from './components/header';
import CommentForm from './components/commentForm';
import PostContext from './components/postContext';
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

  setNewPostState(newPostState) {
    this.setState({ posts: newPostState });
  }

  renderPosts(posts) {
    return posts.map(({ userId, id, title, body }) => (
      <Post key={id} userId={userId} id={id} title={title} body={body} />
    ));
  }

  render() {
    const { posts } = this.state;
    return posts ? (
      <div className="App" style={{ marginTop: '100px' }}>
        <Header />
        <PostContext.Provider
          value={{
            posts,
          }}
        >
          <CommentForm
            lastId={posts.length - 1}
            setNewPostState={newPostState => this.setNewPostState(newPostState)}
          />
        </PostContext.Provider>
        <div className="row d-flex justify-content-center">
          {this.renderPosts(posts)}
        </div>
      </div>
    ) : (
      <div>Loading</div>
    );
  }
}

export default App;
