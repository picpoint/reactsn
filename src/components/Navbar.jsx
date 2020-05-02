import React from 'react';
import nav from './Navbar.module.css';

function Navbar () {
  return (
    <nav className="general__nav">      
      <a href="/profile" className={`${nav.item} ${nav.active}`}>Profile</a>      
      <a href="/dialogs" className={nav.item}>Messages</a>      
      <a href="/news" className={nav.item}>News</a>      
      <a href="/music" className={nav.item}>Music</a>      
      <a href="/settings" className={nav.item}>Settings</a>      
    </nav>
  );  
}

export default Navbar;