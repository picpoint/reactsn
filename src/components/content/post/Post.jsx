import React from 'react';
import pst from './Post.module.css';


function Post(props) {
  return(        
    <div>      
      <div className={pst.post}>      
        <img src="./pict/avatar.jpg" alt="avatar"/>
        <br/>
        name: {props.name}
        <br/>
        age: {props.age}
        <br/>
        likes: {props.like}
      </div>      
    </div>
  );
}

export default Post;