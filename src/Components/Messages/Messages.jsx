import React from 'react';
import msg from './Messages.module.css';
import { NavLink } from 'react-router-dom';


function Messages() {
  return(
    <div className={msg.messages}>
      
      <div className={msg.users}>
        <NavLink to="/messages/1">Dmitry</NavLink>
        <NavLink to="/messages/2">Semen</NavLink>
        <NavLink to="/messages/3">Ivan</NavLink>
        <NavLink to="/messages/4">Igor</NavLink>
        <NavLink to="/messages/5">Petro</NavLink>
      </div>
      
      <div className={msg.usrmsg}>  
        <span>Hi</span>
        <span>Hello</span>
        <span>all good</span>
        <span>so so</span>
        <span>wats'up man</span>
      </div>

    </div>
  );  
}


export default Messages;