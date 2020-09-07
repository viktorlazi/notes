import React, { Component } from 'react'
export default class Viktor extends Component {
    style = {
        textAlign:'center',
        marginTop:'30px'
    }
    render() {
        return (
            <p style={this.style} id="viktor">made by <a style={{textDecoration:'none'}} href="viktorlazi.com">Viktorlazi</a></p>
        )
    }
}
