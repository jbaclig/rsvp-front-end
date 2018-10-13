import React, { Component } from 'react';

class Guest extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('guest:', this.props.guest);
        let { title } = this.props.guest;
        let firstName = this.props.guest.first_name;
        let lastName = this.props.guest.last_name;

        let inputName = `${firstName}-${lastName}`;
        let guestName = `${title} ${firstName} ${lastName}`;
        return (
            <div className="guest">
                <input type="radio" id={inputName} name="guests" value={inputName} />
                <label htmlFor={inputName}>{guestName}</label>
            </div>
        );
    }
}

export default Guest;