import React from 'react';
import nav from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar () {
  return (
    <nav className="general__nav">      
      <NavLink to="/profile" className={nav.item} activeClassName={nav.active}>Profile</NavLink>      
      <NavLink to="/dialogs" className={nav.item} activeClassName={nav.active}>Messages</NavLink>      
      <NavLink to="/news" className={nav.item} activeClassName={nav.active}>News</NavLink>      
      <NavLink to="/music" className={nav.item} activeClassName={nav.active}>Music</NavLink>      
      <NavLink to="/settings" className={nav.item} activeClassName={nav.active}>Settings</NavLink>      
    </nav>
  );  
}

export default Navbar;