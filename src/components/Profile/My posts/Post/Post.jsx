import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" alt="avatar"/>
            {props.message}
            <div>
                <span>Like {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;