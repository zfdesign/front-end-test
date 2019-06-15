import React, { Component } from "react";
import "./Product.scss";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencySymbol: "£"
        }
    }

    render () {
        return (
            <div className="c-Product">
            <h2>Sold Item</h2>
            <img src="./assets/s-l1600.png" width="50" alt={this.props.item.description} />
            <div className="item">
                <h3>{this.props.item.description}</h3>
                {this.props.item.variations.map((v, i) => {
                    const variationKey = Object.keys(v)[i]
                    return (
                        <p className="variation" key={variationKey}>{`${variationKey}: ${v[variationKey]}`}</p>
                    )
                })}
                <p>{`${this.state.currencySymbol}${this.props.item.price}`}</p>
            </div>
        </div>
        );
    }
}

export default Product;
