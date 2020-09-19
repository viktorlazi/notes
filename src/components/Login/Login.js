import React, { Component } from 'react'
import './login.css'
import Cookies from 'js-cookie'
import axios from 'axios'
import FormData from 'formdata'

export default class Login extends Component {

 
    posalji = () =>{
    let formData = new FormData();
    formData.append('username', 'viktor');
    formData.append('password', 'passw');
    
    axios.post("http://viktorlazi.com/php/login.php",
        {
            username:'viktor',
            password:'passw'
        }
        ).then(res=>res)
        .then((data)=>{
            console.log(data.data)
        })
        .catch(console.log);
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
