import React, {useEffect} from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder={"Post message"}
                       validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const MyPosts = (props) => {

    useEffect(() => {
        return () => {
        }
    }, [props.posts])

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div>
                <h3>New posts</h3>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>
    )
};



const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;