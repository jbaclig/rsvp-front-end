import React, { Component } from 'react';
import ListHeader from './ListHeader';

class ListHeaderGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sortedBy: this.props.sortedBy,
            ascending: this.props.ascending
        }
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            ascending: nextProps.ascending,
            sortedBy: nextProps.sortedBy
        };
    }

    render() {
        return (
            <thead>
                <tr>
                    <ListHeader
                        sortedBy={this.state.sortedBy}
                        ascending={this.state.ascending}
                        colName={"id"}
                        updateSortState={this.props.updateSortState} >
                        Guest ID
                    </ListHeader>
                    <ListHeader>Title</ListHeader>
                    <ListHeader
                        sortedBy={this.state.sortedBy}
                        ascending={this.state.ascending}
                        colName="first_name"
                        updateSortState={this.props.updateSortState} >
                        First Name
                    </ListHeader>
                    <ListHeader
                        sortedBy={this.state.sortedBy}
                        ascending={this.state.ascending}
                        colName="last_name"
                        updateSortState={this.props.updateSortState} >
                        Last Name
                    </ListHeader>
                    <ListHeader>Suffix</ListHeader>
                    <ListHeader
                        sortedBy={this.state.sortedBy}
                        ascending={this.state.ascending}
                        colName="group_num"
                        updateSortState={this.props.updateSortState} >
                        Group Number
                    </ListHeader>
                    <ListHeader>Attending</ListHeader>
                    <ListHeader>+1</ListHeader>
                </tr>
            </thead>
        );
    }
}

export default ListHeaderGroup;