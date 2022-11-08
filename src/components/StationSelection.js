import React from 'react';


const StationSelection = ({ stationData }) =>{

    console.log(stationData)
    
    const stations = stationData.map((pst) => {
        return(
            <option value={pst.name} key={pst.id}>{pst.name}</option>
        )
    })

    return (
        <div>
            <label>Polling Station</label><br />
            <select name="station">
                {stations}
            </select>
        </div>
    )
}

export default StationSelection;