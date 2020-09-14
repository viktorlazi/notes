import React, { Component } from 'react'

export default class Test extends Component {

    
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
    }

    componentDidMount() {
        fetch('http://viktorlazi.com/php/json.php', {
            method:'post',
            headers:{
                "Accept":"application/json"
            }
        })
        .then(res => res.json())
        .then((data) => {
            console.log(JSON.parse(data))
        })
        .catch(console.log)
    }

    componentDidUpdate(){
        console.log(JSON.stringify(this.state));
    }
    render() {
        return (
            <div className="">
                <p>
                {
                    JSON.stringify(this.state)
                }
                </p>
            </div>
        )
    }
}
