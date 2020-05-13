import React from 'react';
import cnt from './Content.module.css';
import Post from './Posts/Post';



function Content (props) {

  let postsData = props.postsArr.map((p) => {
    return <Post name={p.name} age={p.age}/>
  });

  return(
    <div className={cnt.content}>
      <img src="pict/city.jpg" alt="city"/>      
      { postsData }
    </div>
  );  
}


export default Content;