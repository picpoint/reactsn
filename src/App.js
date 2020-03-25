import React from 'react';
import './App.css';


function App() {
  return (
    <div className="app-wrapper">
      
      <header className="header">
        <img src="code.png" alt="code"/>
      </header>
      
      <nav className="nav">
        <div>
          <a href="">Profile</a>
        </div>        
        <div>
          <a href="">Messages</a>
        </div>        
        <div>
          <a href="">News</a>
        </div>        
        <div>
          <a href="">Music</a>
        </div>        
        <div>
          <a href="">Settings</a>
        </div>        
      </nav>
      
      <div className="content">
        <div>
          <img src="city.jpg" alt="city"/>
        </div>
        <div>avatar + description</div>
        <div>
          My Posts
          <div>New Posts</div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>

    </div>
  );
}


export default App;
