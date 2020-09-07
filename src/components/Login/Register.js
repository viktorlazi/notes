import React, { Component } from 'react'
import './login.css'

export default class Register extends Component {
    render() {
        return (
            <div class="login-body">
                <div class="login-div">
                    <div class="logo"></div>
                    <div class="title">Notes</div>
                    <div class="fields" style={{padding:"50px 5px 30px 5px"}}>
                        <div class="username"><input type="username" class="user-input" placeholder="Email" /></div>
                        <div class="password"><input type="password" class="pass-input" placeholder="Password" /></div>
                        <div class="password"><input type="password" class="pass-input" placeholder="Repeat password" /></div>
                    </div>
                    <button class="signin-button">REGISTER</button>
                    <div class="link"><a href="/notes/login">Have an account? Log in</a></div>
                    <div class="link"><a href="/notes/">Go back to preview</a></div>
                </div>
            </div>

        )
    }
}
