import React from 'react';
import NavBar from './NavBar';
import Posts from './Posts';
import '../assets/css/App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Posts></Posts>
    </div>
  );
}

export default App;
