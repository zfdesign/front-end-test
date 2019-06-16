import React from 'react';
import apiClient from './Utils/api.client';

import './App.scss';

import PageTitle from './Components/PageTitle/index'
import Notification from './Components/Notification/index'
import Order from './Components/Order/index'
import Delivery from './Components/Delivery/index'
import PurchaseForm from './Components/PurchaseForm/index'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: null,
      services: null,
      selectedDelivery: null
    };

    this.sectedDelivery = this.setSelectedDelivery.bind(this)
    this.purchaseDelivery = this.purchaseDelivery.bind(this)

    this.onUnavailableHandler = function (err, file, lineNo) {return new Error(err, file, lineNo)}
  }

  setSelectedDelivery (delivery) {
    // console.log(delivery)
    this.setState({selectedDelivery: delivery})
  }

  purchaseDelivery () {
    // TODO: server.js
    apiClient.purchaseDelivery(this.state.selectedDelivery)
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
        <Order order={this.state.order} />
        <Delivery services={this.state.services} onSectedDelivery={this.sectedDelivery} />
        <PurchaseForm service={this.state.selectedDelivery} onSubmit={this.purchaseDelivery} />
      </div>
    );
    }
}

export default App;
