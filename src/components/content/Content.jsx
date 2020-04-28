import React from 'react';
import cnt from './Content.module.css';
import Post from './post/Post';


function Content() {
  return(
    <div className="general__content">        
      <img src="city.jpg" alt="city"/>      
      <span>avatar + description</span>
      <div>
        My Posts
        <Post name="Semen" age="30"/>
        <Post name = "Petro" age="20"/>        
      </div>
    </div>  
  );
}

export default Content;