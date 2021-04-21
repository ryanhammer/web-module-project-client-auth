import React from 'react'
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route 
      {...rest}
      render={() => {
      if (window.localStorage.getItem('token')) {
        return <Component />; // the component passed in through props
      } else {
        return <Redirect to='/login' />
      }
    }}
    />
  )
}
export default PrivateRoute