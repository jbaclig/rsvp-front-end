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
        console.log('data:', this.state.data);
        return <tbody>{this.state.data}</tbody>
    }
}

export default ListBody;