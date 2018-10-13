import React, { Component } from 'react';

class GuestLookup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        }
        this.lookupGuest = this.lookupGuest.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    lookupGuest(e) {
        e.preventDefault();

        let endpoint = this.props.endpoint;
        let { firstName, lastName } = this.state;
        
        let url = `${endpoint}/find/${firstName}/${lastName}`;
        console.log(`url: ${url}`);

        fetch(url)
            .then(response => response.json())
            .then(data => this.props.setGuests(data))
            .catch(error => console.error(error));
    }

    handleChange(e) {
        e.preventDefault();

        let state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    render() {
        return (
            <div className="guest-lookup">
                <label htmlFor="firstName">First Name: </label>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    id="firstName" 
                    name="firstName" 
                    onChange={this.handleChange} />
                <label htmlFor="lastName">Last Name: </label>
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    id="lastName" 
                    name="lastName"
                    onChange={this.handleChange}  />
                <button onClick={this.lookupGuest}>Lookup Invitation</button>
            </div>
        );
    }
}

export default GuestLookup;