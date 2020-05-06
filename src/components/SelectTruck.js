import React, { Component } from 'react'

export class SelectTruck extends Component {
    render() {
        return (
            <div>
                <select onChange={(e)=>this.props.val(e.target.value)} className="inputlocation" id="trucks" name="trucklist" form="carform">
                    <option value={15}>TATA ACE</option>
                    <option value={20}>BOLERO PICK UP</option>
                    <option value={25}>TATA 407</option>
                    <option value={30}>EICHER 14FT</option>
                    <option value={40}>EICHER 17FT</option>
                </select>
            </div>
        )
    }
}

export default SelectTruck
