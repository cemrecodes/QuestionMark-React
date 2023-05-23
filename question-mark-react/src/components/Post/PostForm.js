import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { Button, InputAdornment, OutlinedInput } from "@mui/material";

const MyCard = styled(Card)({
    width: 800,
    display: "block",
    margin: '20px' ,
    textAlign: "left",
});

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const StyledCardActions = styled(CardActions)({
  display: "flex",
  justifyContent: "space-between"
});

export default function PostForm(props){
 const {userId, userName, refreshPosts} = props;
 const [text, setText] = useState("");
 const [title, setTitle] = useState("");

 const savePost = () =>{
    fetch("/posts",
    {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            title: title,
            userId: userId,
            text: text,
        }),
    })
    .then((res) => res.json())
    .catch((err) => console.log("error"))
 }
 const handleSubmit = () => {
    console.log(text,title)
    savePost();
    refreshPosts();
 }
 const handleTitle = (value) => {
    setTitle(value);
 }
 const handleText = (value) => {
    setText(value);
 }

 return(
        <MyCard>
            <CardHeader
                avatar={
                <Link className="link" to = {{pathname : '/users/' + userId}}>
                  <Avatar sx={{ bgcolor: "pink" }} aria-label="icon">
                      {userName.charAt(0).toUpperCase()}
                  </Avatar>
                </Link>
                }
                title= {<OutlinedInput
                id = "outlined-adornment-amount"
                multiline
                placeholder = "Title"
                inputProps = {{maxLength : 25}}
                fullWidth
                onChange = { (i) => handleTitle(i.target.value)}
                >
                </OutlinedInput>
                }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                <OutlinedInput
                id = "outlined-adornment-amount"
                multiline
                placeholder = "Text"
                inputProps = {{maxLength : 250}}
                fullWidth
                onChange = { (i) => handleText(i.target.value)}
                endAdornment = {
                    <InputAdornment position = "end">
                        <Button
                        variant = "contained"
                        style = {{ background: "pink"}}
                        onClick = {handleSubmit}>
                        Post
                        </Button>
                    </InputAdornment>
                }
                >
                    
                </OutlinedInput>
                </Typography>
            </CardContent>
      </MyCard>
 );
}