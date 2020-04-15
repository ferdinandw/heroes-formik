import React, { Component } from 'react';
import axios from 'axios'
import './index.css'

export default class Data extends Component {
    constructor(props){
        super(props)
        this.state = {heroes: []}
    }
    componentDidMount(){
        axios.get('http://localhost:8000/heroes')
            .then(response =>{
                const heroes = response.data;
                this.setState({heroes})
            })
    }
    render() {
        let showData = this.state.heroes.map(item =>
            <div className="card" key={item.id}>
            <img src={item.url}/>
            <h2>{item.nama}</h2>
            <h2>{item.born}</h2>
            <h2>{item.death}</h2>
            <h2>{item.description}</h2>
            <h2>{item.established}</h2>
            </div>
        )
        return (
            <div className="album">
                <div className="container">
                    <div className="row">
                    {showData}
                    </div>
                </div>
            </div>
        )
    }
}
