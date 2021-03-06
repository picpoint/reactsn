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



function App(props) {
  return (
    <BrowserRouter>
      <div className="generalwrapper">      
        <Header/>      
        
        <div className="generalbody">        
          <Navbar/>
          {/* <Route path="/messages" component={Messages}/> */}
          <Route path="/profile" render={() => <Content postsArr={props.dt.postsArr}/>} />          
          <Route path="/messages" render={() => <Messages dataUsers={props.dt.dataUsers} dataMessage={props.dt.dataMessage}/>}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/settings" render={() => <Settings/>}/> 
        </div>

      </div>
      </BrowserRouter>
  );
}

export default App;
