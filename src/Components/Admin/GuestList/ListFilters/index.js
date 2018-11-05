import React from 'react'
import NameFilter from './NameFilter'
import AttendingFilter from './AttendingFilter'

function ListFilters(props) {
    return (
        <div className="row list-filters">
            <NameFilter updateFilterState={props.updateFilterState} />
            <AttendingFilter 
            updateFilterState={props.updateFilterState}
            attendingFilter={props.attendingFilter} />
        </div>
    )
}

export default ListFilters