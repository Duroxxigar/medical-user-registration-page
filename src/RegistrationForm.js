import React, { Component } from 'react';

const PersonalInformation = (props) => {
    return (
        <>
            <label>First Name:</label>
            <input className="input-field" name="firstName" type="text" placeholder="First Name" required={props.require} value={props.firstName} />
            <label>Last Name:</label>
            <input className="input-field" name="lastName" type="text" placeholder="Last Name" required={props.require} value={props.lastName} />
            <label>Phone Number:</label>
            <input className="input-field" name="phoneNumber" type="tel" placeholder="555-555-5555" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required={props.require} value={props.phoneNumber} />
            <label>Email:</label>
            <input className="input-field" name="email" type="email" placeholder="Email" required={props.require} value={props.email} />
        </>
    )
}

const BusinessInformation = (props) => {
    return (
        <>
            <label>NPI number:</label>
            <input className="input-field" name="npiNumber" type="tel" placeholder="NPI Number" pattern="[0-9]{10}" required={props.require} value={props.npiNumber} />
            <label>Business Address:</label>
            <input className="input-field" name="address" type="text" placeholder="Business Address" required={props.require} value={props.address} />
            <label>City:</label>
            <input className="input-field" name="city" type="text" placeholder="City" required={props.require} value={props.city} />
            <label>State:</label>
            <input className="input-field" name="state" type="text" placeholder="State" required={props.require} value={props.state} />
        </>
    )
}

class RegistrationForm extends Component {
    constructor(props) {
        super();
        this.initialState = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            npiNumber: '',
            address: '',
            city: '',
            state: '',
            required: false
        };
        this.state = this.initialState;
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value,
            required: true
        });
    }

    handleError() {
        if (!this.state.firstName ||
            !this.state.lastName ||
            !this.state.phoneNumber ||
            !this.state.email ||
            !this.state.npiNumber ||
            !this.state.address ||
            !this.state.city ||
            !this.state.state) {
            alert('Please fill the form out!');
            return true;
        }
        return false;
    }

    handleSubmit(event) {
        let message = `
        First Name is: ${this.state.firstName}

        Last Name is: ${this.state.lastName}

        Phone Number is: ${this.state.phoneNumber}

        Email is: ${this.state.email}

        Npi Number is: ${this.state.npiNumber}

        Address is: ${this.state.address}

        City is: ${this.state.city}

        State is: ${this.state.state}
        `
        const isValid = this.handleError();
        if (!isValid) {
            alert(message);
            this.setState(this.initialState);
        }
    }

    render() {

        return (
            <form className="grid-container" onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <PersonalInformation
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        phoneNumber={this.state.phoneNumber}
                        email={this.state.email}
                        require={this.state.required}
                    />
                </div>
                <div></div>
                <div className="right-form">
                    <BusinessInformation
                        npiNumber={this.state.npiNumber}
                        address={this.state.address}
                        city={this.state.city}
                        state={this.state.state}
                        require={this.state.required}
                    />
                </div>
                <button className="submit-btn" type="submit">SUBMIT REGISTRATION</button>
            </form>
        )
    }
}

export default RegistrationForm;