import React, { useState, useEffect} from "react";
import SearchBar from "../components/SearchBar";

const PollingStationsList = ({stationData}) => {
    const [target, setTarget] = useState("")
    const [votersList, setVotersList] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/voters")
        .then(r => r.json())
        .then(d => setVotersList(d))
    },[])

    console.log(votersList)

    const filterByPollingStn = votersList.filter(item => item.polling_station_id === target)

    const voterInPollingStn = filterByPollingStn.map((voter, index)=>{
        return(
            <div key={voter.id}>
                <p>{index + 1}. {voter.first_name} {voter.middle_name} {voter.last_name}</p>
            </div>
        )
    })

    const handleVoters = (e) => {
        setTarget(e.target.value)
    } 

    // const handleDelete = () => {
    //     setTarget(null)
    //   }


    const stationList = stationData.map((stn)=> {
        return(
            <div key={stn.id}>
                <button onFocus={handleVoters} value={stn.id}>{stn.name}</button>
                <button>voters-count</button>
                {voterInPollingStn}
            </div>    
        )
    })

    return(
        <>
            <SearchBar votersList={votersList} stationData={stationData} />
            <div>{stationList}</div>
        </>
        
    )
}

export default PollingStationsList;