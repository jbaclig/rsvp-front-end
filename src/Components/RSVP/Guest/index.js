import React, { Component } from 'react';
import GuestForm from './GuestForm';
import GuestDisplay from './GuestDisplay';

class Guest extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        
    }

    render() {
        return (
            this.props.updateSelectedGroupId || this.props.updateGuestAttending ?
                <GuestForm
                    guest={this.props.guest}
                    updateSelectedGroupId={this.props.updateSelectedGroupId ?
                        this.props.updateSelectedGroupId : null}
                    updateGuestAttending={this.props.updateGuestAttending ?
                        this.props.updateGuestAttending : null} 
                    updatePlusOneAttending={this.props.updatePlusOneAttending ? 
                        this.props.updatePlusOneAttending : null} /> :
                <GuestDisplay
                    guest={this.props.guest} />
        );
    }
}

export default Guest;