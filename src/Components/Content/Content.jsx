import React from 'react';
import cnt from './Content.module.css';
import Post from './Posts/Post';


function Content (props) {
  return(
    <div className={cnt.content}>
      <img src="pict/city.jpg" alt="city"/>
      <Post name="Semen" age="30"/>
      <Post name="Petro"/>
      <Post age="10"/>
    </div>
  );  
}


export default Content;