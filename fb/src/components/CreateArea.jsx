import React, { useState } from "react";

function CreateArea(props) {
  const [post, setPost] = useState({content: ""});

  function handleChange(event) {
    const { name, value } = event.target;

    setPost(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitPost(event) {
    props.onAdd(post);
    setPost({
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <textarea
          name="content"
          onChange={handleChange}
          value={post.content}
          placeholder="Write something here..."
          rows="5"
        />
        <button className="postButton" onClick={submitPost}>POST</button>
        <button className="gifButton">GIF</button>
      </form>
    </div>
  );
}

export default CreateArea;
