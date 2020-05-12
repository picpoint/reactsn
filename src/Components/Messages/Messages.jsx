import React from 'react';
import msg from './Messages.module.css';
import { NavLink } from 'react-router-dom';
// import dataUsers from '../../dataUsers';
// import dataMessage from '../../dataMessage';

let dataUsers = [
  {id: 1, name: "Dmitry"},
  {id: 2, name: "Semen"},
  {id: 3, name: "Petro"},
  {id: 4, name: "Igor"},
];

let dataMessage = [
  {id: 1, msg: "Hi"},
  {id: 2, msg: "hello"},  
  {id: 3, msg: "bu ga ga"},
];





function SingleUser(props) {
  return(
    <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
  );  
}

function UserMessage(props) {
  return(
    <span>{props.msg}</span>
  );
}



let usr = dataUsers.map((d) => {
  return(
    <SingleUser id={d.id} name={d.name}/>
  );
});

let msgusrs = dataMessage.map((m) => {
  return(
    <UserMessage msg={m.msg}/>
  );
});





function Messages(props) {
  return(
    <div className={msg.messages}>
      
      <div className={msg.users}>        
        { usr }
      </div>
      
      <div className={msg.usrmsg}>          
        { msgusrs }
      </div>

    </div>
  );  
}


export default Messages;