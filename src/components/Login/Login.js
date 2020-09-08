import React, { Component } from 'react'
import './login.css'

export default class Login extends Component {

    posalji = () =>{
        /*
        fetch(
            'http://viktorlazi.com/php/login.php',
            {
                method:'POST',
                body:{
                    'username':'viktor',
                    'password':'ldylkfj'
                }
            }
            
        ).then(response=>console.log(response));
        */
    }

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
                    <button onClick={()=>this.posalji()} class="signin-button">LOG IN</button>
                    <div class="link"><a href="/notes/register">Don't have an account? Register</a></div>
                    <div class="link"><a href="/notes/">Go back to preview</a></div>

           </div>
            </div>
        )
    }
}
