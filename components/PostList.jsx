import {useState} from "react";
import Post from './Post';
import classes from './PostList.module.css';
import NewPost from './NewPost';
import NewPostModal from './NewPostModal';


export default function PostList({isNewPosting,finishedPosting}) {
    const [name,setName ] = useState('');
    const [post,setPost ] = useState('');

    function handlePostChange(evt){
        setPost(evt.target.value)
        }
    
    function handleNameChange(evt){
        setName(evt.target.value)
        }

    return (
        <>
        {isNewPosting && (
            <NewPostModal handleModalChange={finishedPosting}>
                <NewPost handlePost={handlePostChange} handleName={handleNameChange}>
                </NewPost>
            </NewPostModal>
        )}
        <ul className={classes.posts}>
            <Post author={name} body={post} ></Post>
            <Post author={"Rando Calrysian"} body={"Stuffins"}></Post>
            <Post author={"Rando Calrysian"} body={"Stuffy"}></Post>
            <Post author={"Rando Calrysian"}body={"Stuff-n-uplgus"}></Post>
        </ul>
        </>
    )
}