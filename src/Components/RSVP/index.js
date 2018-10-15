import React, { Component } from 'react';
import GuestLookup from './GuestLookup';
import GuestRespond from './GuestRespond';
import GuestSelect from './GuestSelect';
import Confirmation from './Confirmation';

class RSVP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endpoint: 'https://jkbaclig-rsvp.herokuapp.com',
            /*guests: [
                {
                    title: 'Mr.',
                    first_name: 'Crispin',
                    last_name: 'Baclig',
                    suffix: 'Sr.',
                    allow_guest: false,
                    attending: null,
                    group_num: 24,
                    guest_attending: false
                },
                {
                    title: 'Mr.',
                    first_name: 'Crispin',
                    last_name: 'Baclig',
                    suffix: 'Jr.',
                    allow_guest: false,
                    attending: null,
                    group_num: 1,
                    guest_attending: false
                },
                {
                    title: 'Mr.',
                    first_name: 'Camille',
                    last_name: 'Fritsch',
                    allow_guest: true,
                    attending: null,
                    group_num: 19,
                    guest_attending: false
                }
            ],
            groupId: 19,
            rsvpSent: true,
            updatedGroup: [
                {
                    title: 'Mr.',
                    first_name: 'Camille',
                    last_name: 'Fritsch',
                    allow_guest: true,
                    attending: true,
                    group_num: 19,
                    guest_attending: true
                }
            ]*/
        };
        this.setGuests = this.setGuests.bind(this);
        this.setGroupId = this.setGroupId.bind(this);
        this.setRsvpSent = this.setRsvpSent.bind(this);
        this.reset = this.reset.bind(this);
        this.setUpdatedGroup = this.setUpdatedGroup.bind(this);
    }

    setGuests(guests) {
        this.setState({guests: guests});
    }

    setGroupId(id) {
        this.setState({groupId: id});
    }

    setRsvpSent(status) {
        this.setState({rsvpSent: status});
    }

    setUpdatedGroup(group) {
        this.setState({updatedGroup: group});
    }

    reset(e) {
        e.preventDefault();
        this.setState({
            guests: null,
            groupId: null,
            rsvpSent: null,
            updatedGroup: null
        });
    }

    render() {
        return (
            <div className="col-lg-8 col-md-10">
                {this.state.guests ? 
                    this.state.groupId ? 
                        this.state.rsvpSent ? 
                            <Confirmation
                                group={this.state.updatedGroup}
                                setRsvpSent={this.setRsvpSent} 
                                reset={this.reset} 
                                setRsvpSent={this.setRsvpSent} />
                            : <GuestRespond 
                                endpoint={this.state.endpoint}
                                groupId={this.state.groupId}
                                setRsvpSent={this.setRsvpSent}
                                setUpdatedGroup={this.setUpdatedGroup}
                                setGroupId={this.setGroupId} />
                        : <GuestSelect 
                            guests = {this.state.guests} 
                            setGroupId={this.setGroupId}
                            setGuests={this.setGuests} />
                    : <GuestLookup  
                        endpoint={this.state.endpoint} 
                        setGuests={this.setGuests} />
                }
            </div>
        );
    }
}

export default RSVP;