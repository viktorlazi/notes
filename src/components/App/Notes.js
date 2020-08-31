import React, { Component } from 'react'
import Tema from './Tema/Tema'
import './notes.css'
import { Editor } from '@tinymce/tinymce-react';

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
    handleEditorChange(e){
        console.log(e.target.getContent());
    }

    render() {
        return(
            <div className="App">
                <div className="tree">
                    {
                        this.state.struktura.map(
                            (state) => <Tema state={state}/>
                        )
                    }
                </div>
                <Editor
         initialValue=""
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
        )
    }
}
