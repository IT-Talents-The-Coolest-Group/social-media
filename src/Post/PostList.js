import React from "react";
import Post from "./Post";
import comForm from './PostForm.module.css';

export default function postList(props) {
  return (
      <>
      <h5 className={comForm.Flex}>
        <span >{props.posts.length}</span>{" "}
        Post {props.posts.length > 0 ? "s" : ""} maded
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