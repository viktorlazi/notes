import React, { Component } from 'react'
import './login.css'

export default class Register extends Component {
    render() {
        return (
            <div class="login-div">
                <div class="logo"></div>
                <div class="title">Notes</div>
                <div class="fields" style={{padding:"50px 5px 30px 5px"}}>
                    <div class="username"><input type="username" class="user-input" placeholder="Username" /></div>
                    <div class="password"><input type="password" class="pass-input" placeholder="Password" /></div>
                    <div class="password"><input type="password" class="pass-input" placeholder="Repeat password" /></div>
                </div>
                <button class="signin-button">REGISTER</button>
                <div class="link"><a href="../login">Have an account? Log in</a></div>
            </div>
        )
    }
}
