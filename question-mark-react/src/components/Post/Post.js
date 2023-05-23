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
  <div>
        <MyCard>
            <CardHeader
                avatar={
                <Link className="link" to = {{pathname : '/users/' + userId}}>
                  <Avatar sx={{ bgcolor: "pink" }} aria-label="icon">
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
            <StyledCardActions disableSpacing>
                <IconButton 
                onClick={handleLike}
                aria-label="add to favorites">
                    <FavoriteIcon style = {liked? {color: "red"} : null}/>
                </IconButton>
                <IconButton
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show comments"
                >
                <CommentIcon/>
                </IconButton>
            </StyledCardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                </CardContent>
            </Collapse>
      </MyCard>
      </div>
 );
}