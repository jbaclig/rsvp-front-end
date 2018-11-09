import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
            yes: 0,
            plusOne: 0,
            no: 0,
            noResponse: 0
        };
    }

    static getDerivedStateFromProps(nextProps) {
        return { 
            data: nextProps.data 
        }
    }

    render() {
        let yes = 0, no = 0, plusOne = 0, noResponse = 0;

        this.state.data.forEach(guest => {
            if(guest.attending === null) noResponse ++
            else if(guest.attending) {
                yes++;
                if(guest.guest_attending)
                    plusOne++;
            } 
            else
                no++;
        });

        let chartData = {
            labels: ['Yes', '+1', 'No', 'No Response'],
            datasets:[{
                data: [yes, plusOne, no, noResponse],
                backgroundColor: ['#01395E', '#F2E5D2', '#8B0E3A', '#929292']
            }]
        };

        return (
            <div className="row">
                <div className="col-md">
                    <h2>
                        <strong>Attending: </strong>{yes + plusOne}
                    </h2>
                    <h2>
                        <strong>Not Attending: </strong>{no}
                    </h2>
                    <h2>
                        <strong>No Response: </strong>{noResponse}
                    </h2>
                </div>
                <div className="col-md-8">
                    <Doughnut data={chartData} />
                </div>
            </div>
        );
    }
}

export default Chart;