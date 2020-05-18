import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import datas from './redux/state';



// let dts = {
//   dataUsers: [
//     {id: 1, name: "Dmitry"},
//     {id: 2, name: "Semen"},
//     {id: 3, name: "Petro"},
//     {id: 4, name: "Igor"},
//   ],

//   dataMessage: [
//     {id: 1, msg: "Hi"},
//     {id: 2, msg: "hello"},  
//     {id: 3, msg: "bu ga ga"},
//   ],

//   postsArr: [
//     {name: "Semen", age: 20},
//     {name: "Petro", age: 10},
//     {name: "Igor", age: 40},
//     {name: "Noname", age: 0},
//     {name: "One"},
//     {age: 0}
//   ]  
// };



ReactDOM.render(<React.StrictMode> <App dt={datas}/></React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
