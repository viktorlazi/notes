import React, { Component } from 'react'
import Tema from './Tema/Tema'
import './notes.css'
import { Editor } from '@tinymce/tinymce-react';
import Glava from '../Glava';

class Notes extends Component {

    constructor(props){
        super(props);
        this.handleEditorChange = this.handleEditorChange.bind(this);

    }

    state = {
        struktura:[
            {
                id: 0,
                naslov: "biology",
                djeca:[
                    {
                        id:1,
                        naslov:'behaviour',
                        djeca:[
                            {
                                id:2,
                                naslov:'amigdala',
                                djeca:[]
                            }
                        ]
                    },
                    {
                        id:3,
                        naslov:'bacteria',
                        djeca:[]
                    }
                ]
            },
            {
                id: 4,
                naslov: "filosophy",
                djeca:[]
            },
            {
                id: 5,
                naslov: "technology",
                djeca:[]
            },
            {
                id: 6,
                naslov: "society",
                djeca:[]
            }
        ],
        aktivni: 0,
        sadrzaj:["topic-biology", "topic - behaviour",
                "topic - amigdala", "topic - bacteria",
                "topic - filosophy", "topic - technology",
                "topic - society"]
    }


    handleEditorChange(content, editor){
        let a = [...this.state.sadrzaj];
        a[this.state.aktivni] = content;
        this.setState({sadrzaj:a});
    }
    
    changeAktivni = (a) =>{
        this.setState({aktivni:a})
    }
    aktivni = (aktivni) =>{
        return (aktivni ? {color:'#3a4bad'}:{display:'black'})
    }
    editorValue = (sadrzaj) =>{
        return (sadrzaj===undefined?'topic - ':sadrzaj)
    }
    shema = (naslov) =>{
        return {id: this.state.sadrzaj.length, naslov:naslov, djeca:[]}
    }
    dobijDijetePrekoId = (id) =>{
        return(
            this.state.struktura.filter(
                dijete =>{
                    return dijete.id === id
                }
        ))
    }
    path = (p) =>{
        
    }

    addNew = (path) =>{

        path = path===undefined?[]:path;
        console.log(path);
        this.dobijDijetePrekoId(path[0]).filter(

        )
    }

    render() {
        return(
            <div>
                <Glava/>
                <div className="App">
                    <div className="tree">
                        {
                            this.state.struktura.map(
                                (state) => <Tema 
                                changeAktivni={(a)=>this.changeAktivni(a)}
                                aktivni={this.state.aktivni} 
                                state={state}
                                addNew={(path)=>this.addNew(path)}/>
                            )
                        }
                        <p onClick={()=>this.addNew()} style={{color:'#3a4bad'}}>+add new</p>
                    </div>
                    <Editor
                        value={this.editorValue(this.state.sadrzaj[this.state.aktivni])}
                        
                        init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ]
                        }}
                        onEditorChange={this.handleEditorChange}
                    />
                </div>
            </div>
        )
    }
}

export default Notes;