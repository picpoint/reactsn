import React from 'react';
import wrp from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


function Dialogs(props) {
	return (
		<div className={wrp.wrapper}>
			
      <div className={wrp.users}>
        <div className={wrp.usr}>          
          <NavLink to="/dialogs/1">Dmitry</NavLink>
        </div>
        <div className={wrp.usr}>
          <NavLink to="/dialogs/2">Stepan</NavLink>
        </div>
        <div className={wrp.usr}>
          <NavLink to="/dialogs/3">Semen</NavLink>
        </div>
        <div className={wrp.usr}>
          <NavLink to="/dialogs/4">Ivan</NavLink>
        </div>
      </div>
      
      <div className={wrp.messages}>
        <div className={wrp.msg}>
          <span>Hi all</span>
        </div>
        <div className={wrp.msg}>
          <span>Zdorova</span>
        </div>
        <div className={wrp.msg}>
          <span>Privet</span>
        </div>
      </div>


		</div>
	);	
}


export default Dialogs;