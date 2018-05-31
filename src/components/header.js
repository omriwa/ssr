import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { navLinks: ['a', 'b', 'c'] };
    }
    
    createLinks(){
        return this.state.navLinks.map((link) => <li className="nav-link"><a href={'/' + link}>{link}</a></li>);
    }

    render() {
        return (
            <div id="header">
                <nav id="navbar" className="row">
                    <ul className="inline-nav col-md-6" id="left-nav-link-list">
                        {this.createLinks()}
                    </ul>
                    <ul className="inline-nav col-md-6" id="right-nav-link-list">
                        {this.createLinks()}
                    </ul>
                </nav>
            </div>
        );
    }
}
