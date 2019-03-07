import React, { Component } from "react";
import comForm from './PostForm.module.css';
import TextField from '@material-ui/core/TextField';
// import { withStyles } from '@material-ui/core/styles';

// const themeStyle = () => ({
//     // textField: {
//     //     width: '100%',
//     // }

// });

 class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",

            post: {
                // name: "",
                content: ""
            }
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleFieldChange = event => {
        this.setState({
            ...this.state,
            post: {
                ...this.state.post,
                [event.target.name]: event.target.value
            }
        });

        console.log('oooo')
        console.log(this.state.post)
    };

    onSubmit(e) {
        e.preventDefault();

        if (!this.isFormValid()) {
            this.setState({ error: "All fields are required." });
            return;
        }

        this.setState({ error: "", loading: true });

        const data = {
            // name: this.state.comment.name,
            content: this.state.post.content
        }
        console.log('xaxa')
        console.log(data)

        let url = 'https://bacefookapi.herokuapp.com/posts';

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => console.log(res.json()))
            .then(res => {
                if (res.error) {
                    this.setState({ loading: false, error: res.error });
                } else {

                    data.time = res.time;
                    this.props.addComment(data);

                    console.log('==**************');
                    console.log(data)

                    this.setState({
                        loading: false,
                        post: { ...data, content: "" }
                    });
                    console.log('========')
                    console.log(data)
                }
            })
            .catch(err => {
                this.setState({
                    error: "Something went wrong while submitting form.",
                    // error: err.text,
                    loading: false
                })
                alert(err)
            });
    }

    isFormValid() {
        return this.state.post.name !== "" && this.state.post.content !== "";
    }


    renderError() {
        return this.state.error ? (
            <div className="alert alert-danger">{this.state.error}</div>
        ) : null;
    }

    componentDidMount() {
        this.setState({ loading: true });

        fetch("https://bacefookapi.herokuapp.com/posts?posterId=17")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    posts: res,
                    loading: false
                });
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <React.Fragment>
                <form method="post" onSubmit={this.onSubmit}>
                    {/* <div className={comForm.Flex}>
                        <input
                            onChange={this.handleFieldChange}
                            value={this.state.comment.name}
                            className={comForm.Input}
                            placeholder="Title😎"
                            name="name"
                            type="text"
                        />
                    </div> */}

                    <div className={comForm.BoxCont}>
                        <input
                            onChange={this.handleFieldChange}
                            value={this.state.post.content}
                            className={comForm.Input}
                            placeholder="What's on your mind?😎"
                            name="content"      
                        />
                    </div>

                    {this.renderError()}

                    <div className={comForm.BoxCont}>
                        <button disabled={this.state.loading} className={comForm.Upload}>
                            Photo ➤
            </button>
                        <button disabled={this.state.loading} className={comForm.Upload + ' ' + comForm.Add}>
                            Add Post ➤
            </button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default PostForm;