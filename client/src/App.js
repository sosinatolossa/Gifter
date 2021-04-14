import React from "react";
import "./App.css";
import { PostProvider } from "./components/PostProvider";
import { PostForm } from "./components/PostForm";
import PostList from "./components/PostList";
import { PostSearch } from "./components/PostSearch"

function App() {
  return (
    <div className="App">
      <PostProvider>
        <PostForm />
        <PostSearch />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;