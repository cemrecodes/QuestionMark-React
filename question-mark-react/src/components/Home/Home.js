import * as React from 'react';
import Container from '@mui/material/Container';
import Post from "../Post/Post"
import {useState,useEffect} from "react";
import "./Home.css"

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
        <React.Fragment>
            <Container fixed className = "container" maxWidth="sm">
                { postList.map( 
                    post => (
                    <Post userId = {post.userId} userName = {post.userName} title = {post.title} text={post.text}></Post>
                    ))
                }
            </Container>
        </React.Fragment>
        );
    }
}

export default Home;