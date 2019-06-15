import React, { Component } from "react";
import Product from "./Product";
import Buyer from "./Buyer";
import Seller from "./Seller";
import "./Order.scss";

class Order extends Component {
    render () {
        return (
            <div className="c-Order">
                {this.props.order && 
                    this.props.order.map((o, i) => {
                        return (
                            <div className="order" key={`order_${i}`}>
                                <Product item={o.item} />
                                <Buyer buyer={o.buyer} />
                                <Seller seller={o.shipFrom} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Order;
