import React, { Component } from 'react'
import './tema.css'

export default class Tema extends Component {
    render() {
        return (
            <div className="">
                {/* prva linija je tema, a ispod su default 
                    default skrivena djeca */}
                <p>{this.props.state.naslov}</p>
                <div class="djeca">
                    {this.props.state.djeca.map(
                        (state) => {
                            return <Tema state={state} />
                        }
                    )}
                </div>

            </div>
        )
    }
}
