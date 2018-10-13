import React, { Component } from 'react';
import GuestLookup from './GuestLookup';
import GuestRespond from './GuestRespond';
import GuestSelect from './GuestSelect';
import Confirmation from './Confirmation';

class RSVP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endpoint: 'http://localhost:5000'
        };
        this.setGuests = this.setGuests.bind(this);
    }

    setGuests(guests) {
        this.setState({guests: guests});
    }

    render() {
        return this.state.guests ? 
            this.state.groupId ? 
                this.state.responded ? 
                    <Confirmation />
                    : <GuestRespond />
                : <GuestSelect guests = {this.state.guests} />
            : <GuestLookup  endpoint={this.state.endpoint} setGuests={this.setGuests}/>;
    }
}

export default RSVP;