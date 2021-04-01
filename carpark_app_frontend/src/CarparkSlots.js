import React from 'react'

class CarparkSlots extends React.Component {
    render() {
        return (
            this.props.details.map((detail, index) => {
                return (
                    detail.carpark_number === this.props.carParkNo ?
                        <div>
                            There is {detail.carpark_info[0].lots_available} slot available for Lot Type: {detail.carpark_info[0].lot_type}
                        </div>
                    : ''
                )
            })  
            
        )
    }
}

export default CarparkSlots;
