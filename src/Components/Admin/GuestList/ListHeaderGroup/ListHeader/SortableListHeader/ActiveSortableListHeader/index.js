import React, { Component } from 'react';

class ActiveSortableListHeader extends Component {
    constructor(props) {
        super(props);

        this.toggleAscending = this.toggleAscending.bind(this);
    }

    toggleAscending() {
        this.props.updateSortState(this.props.colName, !this.props.ascending);
    }

    render() {
        let icon = this.props.ascending ?
            <i className="fas fa-sort-down"></i> :
            <i className="fas fa-sort-up"></i>;

        return (
            <th className="sortable" onClick={this.toggleAscending}>
                {this.props.children} {icon}
            </th>
        );
    }
}

export default ActiveSortableListHeader;