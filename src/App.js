import React from 'react';
import './less/style.less';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/content/Content';
import Dialogs from './components/Dialogs/Dialogs';



function App() {
  return (
    <div className = "general">
      <div className = "general__topBlock">
        <Header/>
      </div>
      <div className = "general__centerBlock">
        <Navbar/>        
        <Content/>
        {/* <Dialogs/> */}
      </div>
    </div>
  );
}


export default App;
