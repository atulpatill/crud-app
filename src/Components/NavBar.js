import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';




const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

function NavBar() {
    const classes = useStyle();
    return (
        <AppBar className={classes.header} position="static" >
            <Toolbar>
             <NavLink className={classes.tabs} to="./" exact >Code is Love</NavLink>
             <NavLink className={classes.tabs} to="all" exact >All Users</NavLink>
             <NavLink className={classes.tabs} to="add" exact >Add User</NavLink>
     
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
