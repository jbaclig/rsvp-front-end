import React, { Component } from 'react';
import ListHeader from './ListHeader';

class GuestList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            sortedBy: 'id',
            sortAscending: true
        };

        this.handleSortClick = this.handleSortClick.bind(this);
        this.sortData = this.sortData.bind(this);
        this.updateSortState = this.updateSortState.bind(this);
    }

    componentWillMount() {
        let url = `${this.props.endpoint}/db`;


        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => a.id - b.id);
                this.setState({ data: data });
            });
    }

    handleSortClick(e) {
        e.preventDefault();

        console.log('handleSortClick()');
        console.log('e.target.tagName:', e.target.tagName);
        if(e.target.tagName === 'TH') { 
            let sortAscending;
            let sortProperty = e.target.dataset.filter;
            let data = this.state.data;

            if(this.state.sortedBy === sortProperty) {
                sortAscending = !this.state.sortAscending;
                e.target.classList.toggle('descending');
            } else {
                sortAscending = true;
                e.target.classList.add('sorted');
                if(this.state.lastSorted) 
                    this.state.lastSorted.classList.remove('sorted', 'descending');
            }
                

            
            data.sort((a, b) => sortAscending ?
                this.sortData(a, b, sortProperty)
                : this.sortData(b, a, sortProperty));
            
            this.setState({ 
                data: data,
                sortedBy: sortProperty,
                sortAscending: sortAscending,
                lastSorted: e.target
            });
        }
    }

    updateSortState(sortedBy, ascending) {
        let data = this.state.data;

        data.sort((a, b) => ascending ?
                this.sortData(a, b, sortedBy)
                : this.sortData(b, a, sortedBy));

        this.setState({
            data: data,
            sortedBy: sortedBy,
            sortAscending: ascending
        });
    }

    sortData(a, b, sortProperty) {
        return sortProperty === 'id' || sortProperty === 'group_num' ?
            a[sortProperty] - b[sortProperty]
            : a[sortProperty].toUpperCase() < b[sortProperty].toUpperCase() ? -1
            : a[sortProperty].toUpperCase() > b[sortProperty].toUpperCase() ? 1 
            : 0;
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <div className="row justify-content-center px-3 mx-0">
                    <div className="col">
                        <h1 className="text-center">GuestList</h1>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <ListHeader 
                                    sortedBy={this.state.sortedBy}
                                    ascending={this.state.sortAscending}
                                    colName="id"
                                    updateSortState={this.updateSortState} >
                                        Guest ID
                                    </ListHeader>
                                    <ListHeader>Title</ListHeader>
                                    <ListHeader 
                                    sortedBy={this.state.sortedBy}
                                    ascending={this.state.sortAscending}
                                    colName="first_name"
                                    updateSortState={this.updateSortState} >
                                        First Name
                                    </ListHeader>
                                    <ListHeader 
                                    sortedBy={this.state.sortedBy}
                                    ascending={this.state.sortAscending}
                                    colName="last_name"
                                    updateSortState={this.updateSortState} >
                                        Last Name
                                    </ListHeader>
                                    <ListHeader>Suffix</ListHeader>
                                    <ListHeader 
                                    sortedBy={this.state.sortedBy}
                                    ascending={this.state.sortAscending}
                                    colName="group_num"
                                    updateSortState={this.updateSortState} >
                                        Group Number
                                    </ListHeader>
                                    <ListHeader>Attending</ListHeader>
                                    <ListHeader>+1</ListHeader>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map(guest => {
                                    let guestId = `guest${guest.id}`;
                                    guest.fullName = 
                                        `${guest.first_name} ${guest.last_name} ${guest.suffix ? guest.suffix : ''}`;
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
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default GuestList;