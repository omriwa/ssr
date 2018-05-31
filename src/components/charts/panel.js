import React,{Component} from 'react';

export default class ChartPanel extends Component {
    render(){
        return(
            <div className="chart-panel">
                <h3>Sabrez Stock Calculator App</h3>
                <p>
                    Sabrez developing CRM, developed this application for brokers,private use,company use. 
                    easy to use,and intuitive.
                </p>
                <h4>The Stock Calculator App</h4>
                <ul className="explantion">
                    <li>ACTIONS:</li>
                    <li>Getting realtime data of the diffrent charts.</li>
                    <li>Converting any kind of currency in realtime.</li>
                </ul>
                <div className="button-section">
                    <div className="btn-container">
                        <label>Date:</label>
                        <input type="date"></input>
                    </div>
                    <div className="btn-container">
                        <label>Base:</label>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className="btn-container">
                        <input type="text" placeholder="Search"></input>
                        <button><i className="fa fa-search"></i></button>
                    </div>
                </div>
                
                <div className="rates-header-section">
                    <span>Rates:</span>
                    <span>TimeStamp:</span>
                </div>
                <div className="rates-section">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>assdsd</td>
                                <td>assdsd</td>
                            </tr>
                            <tr>
                                <td>assdsd</td>
                                <td>assdsd</td>
                            </tr>
                            <tr>
                                <td>assdsd</td>
                                <td>assdsd</td>
                            </tr>
                            <tr>
                                <td>assdsd</td>
                                <td>assdsd</td>
                            </tr>
                            <tr>
                                <td>assdsd</td>
                                <td>assdsd</td>
                            </tr>
                            <tr>
                                <td>assdsd</td>
                                <td>assdsd</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="reload-btn">Reload</button>
                </div>
            </div>
        );
    }
}