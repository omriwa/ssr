import React,{Component} from 'react';

export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {copyright: "This site was developed by Omri Wallach, 2018 ©"};
    }
    render(){
        return(
            <footer>
            {/* website links */}
                <div id="footer-links">
                    LINKS
                </div>
                <div id="copyright">
                    {this.state.copyright}
                </div>
            </footer>
        );
    }
}