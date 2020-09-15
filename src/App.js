import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';


function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        {/*Sidebar */}

      </div>
     

    </div>
  );
}

export default App;
