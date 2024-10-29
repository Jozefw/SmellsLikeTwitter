import classes from './NewPost.module.css';
import {useState} from 'react';

function NewPost(props) {


return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Post Content</label>
        <textarea id="body" required rows={3} onChange={props.handlePost}/>
      </p>
      <p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required onChange={props.handleName}/>
      </p>
    </form>
  );
}

export default NewPost;
