import React, { Component } from 'react'
import Tema from './Tema/Tema'
import './notes.css'
import { Editor } from '@tinymce/tinymce-react';
import Glava from '../Glava';
import Noge from '../Noge';

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
    generateSadrzaj = (sadrzaj) =>{
        return (sadrzaj===undefined?'topic - ':('topic - ' + sadrzaj))
    }
    shema = (naslov) =>{
        return {id: this.state.sadrzaj.length, naslov:naslov, djeca:[]}
    }
    dobijDijetePrekoId = (arr, id) =>{
        return(
            arr.filter(
                dijete =>{
                    return dijete.id === id
                }
        )[0])
    }
    path = (arr, p, naslov) =>{
        if(p.length > 0){
            let dijete = this.dobijDijetePrekoId(arr, p[0]);
            dijete.djeca = this.path(dijete.djeca, p.slice(1), naslov);
            return arr;

        }else if(p.length ===0){
            arr.push(this.shema(naslov));
            return arr;
        }
    }

    addNew = (path) =>{
        path = path===undefined?[]:path;
        console.log(path);
        

        let naslov = window.prompt();

        let nova_struktura = this.path(this.state.struktura, path, naslov);
        let novi_sadrzaj = this.state.sadrzaj;
        novi_sadrzaj.push(this.generateSadrzaj(naslov));

        
        this.setState(
            {
                struktura:nova_struktura,
                sadrzaj:novi_sadrzaj
            }
        );
        

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
                        value={this.state.sadrzaj[this.state.aktivni]}
                        id="editor"
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
                <Noge/>
            </div>
        )
    }
}

export default Notes;