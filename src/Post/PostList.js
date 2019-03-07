import React from "react";
import Post from "./Post";
import comForm from './PostForm.module.css';
// import Input from './input';
// import { createPost } from '../Actions/CreatePost';
// import { connect } from 'react-redux';

export default function postList(props) {
  return (
      <>
      <h5 className={comForm.Flex}>
        <span >{props.posts.length} &nbsp;</span>{" "}
        Post{props.posts.length > 1 ? "s" : ""} made
      </h5>

      {props.posts.length === 0 && !props.loading ? (
        <div className={comForm.Flex}>
          Be the first to make a post!
        </div>
      ) : null}

      {props.posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}

    </>
  );
}
