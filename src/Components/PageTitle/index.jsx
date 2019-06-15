import React, { Component } from "react";
import "./PageTitle.scss";

class PageTitle extends Component {
    constructor(props) {
        super(props);
        // State values can be:
        // * passed in as props
        // * aquired from api 
        // * generated in a build step
        // * imported from a local file, containing all locales
        this.state = {
            title: "Print Label",
            logo: {
                alt: "eBay logo",
                height: "37",
                src: "./assets/ebay-logo.svg",
                width: "89"
            }
        };
    }

    render () {
        return (
            <div className="c-pageTitle">
                <div className="logo-container">
                    <img 
                        src={this.state.logo.src} 
                        alt={this.state.logo.alt} 
                        width={this.state.logo.width} 
                        height={this.state.logo.height} />
                </div>
                <h1 className="large-text-2">{this.state.title}</h1>
            </div>
        );
    }
}

export default PageTitle;
