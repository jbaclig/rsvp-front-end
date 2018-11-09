import React, { Component } from 'react';

class NameFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value }, () => {
            this.props.updateFilterState('nameFilter', this.state.value);
        });
    }

    render() {
        return (
            <div className="form-group col-md">
                <label htmlFor="name-filter">Find Guest</label>
                <input 
                className="form-control"
                type="text"
                value={this.state.value}
                name="name-filter"
                onChange={this.handleChange} />
            </div>
        );
    }
}

export default NameFilter;