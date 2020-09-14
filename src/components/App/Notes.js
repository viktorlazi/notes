import React, { Component } from 'react'
import Tema from './Tema/Tema'
import './notes.css'
import { Editor } from '@tinymce/tinymce-react';
import Glava from '../Glava';
import Noge from '../Noge';
import Viktor from '../Viktor';

import axios from 'axios';

class Notes extends Component {

    constructor(props){
        super(props);
        this.handleEditorChange = this.handleEditorChange.bind(this);

    }
    
    
    state={
        struktura:[],
        aktivni:{},
        smece:{},
        sadrzaj:[]
    };
   
/*
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
                "topic - society"],
        smece:[]
    }*/

    //https://www.youtube.com/watch?v=888VYbPA3cU
    

componentDidMount(){
    fetch('http://viktorlazi.com/php/json.php', {
            method:'post',
            headers:{
                "Accept":"application/json"
            }
        })
        .then(res => res.json())
        .then((data) => {
            this.setState(
                    JSON.parse(data)
            )
        })
        .catch(console.log);
        
    
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

        this.changeAktivni(this.state.sadrzaj.length);
        
        if(this.state.smece.length === 0){
            return {
                id: this.state.sadrzaj.length,
                naslov:naslov,
                djeca:[]
            }
        }else{
            const id = this.state.smece[0];
            this.changeAktivni(id);
            this.setState(
                {
                    smece: this.state.smece.splice(1)
                }
            );
            return {
                id: id,
                naslov:naslov, 
                djeca:[]
            }
        }
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

        // ako je p.length 0 -> dodaje dijete u nultom levelu
        // ako je veci -> mora nac koje djete u iducem levelu ima id p[0]
        //             -> onda ponovit onoliko puta koliki je p
        
        // !!! nije mi jasno zasto se ove sve varijable ponasaju kao da
        //     san ih pass by reference, tj. sve se promjene vracaju
        //     sve do state.struktura
        // ???

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
        let naslov = window.prompt('Topic name?');
        
        if(naslov){
            let nova_struktura = this.path(this.state.struktura, path, naslov);
            let novi_sadrzaj = this.state.sadrzaj;
            
            if(this.state.smece.length > 0){
                novi_sadrzaj[this.state.aktivni] = this.generateSadrzaj(naslov);
            }else{
                novi_sadrzaj.push(this.generateSadrzaj(naslov));
            }
            this.setState(
                {
                    struktura:nova_struktura,
                    sadrzaj:novi_sadrzaj
                }
            );
        }

    }

    smece = (path) =>{     
       let novi_sadrzaj=this.state.sadrzaj;
       let nova_struktura = this.state.struktura;
       
       const zadnjiPath = path[path.length-1];
       
       console.log(this.getDijete(nova_struktura, path));
       let novo_smece = [
           ...this.rekurzivnoSmece(
            this.getDijete(nova_struktura, path)
           )
        ];
        this.state.smece.push(...novo_smece); // doda u smece sve id

        nova_struktura = this.ubijDijete(this.state.struktura, path);
        novo_smece.forEach(e =>{
            novi_sadrzaj[e] = undefined;
        });

        this.setState(
            {
                struktura:nova_struktura,
                sadrzaj:novi_sadrzaj
            }
        );
    }

    getDijete = (arr, p) =>{
        if(p.length===0){
            return arr;
        }else{
            let dijete = arr.filter(
                function(x){
                    return x.id === p[0];
                }
                );             
                return this.getDijete(dijete, p.slice(1));
            }
        }
    

    rekurzivnoSmece = (arr) =>{
        // dobije djecu parent teme koje ide u smece
        // vraca array-id svakog djeteta i njega
        let id=[];
        if(arr){
            arr.forEach(e => {
                id.push(e.id);
                if(e.djeca.length > 0){
                    id.push(...this.rekurzivnoSmece(e.djeca));
                }         
            });
        }
        return id;
    }

    ubijDijete = (arr, p) =>{
        if(p.length > 1){
            let dijete = this.dobijDijetePrekoId(arr, p[0]);
            dijete.djeca = this.ubijDijete(dijete.djeca, p.slice(1));
            return arr;

        }else if(p.length ===1){            
            let sva_djeca_koja_nemaju_taj_id = arr.filter(function(d) {
                return d.id !== p[0];
            });
            return sva_djeca_koja_nemaju_taj_id;
        }
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
                                smece={(path)=>this.smece(path)}
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
                <Viktor/>
            </div>
        )
    }
}

export default Notes;