import React from 'react';
import './less/style.less';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';


function App() {
  return (
    <div className="app-wrapper">            
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}


export default App;
