import { Component } from 'react';
import moment from "moment";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <h1 >ray molina</h1>
       <div>{ moment().format('MMMM Do YYYY, h:mm:ss a')} </div> 
        
        
      </header>
    </div>
  );
}


export default App;
