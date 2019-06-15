import React from 'react';
import apiClient from './Utils/api.client';

import './App.css';

import PageTitle from './Components/PageTitle/index'
import Notification from './Components/Notification/index'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: null,
      services: null
    };

    this.onUnavailableHandler = function (err, file, lineNo) {return new Error(err, file, lineNo)}
  }

  componentWillMount () {
    apiClient
      .getDraftLabel()
      .then(res => {
        const data = res.data;
        this.setState({ ...data })
      })
      .catch(err => {
        this.onUnavailableHandler(err, 'app.js', 25);
      });
  }

  render () {
    return (
      <div className="App">
        <PageTitle />
        <Notification type="info" message="You have been paid. Please, print your label and dispatch your item." />
      </div>
    );
    }
}

export default App;
