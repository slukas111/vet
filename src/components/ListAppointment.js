import React, { Component } from 'react'

export class ListAppointment extends Component {
    render() {
        const listItems = this.props.appointments.map(item => (
            <div className="container-fluid bg-info pt-3 my-3">
                <div>Pet: {item.petName}</div>
                <div>Owner: {item.ownerName}</div>
            </div>
          ));
        return (
            <div>
                {listItems}
            </div>
        )
    }
}

export default ListAppointment
