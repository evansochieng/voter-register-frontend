import React from "react";

const PollingStationsList = ({stationData}) => {


    const stationList = stationData.map((stn)=> {
        return(
            <div key={stn.id}>
                <button>{stn.name}</button>
                <button>voters-count</button>
            </div>
        )
    })

    return(
        <div>{stationList}</div>
    )
}

export default PollingStationsList;