// DONATION COMPONENT PAGE

import React from 'react';
import Table from './DonationTable'
import './donation.css'
import DataForm from './Dontionform';
import fire from '../firebase/firebase'

class Donation extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const dataRef = fire.database().ref('data/donations');
        dataRef.on('value', (snapshot) => {
            let dataitems = snapshot.val();
            let newState = [];
            for (let index in dataitems) {
                newState.push({
                    id: index,
                    donorName: dataitems[index].donorName,
                    donorCell: dataitems[index].donorCell,
                    amount: dataitems[index].amount,
                    donorEmail: dataitems[index].donorEmail,
                    victimName: dataitems[index].victimName,
                    victimCell: dataitems[index].victimCell,
                    victimAdd: dataitems[index].victimAdd
                });
            }
            this.setState({
                data: newState
            })
        })
    }

    render() {
        return (
            <div>
                <div id="breadcrumb">
                    <div className="container">
                        <div className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li>Donation</li>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <DataForm />
                    </div>
                    <div style={{ marginTop: 0 }}>
                        <Table records={this.state.data}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Donation;