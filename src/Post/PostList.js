import React from "react";
import Post from "./Post";
import comForm from './PostForm.module.css';
import { connect } from 'react-redux';

const postList = props => {
  return (
      <>
      {/* <h5 className={comForm.Flex}> */}
        {/* <span >{props.createdPosts.length} &nbsp;</span>{" "} */}
        {/* Post{props.posts.length > 1 ? "s" : ""} made */}
      {/* </h5> */}

      {/* {props.createdPosts.length === 0 && !props.loading ? ( */}
        {/* <div className={comForm.Flex}>
          Be the first to make a post!
        </div>
      ) : null} */}
{/* 
      {props.createdPosts.map((post, index) => (
        <Post key={index} post={post} />
      ))} */}

    </>
  );
}

const mapStateToProps = (state) => {
  return {
      createdPosts: state.post
  }
}

export default connect(mapStateToProps, null)(postList);