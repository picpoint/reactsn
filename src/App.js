import React from 'react';
import './less/style.less';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';


function App() {
  return (
    <div className="app-wrapper">            
      <div className="app-wrapper__hdr">
        <Header />
      </div>
      <div className="app-wrapper__bdy">
        <Navbar />
        <Content />
      </div>      
    </div>
  );
}


export default App;
