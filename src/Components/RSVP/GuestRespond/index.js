import React, { Component } from 'react';
import Guest from '../Guest';
import 'isomorphic-fetch';


class GuestRespond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rsvps: {}
        };
        this.updateGuestAttending = this.updateGuestAttending.bind(this);
        this.updatePlusOneAttending = this.updatePlusOneAttending.bind(this);
        this.updateRsvp = this.updateRsvp.bind(this);
        this.back = this.back.bind(this);
    }

    componentDidMount() {
        let endpoint = this.props.endpoint;
        let groupId = this.props.groupId;
        let url = `${endpoint}/group/${groupId}`;

        fetch(url)
            .then(response => response.json())
            .then(group => this.setState({ group: group }))
            .catch(error => console.error(error));
    }

    updateGuestAttending(guestId, attending) {
        let stateUpdate = this.state;

        if (!stateUpdate.rsvps[guestId]) stateUpdate.rsvps[guestId] = {};
        stateUpdate.rsvps[guestId].attending = attending;
        this.setState(stateUpdate);
    }

    updatePlusOneAttending(guestId, guestAttending) {
        let stateUpdate = this.state;

        if (!stateUpdate.rsvps[guestId]) stateUpdate.rsvps[guestId] = {};
        stateUpdate.rsvps[guestId].guestAttending = guestAttending;
        this.setState(stateUpdate);
    }

    updateRsvp() {
        //console.log(this.state);
        let rsvps = this.state.rsvps;
        let endpoint = this.props.endpoint;
        let urls = [], guestRsvp;

        for (var guestId in rsvps) {
            guestRsvp = rsvps[guestId];
            'guestAttending' in guestRsvp ?
                urls.push(`${endpoint}/rsvp/${guestId}/attending/${guestRsvp.attending}
                    /guest/${guestRsvp.guestAttending}`)
                : urls.push(`${endpoint}/rsvp/${guestId}/attending/${guestRsvp.attending}`);
        }

        Promise.all(urls.map(url => fetch(url, { method: 'PUT' })))
            .then(() => fetch(`${this.props.endpoint}/group/${this.props.groupId}`)
            .then(response => response.json())
            .then(group => {
                this.props.setUpdatedGroup(group);
                this.props.setRsvpSent(true);
            })
            .catch(error => console.error(error))
        );
    }

    back(e) {
        e.preventDefault();
        this.props.setGroupId(null);
    }

    render() {
        return (
            <div className="guest-respond">
                <h2>RSVP for All Guests Below</h2>
                <p>
                    Please let us know who from your group will and won't be 
                    attending.
                </p>
                <div className="group-list">
                    {this.state.group ? this.state.group.map((guest, index) =>
                        <Guest
                            key={index}
                            guest={guest}
                            updateGuestAttending={this.updateGuestAttending}
                            updatePlusOneAttending={this.updatePlusOneAttending} />
                    ) : null}
                </div>
                <button 
                    className="btn btn-primary"
                    onClick={this.updateRsvp}>Send</button>
                <button 
                    className="btn btn-secondary"
                    onClick={this.back}>Back</button>
            </div>
        );
    }
}

export default GuestRespond;