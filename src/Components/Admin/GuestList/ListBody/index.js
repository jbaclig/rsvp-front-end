import React, { Component } from 'react'

class ListBody extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeData: this.props.activeData
        }
    }

    static getDerivedStateFromProps(nextProps) {
        return { activeData: nextProps.activeData }
    }

    render() {
        return (
            <tbody>
                {this.state.activeData
                    .filter(guest => this.props.filterData(guest))
                    .map(guest => {
                    let guestId = `guest${guest.id}`;
                    
                    return (
                        <tr key={guestId}>
                            <th>{guest.id}</th>
                            <th>{guest.title}</th>
                            <th>{guest.first_name}</th>
                            <th>{guest.last_name}</th>
                            <th>{guest.suffix}</th>
                            <th>{guest.group_num}</th>
                            <th>
                                {guest.attending === null ? 'No Response'
                                : guest.attending ? 'Yes'
                                : 'No'}
                            </th>
                            <th>{guest.guest_attending ? 'Yes' : 'No'}</th>
                        </tr>
                    )
                })}
            </tbody>
        )
    }
}

export default ListBody