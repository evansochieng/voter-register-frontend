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

    const deleteVoter = (id) =>{
        const newVotersList = votersList.filter(voter => voter.id !== id)
        setVotersList(newVotersList)
    }

    const voterInPollingStn = filterByPollingStn.map((voter, index)=>{
        return(
            <section key={voter.id} style={{padding:"10px", border:"solid", borderRadius:"8px", color:"white", margin:"5px", background:"grey", opacity:"90%"}}>
                <p>{index + 1}. {voter.first_name} {voter.middle_name} {voter.last_name}</p>
            </section>
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
                    background:"#0ABAB5",
                    color:"white",
                    padding:"15px",
                    cursor:"pointer",
                    margin:"2px",
                    width:"300px", 
                    border:"none"    
                      }} 
                      onMouseOver={(e)=> e.target.style.background = "#00FFEF"} 
                      onMouseOut={(e)=> e.target.style.background = "#0ABAB5" } 
                      >{stn.name}</button>
                      <button
                            style={{
                            fontSize:"15px",
                            background:"#0ABAB5",
                            color:"white",
                            padding:"15px",
                            cursor:"pointer",
                            margin:"2px",
                            border:"none" 
                            }} 
                    onMouseOver={(e)=> e.target.style.background = "#00FFEF"} 
                    onMouseOut={(e)=> e.target.style.background = "#0ABAB5" } 
                    onClick={handleDelete}
                    >x</button>
                {voterInPollingStn}
            </div>    
        )
    })

    return(
        <section  style={{display:"flex", flexDirection:"column", background:"purple"}}>
            <SearchBar votersList={votersList} stationData={stationData} deleteVoter={deleteVoter}/>
            {stationList}
        </section>
        
    )
}

export default PollingStationsList;