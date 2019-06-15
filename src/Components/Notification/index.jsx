import React, { Component } from "react";
import "./Notification.scss";

class Notification extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="c-Notification">
                <p>
                    <span  className={`icon icon--${this.props.type}`}></span>
                    {this.props.message}
                </p>
            </div>
        );
    }
}

export default Notification;
