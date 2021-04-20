import React from 'react';
import { Container, Typography } from '@material-ui/core';

export default function Home() {
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
          Login to see your Friends!
        </Typography>
      </Container>
    </>
  )
}