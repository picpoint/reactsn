import React from 'react';
import './less/style.less';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { Route, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className = "general">
        <div className = "general__topBlock">
          <Header/>
        </div>
        <div className = "general__centerBlock">        
          <Navbar/>        
          <Route path="/profile" component={Content}/>
          <Route path="/dialogs" component={Dialogs}/>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
          {/* <Content/> */}
          {/* <Dialogs/> */}
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
