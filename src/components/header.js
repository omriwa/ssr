import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { siteLinks: ['About', 'Development', 'Contact','app'], accountLinks: ['account'] };
    }
    
    createLinks(links){
        return links.map((link) => <li className={"nav-link"}><NavLink to={'/' + link}>{link}</NavLink></li>);
    }

    render() {
        return (
            <div id="header">
                <nav id="navbar" className="row">
                    <ul className="inline-nav col-md-6" id="left-nav-link-list">
                        <li className="nav-link"><NavLink to={'/'}>Home</NavLink></li>
                        {this.createLinks(this.state.siteLinks)}
                    </ul>
                    <ul id="nav-right-links" className="inline-nav col-md-6" id="right-nav-link-list">
                        {this.createLinks(this.state.accountLinks)}
                    </ul>
                </nav>
            </div>
        );
    }
}
