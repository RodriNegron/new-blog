import React from 'react';
import NavBar from '../components/NavBar';
import Posts from '../components/Posts';


function Home() {
  return (
      <div className="App">
        <NavBar></NavBar>
        <Posts></Posts> 
      </div>
  );
}

export default Home;