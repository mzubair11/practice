import React from "react";

function Post(props) {

  return (
    <div className="post">
      <p>{props.content}</p>
    </div>
  );
}

export default Post;
