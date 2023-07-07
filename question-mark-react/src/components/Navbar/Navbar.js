import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function Navbar(){
    let navigate = useNavigate();

    const onClick = () => {
        localStorage.removeItem("tokenKey")
        localStorage.removeItem("currentUser")
        localStorage.removeItem("username")
        navigate(0)
    }
    return(
        <div>
             <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 , textAlign: "left"}}>
                        <Link className="link" to = "/">Home</Link>
                    </Typography>
                    {localStorage.getItem("currentUser") == null ? <Link className="link" to={{pathname: '/auth'}}>Login/Register</Link>:
                     <div><IconButton onClick={onClick} className='link'><LockOpenIcon></LockOpenIcon></IconButton>
                        <Link className='link' to={{pathname: '/users/' + localStorage.getItem("currentUser")}}>Profile</Link>
                     </div>}
                    {/* <Button color="inherit">Login</Button> */}
                    {/* <Link className="link" to = {{pathname : '/users/' + userId}}>User</Link> */}
                    </Toolbar>
                </AppBar>
             </Box>
        </div>
    )
}