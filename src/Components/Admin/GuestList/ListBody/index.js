import React, { Component } from 'react'

class ListBody extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: this.props.data
        }
    }

    static getDerivedStateFromProps(nextProps) {
        return { data: nextProps.data }
    }

    render() {
        return (
            <tbody>{this.state.data.map(guest => {
                    let guestId = `guest${guest.id}`;
                    let attending = guest.attending === null ? 'No Response'
                        : guest.attending ? 'Yes'
                        : 'No';

                    return (
                        <tr key={guestId}>
                            <th>{guest.id}</th>
                            <th>{guest.title}</th>
                            <th>{guest.first_name}</th>
                            <th>{guest.last_name}</th>
                            <th>{guest.suffix}</th>
                            <th>{guest.group_num}</th>
                            <th>{attending}</th>
                            <th>{guest.guest_attending ? 'Yes' : 'No'}</th>
                        </tr>
                    )
                })}</tbody>
        )
    }
}

export default ListBody