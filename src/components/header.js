import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { siteLinks: ['About', 'Development', 'Contact'], accountLinks: ['Login','Register'] };
    }
    
    createLinks(links){
        return links.map((link) => <li className="nav-link"><a href={'/' + link}>{link}</a></li>);
    }

    render() {
        return (
            <div id="header">
                <nav id="navbar" className="row">
                    <ul className="inline-nav col-md-6" id="left-nav-link-list">
                        <li className="nav-link"><a>Home</a></li>
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
