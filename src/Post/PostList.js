import React, { Component } from "react";
import Post from "./Post";
// import comForm from './PostForm.module.css';
import { connect } from 'react-redux';

class PostList extends Component {
  posts = [];

  componentDidMount() {
    this.getPostList();
  }

  getPostList() {
    if (this.props.users && this.props.users.length > 0) {
      this.posts.push(this.props.users.filter(u => {
        let  userFriends = this.props.currentUser.friends || [];
        if (userFriends.indexOf(u.email) || this.props.currentUser.email === u.email) {
          return u.createdPosts || [];
        }
        return [];
      }));
    }
  }
  
  render() {
    return (
      <>
      {/* <h5 className={comForm.Flex}>
        <span >{this.posts.length} &nbsp;</span>{" "}
        Post{this.posts.length > 1 ? "s" : ""} made
      </h5> */}

      {/* {this.posts.length === 0 && !this.props.loading ? (
        <div className={comForm.Flex}>
          Be the first to make a post!
        </div>
      ) : null} */}

      {this.posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </>
  );
  }
}

const mapStateToProps = (state) => {
  return {
      users: state.users,
      currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, null)(PostList);