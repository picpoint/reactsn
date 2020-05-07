import React from 'react';
import cnt from './Content.module.css';
import Post from './Posts/Post';


let postsArr = [
  {name: "Semen", age: 20},
  {name: "Petro", age: 10},
  {name: "Igor", age: 40},
  {name: "Noname", age: 0},
  {name: "One"},
  {age: 0}
];

let postsData = postsArr.map((p) => {
  return <Post name={p.name} age={p.age}/>
});



function Content (props) {
  return(
    <div className={cnt.content}>
      <img src="pict/city.jpg" alt="city"/>      
      { postsData }
    </div>
  );  
}


export default Content;