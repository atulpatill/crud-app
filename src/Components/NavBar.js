import { AppBar, Toolbar,Typography, makeStyles } from '@material-ui/core';




const useStyle = makeStyles({
    header: {
        background: '#111111'
    }
})

function NavBar() {
    const classes = useStyle();
    return (
        <AppBar className={classes.header} position="static" >
            <Toolbar>
             <Typography component="h2">Code is Love</Typography>
             <Typography component="h2">All Users</Typography>
             <Typography  component="h2">Add User</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
