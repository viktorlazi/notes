import React, { Component } from 'react'
import './tema.css'

export default class Tema extends Component {
    state = {
        djeca : 0,
    }
    djeca = (djeca) =>{
        //this.props.changeAktivni(this.props.state.id);
        return (djeca ? {display:'block'}:{display:'none'})
    }
    aktivni = (aktivni) =>{
        
        return ((aktivni===this.props.state.id) ? {color:'#3a4bad'}:{color:'black'})
    }
    
    
    render() {
        return (
            <div className="">
                {/* prva linija je tema, a ispod su default 
                    default skrivena djeca */}
                <p style={this.aktivni(this.props.aktivni)} onClick={()=>{
                    this.setState({djeca:!this.state.djeca})
                    this.props.changeAktivni(this.props.state.id)
                    }}>{this.props.state.naslov}</p>
                <div class="djeca" style={this.djeca(this.state.djeca)}>
                    {this.props.state.djeca.map(
                        (state) => {
                            return <Tema 
                            changeAktivni={(a)=>this.props.changeAktivni(a)}
                            aktivni={this.props.aktivni}   
                            state={state} />
                        }
                    )}
                </div>
            </div>
        )
    }
}
