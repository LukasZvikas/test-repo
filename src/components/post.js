import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline
const Post = ({ userId, id, title, body }) => {
  console.log(userId, id);
  return (
    <div className="card col-4 col-sm-3 col-md-5 m-4 p-4">
      <h4 className="mb-2">{title}</h4>
      <div>{body}</div>
    </div>
  );
};

Post.propTypes = {
  userId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
