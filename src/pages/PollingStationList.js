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
            <div key={voter.id} style={{padding:"10px", border:"solid", borderRadius:"8px", color:"white", background:"grey"}}>
                <p>{index + 1}. {voter.first_name} {voter.middle_name} {voter.last_name}</p>
            </div>
        )
    })

    const handleVoters = (e) => {
        setTarget(e.target.value)
    } 

    const handleDelete = () => {
        setTarget(null)
      }


    const stationList = stationData.map((stn)=> {
        return(
            <div key={stn.id}  style={{textAlign:"center", justifyContent:"center"}}>
                <button onFocus={handleVoters} value={stn.id}
                    style={{
                    fontSize:"15px",
                    background:"gray",
                    color:"white",
                    padding:"15px",
                    cursor:"pointer",
                    margin:"2px",
                    width:"300px", 
                    border:"none"    
                      }} 
                      onMouseOver={(e)=> e.target.style.background = "#D3D3D3"} 
                      onMouseOut={(e)=> e.target.style.background = "gray" } 
                      >{stn.name}</button>
                      <button
                            style={{
                            fontSize:"15px",
                            background:"gray",
                            color:"white",
                            padding:"15px",
                            cursor:"pointer",
                            margin:"2px",
                            border:"none" 
                            }} 
                    onMouseOver={(e)=> e.target.style.background = "#D3D3D3"} 
                    onMouseOut={(e)=> e.target.style.background = "gray" } 
                    onClick={handleDelete}
                    >x</button>
                {voterInPollingStn}
            </div>    
        )
    })

    return(
        <section  style={{display:"flex", flexDirection:"column", background:"pink"}}>
            <SearchBar votersList={votersList} stationData={stationData} />
            {stationList}
        </section>
        
    )
}

export default PollingStationsList;