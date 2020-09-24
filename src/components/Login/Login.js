import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import './login.css'

export default class Login extends Component {

    state = {
        username:'',
        password:''
    }

    posalji = () =>{
        var d = new URLSearchParams(
            'username='+this.state.username+'&password='+this.state.password
        );
        
        var requestOptions = {
            method: 'POST',
            body: d
        };

        fetch("http://viktorlazi.com/php/login.php", requestOptions)
        .then(response => response.text())
        .then(result => {
            if(result != 'krivo'){
                localStorage.setItem('user', result);
                this.login();
                
            }else{
                this.krivo();
            }
        })
        .catch(error => console.log('error', error));
   }
   krivo = ()=>{
       alert('incorrect information or user does not exist');
   }
   login = () =>{
       window.location.replace('http://viktorlazi.com/notes');
   }
   handlePassChange = event =>{
       this.setState({
           username:this.state.username,
           password:event.target.value
       })
   }
   handleUserChange = event =>{
        this.setState({
            username:event.target.value,
            password:this.state.password
    })
}

    render() {
        return (
            <div class="login-body">
                <div class="login-div">
                    <div class="logo"></div>
                    <div class="title">Notes</div>
                    <div class="fields">
                        <div class="username"><input onChange={this.handleUserChange} type="username" class="user-input" placeholder="Username" /></div>
                        <div class="password"><input onChange={this.handlePassChange} type="password" class="pass-input" placeholder="Password (max. 20 characters)" /></div>
                    </div>
                    <button onClick={()=>this.posalji()} class="signin-button">LOG IN</button>
                    <div class="link"><a href="/notes/register">Don't have an account? Register</a></div>
                    <div class="link"><a href="/notes/">Go back to preview</a></div>

            </div>
            </div>
        )
    }
}
