import React, { Component } from 'react';
import postStyle from './PostCreator.module.css';
import Avatar from '@material-ui/core/Avatar';
import img from '../assets/images/girl.jpg';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';


const themeStyle = {
    bigAvatar: {
        marginTop: '-1.1vh',
        marginLeft: '-23%',
        width: '10vh',
        position: 'absolute',
        height: '10vh',
        zIndex: 3,
        border: '0.3vh solid white'
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
                    <br />
                    <div className={postStyle.BoxCont}>
                        <Avatar alt="Profile Photo" src={img} className={classes.bigAvatar} />
                        <input  placeholder="What's on your mind?" type="text" maxLength="100" className={postStyle.Textarea} />
                    </div>
                    <br />
                    <hr />

                    <div className={postStyle.BoxCont}>
                        <Link to="a" className={postStyle.Upload}>Photo/Video</Link>
                        <Link to="a" className={postStyle.Upload + ' ' + postStyle.Add}>Add Post</Link>
                    </div>
                </div>
            </>
        )
    }
}
export default withStyles(themeStyle)(PostCreator);
