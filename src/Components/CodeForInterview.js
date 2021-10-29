import { Box,makeStyles } from '@material-ui/core'
import React from 'react'
import cover from '../Assets/Images/cover.png'

const useStyles = makeStyles({

  image: {
      width: '50%',
      height: '50%',
     marginTop: '0',
     marginLeft: '250px',
    

  }
})

function CodeForInterview() {
  const classes = useStyles();
    return (
      <Box >
       <img src={cover} className={classes.image}/>
      </Box>
    )
}

export default CodeForInterview
