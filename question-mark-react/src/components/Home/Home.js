import * as React from 'react';
import Post from "../Post/Post"
import {useState,useEffect} from "react";
import { styled } from "@mui/system";

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

    useEffect(() => {
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
    },[])
 
    if(error){
     return <div>Error</div>
    }
    else if(!isLoaded){
     return <div>Loading...</div>
    }
    else{
     return(
            <MyDiv>
                { postList.map( 
                    post => (
                    <Post userId = {post.userId} userName = {post.userName} title = {post.title} text={post.text}></Post>
                    ))
                }
            </MyDiv>
        );
    }
}

export default Home;