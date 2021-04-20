import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import { Container, Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  linkText: {
    textDecoration: `none`,
    color: 'black'
  }
});

export default function Home() {

  const classes = useStyles();
  return (
    <>
      <Container maxWidth='lg'>
        <Typography align='center' variant='h1' gutterBottom={true}>
          Welcome to the Friends App!
        </Typography>
        <Typography align='center' variant='h5' gutterBottom={true}>
          A wonderful place where you can meet the people who will be there for you...like they've been there before.
        </Typography>
        <Typography align='center' variant='h6' gutterBottom={true}>
          <Link
            component={ RouterLink }
            to='/login'
            className={classes.linkText}
          >
            Login to see your Friends!
          </Link>
          
        </Typography>
      </Container>
    </>
  )
}