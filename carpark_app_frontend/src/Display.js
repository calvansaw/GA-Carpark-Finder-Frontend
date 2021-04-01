import React from 'react'
import CarparkSlots from './CarparkSlots'

class Display extends React.Component {
    render() {
        return (
            <div>
                {this.props.area.map((carpark, index) => {
                    return(
                        <div id={carpark.car_park_no}>{carpark.address} <CarparkSlots details={this.props.detail} carParkNo={carpark.car_park_no}/></div>
                    )
                })}
            </div>
        )
    }
}

export default Display;