import React, { Component } from 'react';
import postStyle from './PostCreator.module.css';
import Avatar from '@material-ui/core/Avatar';
import img from '../assets/images/girl.jpg';
import { withStyles } from '@material-ui/core/styles';

const themeStyle = {
    bigAvatar: {
        marginTop: '-0.5vh',
        marginLeft: '-23%',
        width: '10vh',
        position: 'absolute',
        height: '10vh',
        zIndex: 3,
        border: '0.3vh solid white'
    },
};

class PostCreator extends Component {
    state = {
        content: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state.content);
    };

    onSubmit = (e) => {
        e.preventDefault();
        let url = 'http://bacefookapi.herokuapp.com:8090/posts';
        const data = {
            content: this.state.content
        }
        console.log(data);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(res => {
                console.log(res);
            })
            .catch(error => console.error(error));
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <div className={postStyle.Container}>
                    <div className={postStyle.Box}>
                        <span className={postStyle.Span}>Create Post :)</span>
                        <hr />
                    </div>
                    <br />
                    <div className={postStyle.BoxCont}>
                        <Avatar alt="Profile Photo" src={img} className={classes.bigAvatar} />
                        <input placeholder="What's on your mind?" name="content" value={this.state.content}
                            onChange={this.handleChange} type="text" maxLength="100" className={postStyle.Textarea} />
                    </div>

                    <br />
                    <hr />

                    <div className={postStyle.BoxCont}>
                        <button className={postStyle.Upload}>Photo/Video</button>
                        <button className={postStyle.Upload + ' ' + postStyle.Add} onClick={this.onSubmit}>Add Post</button>
                    </div>

                </div>
                <div className={postStyle.Container + ' ' + postStyle.Hide}>
                    <div className={postStyle.BoxCont}>
                        <p>{this.state.content}</p>
                    </div>
                </div>
            </>
        )
    }
}
export default withStyles(themeStyle)(PostCreator);
