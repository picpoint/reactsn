import React from 'react';
import hdr from './Header.module.css';



function Header () {
  return (
    <div className={hdr.hdrblock}>
      <img src="/pict/code.png" alt="logo"/>
    </div>
  );  
}

export default Header;