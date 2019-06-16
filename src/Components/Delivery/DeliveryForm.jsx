import React, { Component } from "react";
import "./DeliveryForm.scss";

class DeliveryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: this.props.service
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {
        e.preventDefault();
        console.log(this.props.service)
        this.props.onSubmit(this.props.service);
    }

    render () {
        const service = this.props.service
        return (
            <div className="c-DeliveryForm">
            { this.props.service ? (
                <form onSubmit={this.handleSubmit}>
                    <input type="hidden" defaultValue={this.state.service} />
                    <div className="service">
                        <p><b>{service.name}</b><br />
                        drop-off at {service.carrier}</p>
                    </div>
                    <div className="price">
                        <p>Total £{service.price}</p>
                    </div>
                    <div className="purchase">
                        <button type="submit" className="btn btn-prim gh-spr">Purchase and print label</button>
                    </div>
                </form>) : (
                    <p>Please select service</p>
                )
            }
            </div>
        );
    }
}

export default DeliveryForm;
