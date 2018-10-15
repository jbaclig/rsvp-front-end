import React, { Component } from 'react';
class GuestDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { title, suffix } = this.props.guest;
        let firstName = this.props.guest.first_name;
        let lastName = this.props.guest.last_name;
        let guestAllowed = this.props.guest.allow_guest;
        let attending = this.props.guest.attending;
        let guestAttending = this.props.guest.guest_attending;
        let guestName = `${title} ${firstName} ${lastName} ${suffix ? suffix : ''}`;
        return (
            <div className="guest-container">
                <span className="guest">
                    <h3>{guestName}</h3>
                    <h4>Attending: {attending ? 'Yes' : 'No'}</h4>
                    {guestAllowed ? 
                        <p>Guest Attending: {guestAttending ? 'Yes' : 'No'}</p>
                        : null
                    }
                </span>
            </div>
        );
    }
}

export default GuestDisplay;