import React, { Component } from 'react';
import GuestList from './GuestList';
import Login from './Login';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            /*endpoint: 'http://localhost:5000',
            loggedIn: true,*/
            endpoint: 'https://jkbaclig-rsvp.herokuapp.com',
            loggedIn: false
        };

        this.setLoggedIn = this.setLoggedIn.bind(this);
    }

    setLoggedIn(status) {
        this.setState({ loggedIn: status });
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <div className="row justify-content-center px-3 mx-0">
                    {this.state.loggedIn ?
                        <GuestList 
                        endpoint={this.state.endpoint} /> :
                        <Login 
                        endpoint={this.state.endpoint}
                        setLoggedIn={this.setLoggedIn} />}
                </div>
            </div>
        );
    }
}

export default Admin;