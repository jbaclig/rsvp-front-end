import React, { Component } from 'react';
import ListHeaderGroup from './ListHeaderGroup';
import ListFilters from './ListFilters';
import ListBody from './ListBody';
import Chart from './Chart';

class GuestList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            activeData: [],
            filteredData: [],
            sortedBy: 'id',
            sortAscending: true,
            nameFilter: '',
            attendingFilter: '',
        };

        this.sortData = this.sortData.bind(this);
        this.updateSortState = this.updateSortState.bind(this);
        this.filterData = this.filterData.bind(this);
        this.updateFilterState = this.updateFilterState.bind(this);
        this.attendingFilter = this.attendingFilter.bind(this);
    }

    componentWillMount() {
        let url = `${this.props.endpoint}/db`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => a.id - b.id);
                this.setState({ 
                    data: data,
                    activeData: data
                });
            });
    }

    updateSortState(sortedBy, ascending) {
        let data = this.state.activeData;

        data.sort((a, b) => ascending ?
                this.sortData(a, b, sortedBy)
                : this.sortData(b, a, sortedBy));

        this.setState({
            activeData: data,
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

    filterData(guest) {
        let fullName = 
            `${guest.first_name} ${guest.last_name} ${guest.suffix ? guest.suffix : ''}`;
        let guestAttending = guest.attending === null ? 'No Response'
            : guest.attending ? 'Yes'
            : 'No';
        
        return (
            fullName.toUpperCase().includes(this.state.nameFilter.toUpperCase()) &&
            this.attendingFilter(guestAttending)
        );
    }

    attendingFilter(guestAttending) {
        return this.state.attendingFilter === '' ? true
            : this.state.attendingFilter === guestAttending
    }


    updateFilterState(filterName, filterVal) {
        let stateUpdate = {};

        stateUpdate[filterName] = filterVal;
        this.setState(stateUpdate, () => console.log(this.state));
    }

    render() {
        let filteredData = 
            this.state.activeData.filter(guest => this.filterData(guest));
        return (
            <div className="container-fluid p-0">
                <div className="row justify-content-center px-3 mx-0">
                    <div className="col">
                        <h1 className="text-center">GuestList</h1>
                        <Chart 
                            data={filteredData} />
                        <ListFilters 
                            updateFilterState={this.updateFilterState}
                            updateNameFilter={this.updateNameFilter}
                            attendingFilter={this.state.attendingFilter} />
                        <table className="table table-striped">
                            <ListHeaderGroup 
                                sortedBy={this.state.sortedBy}
                                ascending={this.state.sortAscending}
                                updateSortState={this.updateSortState} />
                            <ListBody 
                                data={filteredData} />
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default GuestList;