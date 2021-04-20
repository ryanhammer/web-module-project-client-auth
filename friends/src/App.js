import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <CssBaseline>
      <div className="App">
        <Header/>
        <main>
          <Switch>
            <Route path='/addfriends'>
              <AddFriend />
            </Route>
            <Route path='/friends'>
              <Friends/>
            </Route>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/' component = { Home }/>
          </Switch>
        </main>
      </div>
    </CssBaseline>
    
  );
}

export default App;
