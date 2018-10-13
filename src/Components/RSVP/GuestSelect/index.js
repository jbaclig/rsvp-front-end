import React, { Component } from 'react';
import Guest from '../Guest'

class GuestSelect extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.guests)
        return (
            <div className="guest-select">
                {this.props.guests.map((guest, index) => 
                    <Guest key={index} guest={guest} />
                )}
            </div>
        );
    }
}

export default GuestSelect;