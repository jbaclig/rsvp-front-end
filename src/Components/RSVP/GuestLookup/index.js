import React, { Component } from 'react';

class GuestLookup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            waiting: false,
        }
        this.lookupGuest = this.lookupGuest.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    lookupGuest(e) {
        e.preventDefault();

        let endpoint = this.props.endpoint;
        let { firstName, lastName } = this.state;
        let url = `${endpoint}/find/${firstName}/${lastName}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.props.setGuests(data);
                this.setState({waiting: false});
            })
            .catch(error => console.error(error));
        
        this.setState({waiting: true});
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
                <h2>Lookup Your Invitation</h2>
                <p>
                    Enter your first and last name <strong><em>as it appears on 
                    your invitation </em></strong>to find your RSVP for your and 
                    your family or group.
                </p>
                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label>
                    <input 
                        className="form-control"
                        type="text" 
                        value={this.state.firstName} 
                        id="firstName" 
                        name="firstName" 
                        onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                        className="form-control"
                        type="text" 
                        value={this.state.lastName} 
                        id="lastName" 
                        name="lastName"
                        onChange={this.handleChange} />
                </div>
                {this.state.waiting ? 
                    <button 
                    disabled
                    className="btn btn-primary">
                        Please Wait...
                    </button> 
                    : <button 
                        type="button"
                        className="btn btn-primary"
                        onClick={this.lookupGuest}>Lookup Invitation</button>}
            </div>
        );
    }
}

export default GuestLookup;