import React, { Component } from "react";
import "./Notification.scss";

class Notification extends Component {
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
