import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import { InputAdornment, Link, Avatar, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function Comment(props){
 const {text, userId, userName} = props;

const MyOI = styled(OutlinedInput)({
    width: 750,
    alignItems: "center"
});

 return(
  <div>
    <CardContent>
        <MyOI
            disabled
            id = "outlined-adornment-amount"
            multiline
            inputProps = {{maxLength : 25}}
            fullWidth
            value = {text}
            startAdornment = {
                <InputAdornment position = "start">
                    <Link className="link" to = {{pathname : '/users/' + userId}}>
                        <Avatar sx={{ bgcolor: "pink" }} aria-label="icon">
                            {userName.charAt(0).toUpperCase()}
                        </Avatar>
                    </Link>
                </InputAdornment>
            }
        ></MyOI>
    </CardContent>
  </div>
 );
}