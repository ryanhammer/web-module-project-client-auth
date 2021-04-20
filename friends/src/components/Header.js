import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import { AppBar, Toolbar, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  appBarMarg: {
    marginBottom: '1rem'
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-evenly`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

export default function Header() {

  const classes = useStyles();
  return (
    <AppBar position='relative' className={classes.appBarMarg}>
      <Toolbar className={classes.navDisplayFlex}>
        <Link
          component={ RouterLink }
          to='/' color='secondary'
          className={classes.linkText}
        >
          Home
        </Link>
        <Link 
          component={ RouterLink }
          to='/login' color='secondary'
          className={classes.linkText}
        >
          Login
        </Link>
        <Link
          component={ RouterLink }
          to='/friends' color='secondary'
          className={classes.linkText}
        >
          Friends Dashboard
        </Link>
        <Link 
          component={ RouterLink }
          to='/addfriends' color='secondary'
          className={classes.linkText}
        >
          Add Friends
        </Link>
      </Toolbar>
    </AppBar>
  )
}