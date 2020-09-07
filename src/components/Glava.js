import React, { Component } from 'react'
import './glava.css'

export default class Glava extends Component {
    render() {
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
                        <li><a href="/login">Log In</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
