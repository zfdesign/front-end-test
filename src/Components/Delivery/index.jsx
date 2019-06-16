import React, { Component } from "react";
import DeliveryService from "./DeliveryService";
import "./Delivery.scss";

class Delivery extends Component {
    render () {
        return (
            <div className="c-Delivery">
                <h2 id="deliveryDesc">Delivery services</h2>
                <table className="delivery-services" aria-describedby="deliveryDesc">
                    {/* Could use <caption> */}
                    <thead>
                    <tr>
                        <th colSpan="2">Service</th>
                        <th>Insurance</th>
                        <th>Estimated delivery</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.services && 
                        this.props.services.map((service, i) => {
                            return (
                                <DeliveryService 
                                    onChange={this.props.onSectedDelivery} 
                                    service={service} 
                                    selected={i === 0}
                                    key={`service_${i}`} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Delivery;
