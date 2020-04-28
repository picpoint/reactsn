import React from 'react';
import './less/style.less';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/content/Content';


function App() {
  return (
    <div className = "general">
      <div className = "general__topBlock">
        <Header/>
      </div>
      <div className = "general__centerBlock">
        <Navbar/>        
        <Content/>
      </div>
    </div>
  );
}


export default App;
