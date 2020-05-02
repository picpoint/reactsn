import React from 'react';
import pst from './Post.module.css';


function Post (props) {
  return(
    <div className={pst.postblock}>
      <img src="pict/unnamed.png" alt="avatar"/>
      <br/>
      {props.name} {props.age}
    </div>
  );  
}


export default Post