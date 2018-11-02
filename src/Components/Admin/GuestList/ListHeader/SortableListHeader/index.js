import React, { Component } from 'react';
import ActiveSortableListHeader from './ActiveSortableListHeader';
import './index.css';

class SortableListHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ascending: this.props.ascending,
            sortedBy: this.props.sortedBy
        };

        this.sortNewCol = this.sortNewCol.bind(this);
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            ascending: nextProps.ascending,
            sortedBy: nextProps.sortedBy
        }
    }

    sortNewCol() {
        this.props.updateSortState(this.props.colName, true);
    }

    render() {
        let header = this.props.colName === this.state.sortedBy ?
            <ActiveSortableListHeader
                ascending={this.state.ascending}
                sortedBy={this.state.sortedBy}
                colName={this.props.colName}
                updateSortState={this.props.updateSortState} >
                {this.props.children}
            </ActiveSortableListHeader> :
            <th onClick={this.sortNewCol} className="sortable">
                {this.props.children} <i className="fas fa-sort"></i>
            </th>

        return header;
    }
}

export default SortableListHeader;