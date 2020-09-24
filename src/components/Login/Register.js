import React, { Component } from 'react'
import Login from './Login';
import './login.css'

export default class Register extends Component {

    state = {
        username:'',
        password:'',
        password2:''
    }

    posalji = () =>{
        if(this.state.password === this.state.password2){
            
        var d = new URLSearchParams(
            'username='+this.state.username+'&password='+this.state.password
        );
        
        var requestOptions = {
            method: 'POST',
            body: d
        };

        fetch("http://viktorlazi.com/php/register.php", requestOptions)
        .then(response => response.text())
        .then(result => {
            if(result === 'greska'){
                console.log(result);
                
            }else if(result === 'ime postoji'){
                alert('username already exists');
            }
            else{
                localStorage.setItem('user', result);
                this.login();
            }
        })
        .catch(error => console.log('error', error));
   }else{
       alert("passwords don't match");
   }
    }
   krivo = ()=>{
       alert('incorrect information or user does not exist');
   }
   register = () =>{
       window.location.replace('http://viktorlazi.com/notes');
   }
   handlePassChange = event =>{
       this.setState({
           password:event.target.value
       })
   }
   handlePass2Change = event =>{
    this.setState({
        password2:event.target.value
    })
    }
   handleUserChange = event =>{
        this.setState({
            username:event.target.value
    })
    }

    login = () =>{
        window.location.replace('http://viktorlazi.com/notes');
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
                        <div class="password"><input onChange={this.handlePass2Change} type="password" class="pass-input" placeholder="Password repeat" /></div>
                    </div>
                    <button onClick={()=>this.posalji()} class="signin-button">REGISTER</button>
                    <div class="link"><a href="/notes/login">Have an account? Log in</a></div>
                    <div class="link"><a href="/notes/">Go back to preview</a></div>
                    <br/>
            </div>
            </div>
        )
    }
}
