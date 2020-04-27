import React from 'react';
import cnt from './Content.module.less';

function Content() {
  return(
    <div className="general__content">        
      <img src="city.jpg" alt="city"/>      
      <span>avatar + description</span>
      <div>
        My Posts
        <div className = "item">New Posts</div>
        <div className = "item">post 1</div>
        <div className = "item">post 2</div>
      </div>
    </div>  
  );
}

export default Content;