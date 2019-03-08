import React, { Component } from 'react';
import PostList from './PostList';
import PostForm from './PostForm';
import p from './Post.module.css';
import comForm from './PostForm.module.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: false
        };
        this.addPost = this.addPost.bind(this);
    }

    addPost = (post) => {
        this.setState({
            loading: false,
            posts: [post, ...this.state.posts]
        });
    }

    render() {
        // const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={p.Container}>
                <div className={p.Box}>
                    <p className={comForm.Flex + ' ' + p.Size}>
                        Create a Post
          <span role="img" aria-label="chat"> 💬</span>
                    </p>
                    <hr />
                    </div> 
                            <PostForm addPost={this.addPost} />
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

export default Post;
