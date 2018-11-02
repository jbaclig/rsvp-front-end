import React, { Component } from 'react';
import SortableListHeader from './SortableListHeader';

class ListHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ascending: this.props.ascending,
            sortedBy: this.props.sortedBy
        };
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            ascending: nextProps.ascending,
            sortedBy: nextProps.sortedBy
        };
    }

    render() {
        let header = this.props.colName ?
            <SortableListHeader 
            sortedBy={this.state.sortedBy}
            ascending={this.state.ascending}
            colName={this.props.colName}
            updateSortState={this.props.updateSortState}
            updateSortData={this.props.updateSortData} >
                {this.props.children}
            </SortableListHeader>
            : <th>{this.props.children}</th>;

        return header;
    }
}

export default ListHeader;