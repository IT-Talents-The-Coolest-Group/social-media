import React, { Component } from 'react';
import postStyle from './PostCreator.module.css';
import Avatar from '@material-ui/core/Avatar';
import img from '../assets/images/girl.jpg';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';


const themeStyle = {
    bigAvatar: {
        marginTop: '-1.3vh',
        marginLeft: '-51vh',
        width: '8vh',
        position: 'absolute',
        height: '8vh',
        zIndex: 3,
        border:'0.3vh solid white'
    },
};

class PostCreator extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <div className={postStyle.Container}>
                    <div className={postStyle.Box}>
                        <span className={postStyle.Span}>Create Post :)</span>
                        <hr />
                    </div>
                    <div className={postStyle.InputContainer}>
                    <Avatar alt="Profile Photo" src={img} className={classes.bigAvatar} />
                        <input type="text" className={postStyle.Textarea} />
                        <hr/>
                    </div>
                    <div className={postStyle.InputContainer}>
                <Link to="a" className={postStyle.PhotoUpload}>Photo/Video</Link>
                <Link to="a" className={postStyle.PhotoUpload + ' ' + postStyle.Add}>Add Post</Link>
                </div>
                </div>
            </>
        )
    }
}
export default withStyles(themeStyle)(PostCreator);
