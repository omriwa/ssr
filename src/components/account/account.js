import React, { Component } from 'react';
import $ from 'jquery';


class RegisterPanel extends Component {
    constructor(props) {
        super(props);
        this.postData = this.postData.bind(this);
    }

    postData(e) {
        e.preventDefault();
        $.post("https://ssr-omriwallach.c9users.io/account/register", { name: "John", time: "2pm" })
            .done(function(data) {
                alert("Data Loaded: " + data);
            });
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
                <button className={"btn btn-md btn-primary"} onClick={this.postData}>Register</button>
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
        e.preventDefault();
        $.post("https://ssr-omriwallach.c9users.io/account/login", { name: "John", time: "2pm" })
            .done(function(data) {
                alert("Data Loaded: " + data);
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
        this.changeForm = this.changeForm.bind(this);
    }

    renderLoginOrRegister() {
        if (this.state.login)
            return <LoginPanel/>;
        else
            return <RegisterPanel/>;
    }
    
    changeForm(){
        let btn = $('#account-connect-method-btn');
        this.setState({login: !this.state.login});//change login state
        console.log(this.state.login);
        if(this.state.login)
            btn.text('Login!')
        else
            btn.text('Register!');
    }

    render() {
        return (
            <div id="account-panel">
                {this.renderLoginOrRegister()}
                <button id="account-connect-method-btn" onClick={this.changeForm}>Register!</button>
            </div>
        );
    }
}
