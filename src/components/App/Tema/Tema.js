import React, { Component } from 'react'
import './tema.css'
import Bin from '../../../bin.png'

export default class Tema extends Component {
    state = {
        djeca : 0,
    }
    djeca = (djeca) =>{
        return (djeca ? {display:'block'}:{display:'none'})
    }
    aktivni = (aktivni) =>{
        return ((aktivni===this.props.state.id) ? {color:'#db7b48'}:{color:'black'})
    }
    addNew = (path) =>{
        path = path===undefined?[]:path;
        path.unshift(this.props.state.id);
        this.props.addNew(path); // prenese array id-ova
    }
    smece = (path) =>{
        path = path===undefined?[]:path;
        path.unshift(this.props.state.id);
        this.props.smece(path);
    }
    
    render() {
        return (
            <div className="">
                {/*  prva linija je tema, a ispod su default 
                    default skrivena djeca */}
                <div className="tema_smece">
                <p class="naslov" style={this.aktivni(this.props.aktivni)} onClick={()=>{
                    this.setState({djeca:!this.state.djeca})
                    this.props.changeAktivni(this.props.state.id)
                    }}>{this.props.state.naslov}</p>
                
                <img src={Bin} onClick={()=>this.smece()} class="trash"></img>

                </div>

                <div class="djeca" style={this.djeca(this.state.djeca)}>
                    {this.props.state.djeca.map(
                        (state) => {
                            return <Tema 
                            smece = {(path)=>this.smece(path)}
                            addNew={(path)=>this.addNew(path)}
                            changeAktivni={(a)=>this.props.changeAktivni(a)}
                            aktivni={this.props.aktivni}   
                            state={state} />
                        }
                    )}
                    <p onClick={()=>this.addNew()} style={{color:'#3a4bad'}}>+add new</p>

                </div>
            </div>
        )
    }
}
