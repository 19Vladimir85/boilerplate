import React from "react";
import Post from "../Post";

import "./index.css";

const PostList = (props) => {
  return (
    <div className="posts">
      {props.data.map((value) => (
        <Post
          {...value}
          key={value._id}
          user={props.user}
          updateLikeStatus={props.updateLikeStatus}
          deletePost={props.deletePost}
        ></Post>
      ))}
    </div>
  );
};

export default PostList;