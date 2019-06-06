import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline
const Post = ({ userId, id, title, body }) => {
  console.log(userId, id);
  return (
    <div className="card col-10 col-sm-5 col-md-3 m-4 p-4">
      <h4 className="mb-2">{title}</h4>
      <div>{body}</div>
    </div>
  );
};

Post.propTypes = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
