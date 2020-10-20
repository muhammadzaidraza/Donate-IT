// INCIDENT PAGE COMPONENT

import React from 'react';
import fire from '../firebase/firebase'
class Incident extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        const dataRef = fire.database().ref('data/incidents');
        dataRef.on('value', (snapshot) => {
            let dataitems = snapshot.val();
            let newState = [];
            for (let index in dataitems) {
                newState.push({
                    id: index,
                    name: dataitems[index].name,
                    date: dataitems[index].date,
                    detail: dataitems[index].detail
                });
            }
            this.setState({
                data: newState
            })
            { console.log(this.state.data) }
        })
    }
    render() {
        return (
            <div>
                <div id="breadcrumb">
                    <div className="container">
                        <div className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li>Incident</li>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="jumbotron" style={{ margin: '10px', padding:'10px'}}>
                        <p className="lead" style={{ fontWeight: 'bold' }}>Funds for shelters</p>
                        <hr className="my-4" />
                        <p>25 people need the facility of shelter due to drastic change in wether in karachi.</p>
                        <small style={{ color: 'black' }}>Updated on : 03-02-2019</small>
                    </div>
                    <div className="jumbotron" style={{ margin: '10px', padding:'10px'}}>
                        <p className="lead" style={{ fontWeight: 'bold' }}>Funds for the victims of qasim town incident</p>
                        <hr className="my-4" />
                        <p>5 people suffered from the fire that rised due to gas leakage</p>
                        <small style={{ color: 'black' }}>Updated on : 07-01-2020</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default Incident;