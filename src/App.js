
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Input from './Input';
import { useState } from 'react';
import Post from './Post';

let id = 1

function App() {
  const [posts,setPosts] = useState([])

  function addPost(title){
    const newPost = {id,title};
    setPosts([newPost, ...posts]);
    id +=1

  }
  function deletePost(id){
    const updatePosts = posts.filter((post)=>post.id !== id)
    setPosts(updatePosts)
  }
  return (
    <div className="App">
    <Navbar></Navbar>
    <Input addPost={addPost}></Input>
    {posts.map((post)=>(<Post key={post.id} id={post.id} title={post.title} deletePost={deletePost} ></Post>))}
    </div>
  );
}

export default App;
