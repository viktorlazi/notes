import React, { Component } from 'react'
import './glava.css'


export default class Glava extends Component {

    constructor(props){
        super(props);
    }
    state={
        token:localStorage.getItem('user'),
        loggedIn:false
    }

    
    componentDidMount(){
        if(this.state.token != null){
            this.setState({
                loggedIn:true
            });
        }else{
            this.setState({
                loggedIn:false
            });
        }
    }
    logout=()=>{
        if(window.confirm('Log out?')){            
            localStorage.removeItem('user');
            this.setState({
                loggedIn:false
            });
        }
    }
    commit = ()=>{
        this.props.commit();
    }


    render() {
        if(!this.state.loggedIn){
            return (
                <header>
                    <nav>
                        <h1 class="desk">Notes</h1>
                        <ul class="stats">
                            <li>
                                1,204 users
                            </li>
                            <li>
                                34,695 topics
                            </li>
                            <li>
                                1,450,332 words
                            </li>
                        </ul>
                        <ul id="log-ul">
                            <li><a href="/notes/login">Log In</a></li>
                            <li><a href="/notes/register">Register</a></li>
                        </ul>
                    </nav>
                </header>
            )
        }else{
            return(
            <header>
                    <nav>
                        <h1 class="desk">Notes</h1>
                        <ul class="stats">
                            <li>
                                1,204 users
                            </li>
                            <li>
                                34,695 topics
                            </li>
                            <li>
                                1,450,332 words
                            </li>
                        </ul>
                        <ul class="logout" onClick={()=>this.commit()} style={{cursor:"pointer"}}>
                            <li>
                                <strong>
                                    Commit changes
                                </strong>
                            </li>
                        </ul>
                        <ul id="logout">
                            <li><a onClick={()=>this.logout()}>Log out</a></li>
                        </ul>
                    </nav>
                </header>
            );
        }
    }
}
