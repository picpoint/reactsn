import React from 'react';
import cont from './Content.module.css';

function Content() {
  return(
    <div className="general__content">        
      <img src="city.jpg" alt="city"/>      
      <span>avatar + description</span>
      <div>
        My Posts
        <div className={cont.item}>New Posts</div>
        <div className={cont.item}>post 1</div>
        <div className={cont.item}>post 2</div>
      </div>
    </div>  
  );
}

export default Content;