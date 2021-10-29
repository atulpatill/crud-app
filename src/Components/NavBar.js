// import React from 'react'
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import {makeStyles} from '@material-ui/core';
import { AppBar, Toolbar,Typography, makeStyles } from '@material-ui/core';




const useStyle = makeStyles({
    header: {
        background: '#111111'
    }
})

function NavBar() {
    const classes = useStyle();
    return (
        <AppBar className={classes.header} >
            <Toolbar>
             <Typography component="h2">Code is Love</Typography>
             <Typography component="h2">All Users</Typography>
             <Typography  component="h2">Add User</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
