import React from 'react';
import nav from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className={nav.navblock}>
      <NavLink to="/profile" activeClassName={nav.active}>Profile</NavLink>
      <NavLink to="/messages" activeClassName={nav.active}>Messages</NavLink>
      <NavLink to="/news" activeClassName={nav.active}>News</NavLink>
      <NavLink to="/music" activeClassName={nav.active}>Music</NavLink>      
      <NavLink to="/settings" activeClassName={nav.active}>Settings</NavLink>
    </div>
  );    
}


export default Navbar;