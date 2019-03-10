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
                {this.props.title && <h2>{this.props.title}</h2>}
                {this.props.postList.length > 0 && this.props.postList.map(post => 
                    <Post key={post.id} {...post} />)
                }
            </React.Fragment>
        );
    }
}

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