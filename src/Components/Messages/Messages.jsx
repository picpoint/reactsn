import React from 'react';
import msg from './Messages.module.css';
import { NavLink } from 'react-router-dom';




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





function Messages(props) {

  let usr = props.dataUsers.map((d) => {    
    return(
      <SingleUser id={d.id} name={d.name}/>
    );
  });


  let msgusrs = props.dataMessage.map((m) => {
    return(
      <UserMessage msg={m.msg}/>
    );
  });




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