import React,{Component} from 'react';

export default class ChartPanel extends Component {
    render(){
        return(
            <div className="chart-panel">
                <h3>headline</h3>
                <div className="button-section">
                    <div className="btn-container">
                        <label>Date:</label>
                        <button></button>
                    </div>
                    <div className="btn-container">
                        <label>Base:</label>
                        <button></button>
                    </div>
                    <div className="btn-container">
                        <button>Search</button>
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
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}