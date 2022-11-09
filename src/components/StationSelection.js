import React from 'react';


const StationSelection = ({ stationData, handleChange }) =>{

    console.log(stationData)
    
    const stations = stationData.map((pst) => {
       
        return(
            <option value={pst.id} key={pst.id}>{pst.name}</option>
        )
    })

    return (
        <div>
            <label>Polling Station</label><br />
            <select name="polling_station_id" onChange={handleChange}>
                {stations}
            </select>
        </div>
    )
}

export default StationSelection;