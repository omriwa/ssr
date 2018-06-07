import React, { Component } from 'react';


class RegisterPanel extends Component {
    constructor(props) {
        super(props);
        this.postData = this.postData.bind(this);
    }

    postData() {
        alert('postData')
    }

    render() {
        return (
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
    constructor(props) {
        super(props);
        this.postData = this.postData.bind(this);
    }

    postData(e) {
        fetch('https://ssr-omriwallach.c9users.io/account/login', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: {}
        });
    }

    render() {
        return (
            <form className={"account-form"} id="login">
                <label>Username:</label>
                <input type="text"/>
                <label>Password:</label>
                <input type="passowrd"/>
                <button className={"btn btn-md btn-primary"} onClick={this.postData}>Login</button>
            </form>
        );
    }
}

export default class AccountPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { login: true };
    }

    renderLoginOrRegister() {
        if (this.state.login)
            return <LoginPanel/>;
        else
            return <RegisterPanel/>;
    }

    render() {
        return (
            <div id="account-panel">
                {this.renderLoginOrRegister()}
                <button onClick={() => {this.setState({login: false})}}>Register</button>
            </div>
        );
    }
}
