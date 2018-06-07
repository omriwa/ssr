import React,{Component} from 'react';

class RegisterPanel extends Component {
    render(){
        return(
            <form className={"account-form"} id="register">
                <label>First name:</label>
                <input type="text"/>
                <label>Last name:</label>
                <input type="text"/>
                <label>Username:</label>
                <input type="text"/>
                <label>Password:</label>
                <input type="password"/>
                <label>Repeat passowrd:</label>
                <input type="password"/>
                <label>Email:</label>
                <input type="email"/>
                <button className={"btn btn-md btn-primary"}>Register</button>
            </form>
        );
    }
}

class LoginPanel extends Component {
    render(){
        return(
            <form className={"account-form"} id="login">
                <label>Username:</label>
                <input type="text"/>
                <label>Password:</label>
                <input type="passowrd"/>
                <button className={"btn btn-md btn-primary"}>Login</button>
            </form>
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