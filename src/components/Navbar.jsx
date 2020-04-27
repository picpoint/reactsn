import React from 'react';
import nv from'./Navbar.module.less';

function Navbar () {
  return (
    <nav className="general__nav">      
      <a href="" className = "item">Profile</a>      
      <a href="" className = "item">Messages</a>      
      <a href="" className = "item">News</a>      
      <a href="" className = "item">Music</a>      
      <a href="" className = "item">Settings</a>      
    </nav>
  );  
}

export default Navbar;