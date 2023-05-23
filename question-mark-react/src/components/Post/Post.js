import {useState,useEffect} from "react";
import { ReactDOM } from "react";
import "./Post.css"
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CommentIcon from '@mui/icons-material/Comment';

// const useStyles = makeStyles(() => ({
//   root:{
//     width: 800,
//     textAlign: "left"
//   }
// }));

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


export default function Post(props){
 const {title, text, userId, userName} = props;
 const [expanded, setExpanded] = React.useState(false);
 const [liked, setLiked] = useState(false);
 const handleExpandClick = () => {
   setExpanded(!expanded);
 };

 const handleLike = () => {
  setLiked(!liked);
 }

 return(
        <Card className="card" >
            <CardHeader
                avatar={
                <Link className="link" to = {{pathname : '/users/' + userId}}>
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {userName.charAt(0).toUpperCase()}
                  </Avatar>
                </Link>
                }
                title={title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton 
                onClick={handleLike}
                aria-label="add to favorites">
                    <FavoriteIcon style = {liked? {color: "red"} : null}/>
                </IconButton>
                <IconButton
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                <CommentIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                </CardContent>
            </Collapse>
      </Card>
 );
            }