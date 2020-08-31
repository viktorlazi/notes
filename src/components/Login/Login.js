import React, { Component } from 'react'
import './login.css'

export default class Login extends Component {
    render() {
        return (
            <div class="login-body">
                <div class="login-div">
                    <div class="logo"></div>
                    <div class="title">Notes</div>
                    <div class="fields">
                        <div class="username"><input type="username" class="user-input" placeholder="Email" /></div>
                        <div class="password"><input type="password" class="pass-input" placeholder="Password" /></div>
                    </div>
                    <button class="signin-button">LOG IN</button>
                    <div class="link"><a href="../register">Don't have an account? Register</a></div>
                </div>
            </div>
        )
    }
}
