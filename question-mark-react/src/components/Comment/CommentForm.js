import * as React from 'react';
import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import { Button, InputAdornment, Link, Avatar, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function CommentForm(props){
 const {postId,userId, userName} = props;
 const [text,setText] = useState("");

const saveComment = () =>{
    fetch("/comments",
    {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            postId: postId,
            userId: userId,
            text: text,
        }),
    })
    .then((res) => res.json())
    .catch((err) => console.log("error"))
 }

const handleSubmit = () => {
    saveComment();
    setText("");
}
const handleChange = (value) => {
    setText(value);
}
 return(
  <div>
    <CardContent>
        <OutlinedInput
            id = "outlined-adornment-amount"
            multiline
            inputProps = {{maxLength : 250}}
            fullWidth
            sx={{ width: 750, alignItems: "center" }} 
            onChange = { (i) => handleChange(i.target.value)}
            startAdornment = {
                <InputAdornment position = "start">
                    <Link className="link" to = {{pathname : '/users/' + userId}}>
                        <Avatar sx={{ bgcolor: "pink" }} aria-label="icon">
                            {userName.charAt(0).toUpperCase()}
                        </Avatar>
                    </Link>
                </InputAdornment>
            }
            endAdornment = {
                <InputAdornment position = "end">
                    <Button
                        variant = "contained"
                        style = {{ background: "pink"}}
                        onClick = {handleSubmit}>
                    Comment
                    </Button>
                </InputAdornment>
            }
            value = {text}
        ></OutlinedInput>
    </CardContent>
  </div>
 );
}