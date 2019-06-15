import React, { Component } from "react";
import "./Seller.scss";

class Seller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencySymbol: "£"
        }
    }

    render () {
        const seller = this.props.seller
        return (
            <div className="c-Seller">
                <h2>Ship from</h2>
                <p>{seller.city}, {seller.postalCode}</p>
            </div>
        );
    }
}

export default Seller;
