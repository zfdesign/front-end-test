import React, { Component } from "react";

class Delivery extends Component {
    constructor(props) {
        super(props);
        this.onSelectedDelivery = this.onSelectedDelivery.bind(this)
    }

    onSelectedDelivery (service) {
        console.log(service)
        this.props.onChange(service);
    }

    render () {
        const service = this.props.service
        return (
            <tr className="c-DeliveryService">
                <td>
                    <input 
                    type="radio" 
                    name="deliveryService" 
                    value={service.carrier} 
                    defaultChecked={this.props.selected}
                    onChange={(event) => this.onSelectedDelivery(service)}
                    />
                </td>
                <td>
                    <h3>{service.name}<br />
                    <span className="small">drop-off at {service.carrier}</span></h3>
                    <p>Max {service.dimensions}</p>
                </td>
                <td>Up to £{service.insurance} included</td>
                <td>{service.estimatedDelivery}</td>
                <td className="price">£{service.price}</td>
            </tr>
        );
    }
}

export default Delivery;
