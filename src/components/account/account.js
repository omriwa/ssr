import React,{Component} from 'react';


class RegisterPanel extends Component {
    render(){
        return(
            <div id="register">
                register
            </div>
        );
    }
}

class LoginPanel extends Component {
    render(){
        return(
            <div id="login">
                login
            </div>
        );
    }
}

export default class AccountPanel extends Component {
    constructor(props){
        super(props);
        this.state = {login: true};
    }
    
    renderLoginOrRegister(){
        if(this.state.login)
            return <LoginPanel/>;
        else
            return <RegisterPanel/>;
    }
    
    render(){
        return(
            <div id="account-panel">
                {this.renderLoginOrRegister()}
                <button onClick={() => {this.setState({login: false})}}>Register</button>
            </div>
        );
    }
}