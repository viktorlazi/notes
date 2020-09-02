import React, { Component } from 'react'
import './glava.css'

export default class Glava extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                    <li><a href="/login">Log In</a></li>
                    <li><a href="/register">Register</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
