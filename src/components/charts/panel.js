import React,{Component} from 'react';

class Description extends Component {
    render(){
        return(
            <div id="app-description">
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
            </div>
        );
    }
}

class ButtonPanel extends Component {
    render(){
        return(
            <div className="button-section container row">
                    <div className="col-md-4">
                        <label>Date:</label>
                        <input type="date"></input>
                    </div>
                    <div className="col-md-4">
                        <label>Base:</label>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input id="search" type="text" placeholder="Search" onChange={this.searchCharts}></input>
                        <button><i className="fa fa-search"></i></button>
                    </div>
                </div>    
        );
    }
}

export default class ChartPanel extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.getData = this.getData.bind(this);
        this.searchCharts = this.searchCharts.bind(this);
    }
    
    searchCharts(){
        let input = document.getElementById('search').value,
            tableEntries = document.getElementsByTagName('td');
        
        for(let entry in tableEntries){
            if(entry.value.includes(input))
                console.log(entry);
        }
    }
    
    getData(){
        fetch('https://ssr-omriwallach.c9users.io/api/latest')
            .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result);
                        this.setState({
                            timeStamp: result.timestamp,
                            base: result.base,
                            date: result.date,
                            rates: result.rates
                        });
                    }    
                );
    }
    
    renderRates(){
        if(this.state.rates)
            return Object.keys(this.state.rates).map((currency,index) => {
                return(
                    <tr key={index}>
                        <td>{currency}</td>
                        <td>{this.state.rates[currency]}</td>
                    </tr>
                );
            });
    }
    
    render(){
        return(
            <div className="chart-panel">
                <Description/>
                <ButtonPanel/>
                
                <div className="rates-header-section">
                    <span>Rates:</span>
                    <span>TimeStamp: {this.state.timeStamp}</span>
                </div>
                <div className="rates-section">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <hr/>
                        <tbody>
                            {this.renderRates()}
                        </tbody>
                    </table>
                    <button className="reload-btn" onClick={this.getData}>Reload</button>
                </div>
            </div>
        );
    }
}