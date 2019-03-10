// import React, { Component } from "react";
// import Post from "./Post";
// // import comForm from './PostForm.module.css';
// import { connect } from 'react-redux';

// class PostList extends Component {
//   posts = [];

//   componentDidMount() {
//     this.getPostList();
//   }

//   getPostList() {
//     if (this.props.users && this.props.users.length > 0) {
//       this.posts.push(this.props.users.filter(u => {
//         let  userFriends = this.props.currentUser.friends || [];
//         if (userFriends.indexOf(u.email) || this.props.currentUser.email === u.email) {
//           return u.createdPosts || [];
//         }
//         return [];
//       }));
//     }
//   }
  
//   render() {
//     return (
//       <>
//       {/* <h5 className={comForm.Flex}>
//         <span >{this.posts.length} &nbsp;</span>{" "}
//         Post{this.posts.length > 1 ? "s" : ""} made
//       </h5> */}

//       {/* {this.posts.length === 0 && !this.props.loading ? (
//         <div className={comForm.Flex}>
//           Be the first to make a post!
//         </div>
//       ) : null} */}

//       {this.posts.map((post, index) => (
//         <Post key={index} post={post} />
//       ))}
//     </>
//   );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//       users: state.users,
//       currentUser: state.currentUser,
//   }
// }

// export default connect(mapStateToProps, null)(PostList);

import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { getPostList } from '../Actions/users';

class PostList extends React.Component {
    state = {
        postsLoaded: false,
    };

    componentDidMount() {
        this.props.getPostList();
    }

    componentDidUpdate() {
        if (this.state.postsLoaded === false) {
            this.props.getPostList();
            this.setState({...this.state, postsLoaded: true});
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2>News Feed:</h2>
                {this.props.postList.length > 0 && this.props.postList.map(post => 
                    <Post key={post.id} {...post} />)
                }
            </React.Fragment>
        );
    }
}

//redux state
const mapDispatchToProps = dispatch => {
    return {
      getPostList: () => dispatch(getPostList())
    }
  }

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        postList: state.postList,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);