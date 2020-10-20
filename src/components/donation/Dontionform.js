// DONATION FORM
import React from 'react'
//import './DonationTable'
import fire from '../firebase/firebase';

const validEmailRegex =
    RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
    );
    console.log(valid);
    return valid;
}


class DataForm extends React.Component {
    constructor() {
        super();
        this.state = {
            dName: '',
            dCell: '',
            amount: '',
            dEmail: '',
            errors: {
                dName: '',
                demail: '',
                dCell: '',
                amount: '',
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        let errors = this.state.errors;

        switch (name) {
            case 'dName':
                if (value.length === 0) {
                    errors.dName = 'Please enter the Name'
                    console.log('in first condition')
                }
                else if (value.length < 4) {
                    errors.dName = 'Full Name must be 4 characters long!';
                }
                else {
                    errors.dName = ''
                }
                break;
            case 'dCell':
                if (value.length === 0) {
                    errors.dCell = 'Please enter the your mobile number'
                }
                else if (value.length < 11) {
                    errors.dCell = 'Mobile number must not contain less than 11 digits';
                }
                else if (value.length > 11) {
                    errors.dCell = 'Mobile number must not contain more than 11 digits';
                }
                else if (isNaN(value)) {
                    errors.dCell = 'Mobile number can contain only numeric digits';
                }
                else {
                    errors.dCell = ''
                }
                break;
            case 'dEmail':
                errors.dEmail =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'amount':
                if (value.length === 0) {
                    errors.amount = 'Please enter the amount'
                }
                else if (isNaN(value)) {
                    errors.amount = 'Mobile number can contain only numeric digits';
                }
                else if (value.length < 1) {
                    errors.amount = 'Mobile number must contain 11 digits';
                }
                else {
                    errors.amount = ''
                }
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value }, () => {
            console.log(errors)
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('Valid Form');
            const dataRef = fire.database().ref('data/donations');
            const donations = {
                donorName: this.state.dName,
                donorCell: this.state.dCell,
                amount: this.state.amount,
                donorEmail: this.state.dEmail
            }
            dataRef.push(donations);
            this.setState({
                donorName: "",
                donorCell: "",
                amount: "",
                donorEmail: "",
                errors: {
                    dName: '',
                    demail: '',
                    dCell: '',
                    amount: '',
                }
            })
        } else {
            console.error('Invalid Form')
        }
    }

    render() {
        return (
            <div>

                {/* FORM MODAL */}
                <div className="modal fade" id="openModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Form Details</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div>
                                <form onSubmit={this.handleSubmit} style={{ padding: 15 }}>
                                    {/* Donor Name  */}
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            aria-describedby="emailHelp" placeholder="Full Name" name="dName"
                                            value={this.state.donorName} onChange={this.handleChange}
                                            autoComplete="off"
                                        />
                                        <small style={{ color: 'red' }} className="form-text text-muted">{this.state.errors.dName}</small>
                                    </div>
                                    {/* Donor Cell Number */}
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            aria-describedby="emailHelp" placeholder="Phone Number" name="dCell"
                                            value={this.state.donorCell} onChange={this.handleChange}
                                            autoComplete="off"
                                        />
                                        <small style={{ color: 'red' }} className="form-text text-muted">{this.state.errors.dCell}</small>
                                    </div>
                                    {/* Donar Email Address */}
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            aria-describedby="emailHelp" placeholder="Email Address" name="dEmail"
                                            value={this.state.donorEmail} onChange={this.handleChange}
                                            autoComplete="off"
                                        />
                                        <small style={{ color: 'red' }} className="form-text text-muted">{this.state.errors.dEmail}</small>
                                    </div>
                                    {/* Amount */}
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            aria-describedby="emailHelp" placeholder="Amount" name="amount"
                                            value={this.state.amount} onChange={this.handleChange}
                                            autoComplete="off"
                                        />
                                        <small style={{ color: 'red' }} className="form-text text-muted">{this.state.errors.amount}</small>
                                    </div>
                                    {/* Form Submit Button*/}
                                    <div className="text-center" style={{ marginBottom: '15px' }}>
                                        <button type="submit" name="submit" className="btn btn-primary btn-lg" required="required" >
                                            {/* data-dismiss="modal" */}
                                            Submit Form
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DataForm;
