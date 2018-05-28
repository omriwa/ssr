import React,{Component} from 'react';
import Header from './header.js';
import Footer from './footer.js';

export default class App extends Component {
    render(){
        return(
            <div id="app">
                <Header/>
                <Footer/>
            </div>
        );
    }
}