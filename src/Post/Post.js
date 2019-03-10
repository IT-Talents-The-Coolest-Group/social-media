// import React, { Component } from 'react';
// import PostList from './PostList';
// import PostForm from './PostForm';
// import p from './Post.module.css';
// import comForm from './PostForm.module.css';

// class Post extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             posts: [],
//             loading: false
//         };
//         this.addPost = this.addPost.bind(this);
//     }

//     addPost = (post) => {
//         this.setState({
//             loading: false,
//             posts: [post, ...this.state.posts]
//         });
//     }

//     render() {
//         // const { classes } = this.props;
//         return (
//             <React.Fragment>
//                 <div className={p.Container}>
//                 <div className={p.Box}>
//                     <p className={comForm.Flex + ' ' + p.Size}>
//                         Create a Post
//           <span role="img" aria-label="chat"> 💬</span>
//                     </p>
//                     <hr />
//                     </div> 
//                             <PostForm addPost={this.addPost} />
//                         <div >
//                             <PostList
//                                 loading={this.state.loading}
//                                 posts={this.state.posts}
//                             />
//                         </div>

//                 </div>
//             </React.Fragment>
//         );
//     }
// }
// export default Post;
import React from 'react';
// import { Link } from 'react-router-dom';
import p from './Post.module.css';
import { deletePost } from '../Actions/CreatePost';
import { connect } from 'react-redux';


class Post extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.name !== this.props.name ||
            nextProps.time !== this.props.time ||
            nextProps.info !== this.props.info ||
            nextProps.id !== this.props.id ||
            nextProps.onDelete !== this.props.onDelete) {
            return true;
        } else {
            return false;
        }



    }

    render() {
        return (
            <div className={p.Container}>
                <div>
                    <h4 style={{ color: 'black' }}>
                        {this.props.name}
                    </h4></div>
                <div style={{ width: 200 }}>
                    <p>{this.props.info}</p></div>
                <div>
                    <p className={p.Size}>Posted in : {this.props.time}</p></div>
                <br />
                <button onClick={() => this.props.deletePost(this.props.id)} className={p.Upload}> Delete from page</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePost: id => dispatch(deletePost(id))
    }
}


export default connect(null, mapDispatchToProps)(Post);

