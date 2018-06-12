import React,{Component} from 'react';
import ChartPanel from './charts/panel.js';
import AccountPanel from './account/account.js';
import {Route} from "react-router-dom";

export default class AppContent extends Component {
    render(){
        return(
            <div className={'app-content'}>
                <Route path='/app' component={ChartPanel}/>
                <Route path='/account' component={AccountPanel}/>
            </div>
        );
    }
}