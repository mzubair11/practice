import React, { useState } from "react";
import Header from "./Header";
import Post from "./Post";
import CreateArea from "./CreateArea";
import Giphy from "./Giphy";

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts(prevPosts => {
      return [...prevPosts, newPost];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addPost} />
      {posts.map((postItem, index) => {
        return (
          <Post
            key={index}
            content={postItem.content}
          />
        );
      })}
    <Giphy />
    </div>
  );
}

export default App;
