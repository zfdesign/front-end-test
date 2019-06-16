import React, { Component } from "react";

class Delivery extends Component {
    constructor(props) {
        super(props);
        this.onSelectedDelivery = this.onSelectedDelivery.bind(this)
    }

    onSelectedDelivery (service) {
        // console.log(service)
        this.props.onChange(service);
    }

    componentDidMount() {
        if (this.props.selected) {
            this.onSelectedDelivery(this.props.service)
        }
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
                    <p><b>{service.name}</b><br />
                    drop-off at {service.carrier}</p>
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
