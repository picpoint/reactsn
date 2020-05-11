import React from 'react';
import msg from './Messages.module.css';
import { NavLink } from 'react-router-dom';


let datasUsers = [
  {id: 1, name: "Dimych"},
  {id: 2, name: "Semen"},
  {id: 3, name: "Ivan"},
  {id: 4, name: "Igor"},
  {id: 5, name: "Petro"}
];


let datasMessages = [
  {id: 1, dtmsg: "Hi"},
  {id: 2, dtmsg: "Hello"},
  {id: 3, dtmsg: "all fine"}
];





function SingleUser(props) {
  return (    
    <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>    
  );
}


function UserMessage(props) {
  return(
  <span>{props.message}</span>
  );
}





let dElems = datasUsers.map((d) => {
  return <SingleUser id={d.id} name={d.name} />
});


let mElems = datasMessages.map((m) => {
  return <UserMessage id={m.id} message={m.dtmsg}/>        
});






function Messages() {
  return(
    <div className={msg.messages}>
      
      <div className={msg.users}>        
        { dElems }
      </div>
      
      <div className={msg.usrmsg}>          
        { mElems }
      </div>

    </div>
  );  
}


export default Messages;