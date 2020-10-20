// CONTACT COMPONENT PAGE 

import React from 'react';
import fire from '../firebase/firebase'

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

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: "",
            errors: {
                name: '',
                email: '',
                message: '',
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
            case 'name':
                if (value.length === 0) {
                    errors.name = 'Please enter the Full name'
                    console.log('in first condition')
                }
                else if (value.length < 4) {
                    errors.name = 'Full Name must be 4 characters long!';
                }
                else {
                    errors.name = ''
                }
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'message':
                if (value.length === 0) {
                    errors.message = 'Please enter the message'
                }
                else if (value.length < 3) {
                    errors.message = 'message must be 3 characters long!';
                }
                else {
                    errors.message = ''
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
            const messageRef = fire.database().ref('data/feedback');
            let completeFeedback = {
                userName: this.state.name,
                emailAddress: this.state.email,
                message: this.state.message
            }
            messageRef.push(completeFeedback);
            this.setState({
                name: "",
                email: "",
                message: ""
            })
        } else {
            console.error('Invalid Form')
        }
    }

    render() {
        return (
            <div>
                <div id="breadcrumb">
                    <div className="container">
                        <div className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li>Contact</li>
                        </div>
                    </div>
                </div>
                <section id="contact-page" >
                    <div className="container" style={{ marginTop: 50 }}>
                        <div className="center">
                            <h2>Drop Your Message</h2>
                        </div>
                        <div className="row contact-wrap">
                            <div className="status alert alert-success" style={{ display: 'none' }} />
                            <div className="col-md-6 col-md-offset-3">
                                <div id="sendmessage">Your message has been sent. Thank you!</div>
                                <div id="errormessage" />
                                <form onSubmit={this.handleSubmit} action method="post" className="contactForm">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            autoComplete="off" 
                                        />
                                        <small style={{ color: 'red' }} className="form-text text-muted">{this.state.errors.name}</small>
                                        <div className="validation" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            data-rule="email"
                                            data-msg="Please enter a valid email"
                                            onChange={this.handleChange}
                                            value={this.state.email}
                                            autoComplete="off" 
                                        />
                                        <small style={{ color: 'red' }} className="form-text text-muted">{this.state.errors.email}</small>
                                        <div className="validation" />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows={5}
                                            data-rule="required"
                                            data-msg="Please write something for us"
                                            placeholder="Message"
                                            defaultValue={""}
                                            onChange={this.handleChange}
                                            value={this.state.message}
                                            autoComplete="off" 
                                        />
                                        <small style={{ color: 'red' }} className="form-text text-muted">{this.state.errors.message}</small>
                                        <div className="validation" />
                                    </div>
                                    <div className="text-center"><button type="submit" name="submit" className="btn btn-primary btn-lg" required="required">Submit Message</button></div>
                                </form>
                            </div>
                        </div>
                        {/*/.row*/}
                    </div>
                    {/*/.container*/}
                </section>
            </div>
        )
    }
}

export default Contact; 