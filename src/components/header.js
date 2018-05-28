import React,{Component} from 'react';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {navLinks: ['a','b','c']};
    }
    
    renderLinks(){
        ['a','b','c'].map((link) => {
            <li><a>{{link}}</a></li>
        });
    }
    
    render(){
        return(
            <div id="header">
                <nav>
                    {this.renderLinks()}
                </nav>
            </div>
        );
    }
}