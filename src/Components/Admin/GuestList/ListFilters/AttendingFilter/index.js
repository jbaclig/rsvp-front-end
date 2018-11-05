import React, { Component } from 'react'
import './index.css'

class AttendingFilter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filterVal: ''
        }

        this.handleClearClick = this.handleClearClick.bind(this)
        this.handleAttendingChange = this.handleAttendingChange.bind(this)
    }

    handleClearClick(e) {
        e.preventDefault()

        this.props.updateFilterState('attendingFilter', '')
    }

    handleAttendingChange(e) {
        this.props.updateFilterState('attendingFilter', e.target.value)
    }

    static getDerivedStateFromProps(nextProps) {
        return { filterVal: nextProps.attendingFilter }
    } 

    render() {
        return (
            <div className='col attending-filter'>
                <fieldset>
                    <legend>Filter By Attending</legend>
                    <div className='form-check form-check-inline'>
                        <input 
                        className='form-check-input'
                        type='radio'
                        name='attendingOptions'
                        id='attendingYes' 
                        value='Yes' 
                        checked={this.state.filterVal==='Yes'}
                        onChange={this.handleAttendingChange} />
                        <label className='form-check-label' for='attendingYes'>
                            Yes
                        </label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input 
                        className='form-check-input'
                        type='radio'
                        name='attendingOptions'
                        id='attendingNo'
                        value='No'
                        checked={this.state.filterVal==='No'}
                        onChange={this.handleAttendingChange} />
                        <label className='form-check-label' for='attendingNo'>
                            No
                        </label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input 
                        className='form-check-input'
                        type='radio'
                        name='attendingOptions'
                        id='attendingNoResponse'
                        value='No Response' 
                        checked={this.state.filterVal==='No Response'}
                        onChange={this.handleAttendingChange} />
                        <label className='form-check-label' for='attendingNoResponse'>
                            No Response
                        </label>
                    </div>
                    <button 
                    class="btn btn-secondary m-2"
                    onClick={this.handleClearClick}>Clear</button>
                </fieldset>
            </div>
        )
    }
}

export default AttendingFilter