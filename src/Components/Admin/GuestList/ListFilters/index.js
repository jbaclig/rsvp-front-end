import React, { Component } from 'react';
import NameFilter from './NameFilter';

class ListFilters extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="list-filters">
                <NameFilter updateNameFilterStr={this.props.updateNameFilterStr} />
            </div>
        );
    }
}

export default ListFilters;