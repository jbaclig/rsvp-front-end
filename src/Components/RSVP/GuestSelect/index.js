import React, { Component } from 'react';
import Guest from '../Guest'

class GuestSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateSelectedGroupId = this.updateSelectedGroupId.bind(this);
        this.selectGuest = this.selectGuest.bind(this);
        this.back = this.back.bind(this);
    }

    selectGuest() {
        this.props.setGroupId(this.state.groupId);
    }

    updateSelectedGroupId(groupId) {
        this.setState({groupId: groupId});
    }

    back(e) {
        e.preventDefault();
        this.props.setGuests(null);
    }
 
    render() {
        return (
            <div className="guest-select">
                <h2>Select Your Name</h2>
                <p>
                    Find and select your name from the list of guests below.
                </p>
                {this.props.guests.map((guest, index) => 
                    <Guest 
                        key={index} 
                        guest={guest} 
                        updateSelectedGroupId={this.updateSelectedGroupId} />
                )}
                <button 
                    className="btn btn-primary"
                    onClick={this.selectGuest}>Select Guest</button>
                <button 
                    className="btn btn-secondary"
                    onClick={this.back}>Back</button>
            </div>
        );
    }
}

export default GuestSelect;