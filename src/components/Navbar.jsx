import React from 'react';
import nav from './Navbar.module.css';

function Navbar () {
  return (
    <nav className="general__nav">      
      <a href="#" className={ `${nav.item} ${nav.active}` }>Profile</a>      
      <a href="#" className={nav.item}>Messages</a>      
      <a href="#" className={nav.item}>News</a>      
      <a href="#" className={nav.item}>Music</a>      
      <a href="#" className={nav.item}>Settings</a>      
    </nav>
  );  
}

export default Navbar;