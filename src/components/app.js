import React,{Component} from 'react';
import Header from './header.js';
import Footer from './footer.js';
import AppContent from './content.js';
import {HashRouter} from "react-router-dom";


export default class App extends Component {
    render(){
        return(
            <HashRouter>
                <div id="app">
                    <Header/>
                    <AppContent/>
                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}