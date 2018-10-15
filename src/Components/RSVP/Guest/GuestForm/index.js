import React, { Component } from 'react';

class GuestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
        this.updateGuestAttending = this.updateGuestAttending.bind(this);
    }

    handleClick(e) {
        //e.preventDefault();
        let target = e.target;
        let tagName = target.tagName.toLowerCase();
        let guest = this.props.guest;
        let input;
        tagName === 'input' ? input = target
            : input = target.parentNode.querySelector('input');

        if(input) {
            this.props.updateSelectedGroupId ?
                this.props.updateSelectedGroupId(guest.group_num)
                : this.updateGuestAttending(input);
        }

    }

    updateGuestAttending(input) {
        let guest = this.props.guest;

        input.name === 'guest' ?
            this.props.updatePlusOneAttending(guest.id, input.value)
            : this.props.updateGuestAttending(guest.id, input.value);
    }

    render() {
        let { title, suffix } = this.props.guest;
        let firstName = this.props.guest.first_name;
        let lastName = this.props.guest.last_name;
        let groupNum = this.props.guest.group_num;
        let allowGuest = this.props.guest.allow_guest;
        let inputName = `${firstName}-${lastName}${suffix ? `-${suffix}` : ''}`;
        let guestName = `${title} ${firstName} ${lastName} ${suffix ? suffix : ''}`;

        return (
            <div className="guest-container">
                {this.props.updateSelectedGroupId ?
                    <span className="guest" onClick={this.handleClick}>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                id={inputName}
                                name="guests"
                                value={groupNum} />
                            <label className="form-check-label" htmlFor={inputName}>
                                {guestName}
                            </label>
                        </div>    
                    </span> :
                    <fieldset className="guest form-group" onClick={this.handleClick}>
                        <legend>{guestName}</legend>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name={inputName}
                                id={`${inputName}-attending`}
                                value="true" />
                            <label className="form-check-label" htmlFor={`${inputName}-attending`}>
                                Attending
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name={inputName}
                                id={`${inputName}-not-attending`}
                                value="false" />
                            <label className="form-check-label" htmlFor={`${inputName}-not-attending`}>
                                Not Attending
                            </label>
                        </div>
                        {allowGuest ? (
                            <div className="plus-one">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="guest"
                                        id={`${inputName}-guest-attending`}
                                        value="true" />
                                    <label className="form-check-label" htmlFor={`${inputName}-guest-attending`}>
                                        with a Guest
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">   
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="guest"
                                        id={`${inputName}-guest-not-attending`}
                                        value="false" />
                                    <label className="form-check-label" htmlFor={`${inputName}-guest-not-attending`}>
                                        without a Guest
                                    </label>
                                </div>
                            </div>
                        ) : null}
                    </fieldset>
                }
            </div>
        );
    }
}

export default GuestForm;