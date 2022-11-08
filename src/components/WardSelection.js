import React from 'react';


const WardSelection = ({ wardData }) =>{
    
    const wards = wardData.map((ward) => {
        return(
            <option value={ward.name} key={ward.name}>{console.log(ward.name)}{ward.name}</option>
        )
    })

    return (
        <div>
            <label>Ward</label><br />
            <select name="ward">
                {wards}
            </select>
        </div>
    )
}

export default WardSelection;