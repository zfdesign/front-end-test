import React, { Component } from "react";
import "./PurchaseForm.scss";

class PurchaseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: this.props.service
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {
        e.preventDefault();
        // console.log(this.props.service)
        this.props.onSubmit();
    }

    render () {
        const service = this.props.service
        return (
            <div className="c-PurchaseForm">
                { this.props.service ? (
                    <form onSubmit={this.handleSubmit}>
                        <p className="service">
                            <b>{service.name}</b><br />
                            drop-off at {service.carrier}
                        </p>
                        <p className="price">Total £{service.price}</p>
                        <fieldset className="purchase">
                            <input type="hidden" defaultValue={this.state.service} />
                            <button type="submit" className="btn btn-prim gh-spr">Purchase and print label</button>
                        </fieldset>
                    </form>
                ) : (
                    <p>Please select service</p>
                )}
            </div>
        );
    }
}

export default PurchaseForm;
