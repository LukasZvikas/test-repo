import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';
import PostContext from './postContext';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: '', title: '', body: '' };
  }

  onInputChange(target) {
    this.setState({
      [target.name]: target.value,
    });
  }

  async addPost(setNewPostState, posts, event) {
    const { userId, title, body } = this.state;
    const postLength = posts.length - 1;

    event.preventDefault();

    const post = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ id: postLength + 1, userId, title, body }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const addedPost = await post.json();

    const newPostState = [addedPost, ...posts];

    setNewPostState(newPostState);
  }

  render() {
    const { setNewPostState } = this.props;
    return (
      <PostContext.Consumer>
        {({ posts }) => (
          <div className="row d-flex justify-content-center ">
            <div className="d-flex flex-column col-10 col-sm-6 col-md-4">
              <FormInput
                placeholderText="User ID"
                action={({ target }) => this.onInputChange(target)}
                name="userId"
              />
              <FormInput
                placeholderText="Comment title"
                action={({ target }) => this.onInputChange(target)}
                name="title"
              />
              <FormInput
                placeholderText="Comment body"
                action={({ target }) => this.onInputChange(target)}
                name="body"
              />
              <input
                onClick={this.addPost.bind(this, setNewPostState, posts)}
                type="submit"
                className="btn btn-primary bg-info mt-2"
                value="Add a new comment"
              />
            </div>
          </div>
        )}
      </PostContext.Consumer>
    );
  }
}

CommentForm.propTypes = {
  setNewPostState: PropTypes.func.isRequired,
};

export default CommentForm;
