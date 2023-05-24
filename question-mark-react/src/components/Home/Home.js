import * as React from 'react';
import Post from "../Post/Post"
import {useState,useEffect} from "react";
import { styled } from "@mui/system";
import PostForm from '../Post/PostForm';

const MyDiv = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d5dde3"
});

function Home(){
    const [error,setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    const refreshPosts = () =>{
        fetch("/posts")
        .then( res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setPostList(result)
            },
            (error) =>{
                setIsLoaded(true);
                setError(error);
            }
            )
    }

    useEffect(() => {
     refreshPosts()
    },[postList])
 
    if(error){
     return <div>Error</div>
    }
    else if(!isLoaded){
     return <div>Loading...</div>
    }
    else{
     return(
            <MyDiv>
                <PostForm userId = {1} userName = "cemre"  refreshPosts = {refreshPosts}/>
                { postList.map( 
                    post => (
                    <Post postId = {post.id} userId = {post.userId} userName = {post.userName} 
                    title = {post.title} text={post.text}>

                    </Post>
                    ))
                }
            </MyDiv>
        );
    }
}

export default Home;