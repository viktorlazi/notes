import React, { Component } from 'react'
import Tema from './Tema/Tema'
import './notes.css'

export default class Notes extends Component {
    state ={
        struktura:[
            {
                id: 0,
                naslov: "biology",
                sadrzaj:'topic - biology',
                djeca:[
                    {
                        id:1,
                        naslov:'behaviour',
                        sadrzaj:'topic - behaviour',
                        djeca:[
                            {
                                id:2,
                                naslov:'amigdala',
                                sadrzaj:'topic - amigdala',
                                djeca:[]
                            }
                        ]
                    },
                    {
                        id:3,
                        naslov:'bacteria',
                        sadrzaj:'topic - bacteria',
                        djeca:[]
                    }
                ]
            },
            {
                id: 1,
                naslov: "filosophy",
                sadrzaj:'topic - filosophy',
                djeca:[]
            },
            {
                id: 2,
                naslov: "technology",
                sadrzaj:'topic - technology',
                djeca:[]
            },
            {
                id: 3,
                naslov: "society",
                sadrzaj:'topic - society',
                djeca:[]
            }
        ]
    }
    render() {
        return(
            <div className="tree">
                {
                    this.state.struktura.map(
                        (state) => <Tema state={state}/>
                    )
                }
            </div>
        )
    }
}
