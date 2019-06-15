import React, { Component } from "react";
import "./Buyer.scss";

class Buyer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencySymbol: "£"
        }
    }

    render () {
        const buyer = this.props.buyer
        return (
            <div className="c-Buyer">
                <h2>Buyer</h2>
                <p><a href={`/usr/${buyer.ebayId}`}>{buyer.ebayId}</a></p>
                <p>Paid {this.state.currencySymbol}{buyer.shippingPrice} for Shutl 2-3 Days</p>
                <h2>Ship to</h2>
                <p>{buyer.name}</p>
                <p>{buyer.address1}, {buyer.city}, {buyer.postalCode}</p>
            </div>
        );
    }
}

export default Buyer;
