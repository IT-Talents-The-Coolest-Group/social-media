import React from 'react';
import Input from '../UI/Input/Input';
import comForm from './PostForm.module.css';
import { addNewPost } from '../Actions/CreatePost';
import { connect } from 'react-redux';

class PostForm extends React.Component {

    state = {
        newPost: {
            info: ''
        }
    }

    setInfo = event => {
        const value = event.target.value;
        const newPost = { ...this.state.newPost};
        newPost.info = value;
        this.setState({ newPost });

    }


    onAddPost = event => {
        event.preventDefault();
        if (this.state.newPost.info.trim() !== '') {
            this.props.onAddPost(this.state.newPost);
            const newPost = { info: '' };
            this.setState({ newPost: newPost });
        } else {
            alert("Cannot submit an empty post.");
        }
    }


    render() {
        return (
            <>  <div className={comForm.Container}>
                <form>
                    <div className={comForm.Box}>
                        <h1 className={comForm.Flex + ' ' + comForm.Size}>
                            Create a Post
           <span role="img" aria-label="chat"> 💬</span>
                        </h1>
                        <hr />
                    </div>
                    <div className={comForm.BoxCont}>
                        <Input
                            style={{ width: 800 }}
                            maxLength={100}
                            type="input"
                            placeholder="What's on your mind?😎"
                            onChange={this.setInfo}
                            value={this.state.newPost.info} />
                    </div>
                    <div className={comForm.BoxCont}>
                        <button className={comForm.Upload + ' ' + comForm.Add} onClick={this.onAddPost}>Add Post ➤</button>
                    </div>
                </form>
            </div>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addNewPost(post))
    }
}

export default connect(null, mapDispatchToProps)(PostForm);