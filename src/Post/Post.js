import React, { Component } from 'react';
// import img from '../assets/images/lamp.png';
import PostList from './PostList';
import PostForm from './PostForm';
import p from './Post.module.css';
import image from '../assets/images/girl.jpg';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import comForm from './PostForm.module.css';


const themeStyle = {
    bigAvatar: {
        width: '60px',
        position: 'fixed',
        left:'24%',
        top:'20%',
        height: '60px',
        zIndex: 3,
        border: '0.3vh solid white',
        
    },
};

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: false
        };
        this.addPost = this.addPost.bind(this);
    }

    addPost(post) {
        this.setState({
            loading: false,
            posts: [post, ...this.state.posts]
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={p.Container}>
                <div className={p.Box}>
                    <h1 className={comForm.Flex}>
                        Create a Post
          <span role="img" aria-label="chat"> 💬</span>
                    </h1>
                    <hr />
                    </div> 
                    <div className={comForm.BoxCont}>
                    <Avatar alt="Profile Photo" src={image} className={classes.bigAvatar} />
                   </div>
                        <div >
                            <PostForm addPost={this.addPost} />
                        </div>
                        <div >
                            <PostList
                                loading={this.state.loading}
                                posts={this.state.posts}
                            />
                        </div>
                   
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(themeStyle)(Post);