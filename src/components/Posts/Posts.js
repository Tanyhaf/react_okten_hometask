import {useEffect, useState} from "react";
import Post from "./Post";

export default function Posts(){
    let [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value)
            });
    },[]);
    return(
        <div className={'part'}>
            <ul>
                {posts.map(value => <li key ={value.id}><Post item={value}/></li>)}
            </ul>
        </div>
    )

}