import PostStyle from './Post.module.css';

export default function Post(props){
    return(
        <li className={PostStyle.post}>
            <p className={PostStyle.author}>{props.author}</p>
            <p className={PostStyle.text}>{props.body}</p>
        </li>
    )
}