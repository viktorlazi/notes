import React, { Component } from 'react'
import './login.css'
import Cookies from 'js-cookie'
import axios from 'axios'

export default class Login extends Component {

    /*
    posalji = () =>{

        let u = "viktor";
        let p = "passw";
        
        console.log(Cookies.get()); 

        fetch('http://viktorlazi.com/php/login.php', {
            method:'post',
            headers:{
                'Accept':'text/html',
                'Content-Type':'text/html'
            },
            body: JSON.stringify({
                username:u,
                password:p
            })
        })
        .then(res => res.text())
        .then((data) => {
            console.log(data)
        })
        .catch(console.log);
    }
    */
   posalji = () =>{
    axios.post('http://viktorlazi.com/php/login.php', {},{
        auth:{
            username:'viktor',
            password:'passw'
        }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
