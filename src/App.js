import React from 'react';
import './App.css';
import PageTitle from './Components/PageTitle/index'
import Notification from './Components/Notification/index'

function App() {
  return (
    <div className="App">
      <PageTitle />
      <Notification type="info" message="You have been paid. Please, print your label and dispatch your item." />
    </div>
  );
}

export default App;
