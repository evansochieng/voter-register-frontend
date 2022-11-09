import React from "react";

const Home = ({stationData}) => {

    // fetch("").then(r => r.json()).then(d => d)

    const stationList = stationData.map((stn)=> {
        return(
            <div key={stn.id}>
                <button  value={stn.id}>{stn.name}</button>
                <button>voters-count</button>
            </div>
        )
    })

    return(
        <div>{stationList}</div>
    )

}

export default Home;