import React, { useState } from 'react';
import Home from '../pages/Home';
import LoginForm from '../pages/LoginForm';
import NewPost from '../pages/NewPost';

import '../assets/css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginForm
            email={email}
            password={password}
          />
        </Route>
        <Route path="/newpost">
          <NewPost/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
