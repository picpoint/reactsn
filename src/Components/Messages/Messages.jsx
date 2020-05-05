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



function Messages() {
  return(
    <div className={msg.messages}>
      
      <div className={msg.users}>
        <SingleUser id={datasUsers[0].id} name={datasUsers[0].name}/>
        <SingleUser id={datasUsers[1].id} name={datasUsers[1].name}/>
        {/* <SingleUser id="3" name="Ivan"/>        
        <SingleUser id="4" name="Igor"/>
        <SingleUser id="5" name="Petro"/>         */}
      </div>
      
      <div className={msg.usrmsg}>  
        <UserMessage id={datasMessages[0].id} message={datasMessages[0].dtmsg}/>
        <UserMessage id={datasMessages[1].id} message={datasMessages[1].dtmsg}/>
        {/* <UserMessage message="Hi"/>
        <UserMessage message="Hello"/>
        <UserMessage message="all fine"/>
        <UserMessage message="so so"/>
        <UserMessage message="ok"/> */}
      </div>

    </div>
  );  
}


export default Messages;