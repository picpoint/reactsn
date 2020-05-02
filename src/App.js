import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Messages from './Components/Messages/Messages';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';



function App() {
  return (
    <BrowserRouter>
      <div className="generalwrapper">      
        <Header/>      
        
        <div className="generalbody">        
          <Navbar/>
          <Route path="/profile" component={Content} />
          <Route path="/messages" component={Messages}/>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>

      </div>
      </BrowserRouter>
  );
}

export default App;
