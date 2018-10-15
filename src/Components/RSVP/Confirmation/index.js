import React, { Component } from 'react';
import Guest from '../Guest';

class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.back = this.back.bind(this);
    }

    back(e) {
        e.preventDefault();
        this.props.setRsvpSent(false);
    }

    render() {
        //console.log('group:', this.props.group);
        return (
            <div className="confirmation">
                <h2>Your RSVP has been sent!</h2>
                {this.props.group.map((guest, index) => 
                    <Guest key={index} guest={guest} />
                )}
                <p>
                    To all of our guests who can't make it to celebrate with us, 
                    know that we completely understand.  We understand that 
                    everyone's lives are busy, and we look forward to celebrating 
                    with you whenever we can!
                </p>
                <p>
                    To all of our guests who are able to make it, we can't wait 
                    to celebrate with you all!  Be sure to check out our <a href="http://jkbaclig.com">
                    Official Wedding Website</a> for <a href="http://jkbaclig.com/details.html">ceremony and 
                    reception details</a>, <a href="http://jkbaclig.com/guide.htmlroom">
                    our city guide (including hotel info)</a>, and more.  (Jon 
                    worked really hard on making it, so go check it out!)
                </p>
                <p>
                    If you need to make any changes to your RSVP, you can click 
                    the "Back" button now or come back here later to resubmit 
                    your RSVP.  We kindy ask that all RSVP's be finalized by 
                    <strong><em>January 1, 2019.</em></strong>
                </p>
                <p>
                    If you'd like to submit another RSVP, click "Start Over" below.
                </p>
                <button 
                    className="btn btn-primary"
                    onClick={this.props.reset}>Start Over</button>
                <button
                    className="btn btn-secondary" 
                    onClick={this.back}>Back</button>
            </div>
        );
    }
}

export default Confirmation;