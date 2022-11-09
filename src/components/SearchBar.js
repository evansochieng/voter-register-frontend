import React, {useState} from "react";

const SearchBar = ({votersList, stationData, deleteVoter}) =>{
    const [search, setSearch] = useState("")


    const searchFilter = votersList.filter(voter => {
        if(search === ""){
            return false
        }else{
            return voter.id_number === search.toString()
        }
    })

    const handleDelete = (e) =>{
        console.log(e.target.value)

        fetch(`http://localhost:3000/voters/${e.target.value}`, {
            method: "DELETE"
        })

        deleteVoter(e.target.value)
    }

    const voter = searchFilter.map(voter => {

        return(
            <div key={voter.id} style={{padding:"2px", border:"solid", borderRadius:"8px", color:"white", background:"grey", margin:"5px"}}>
                <h2>Name : {voter.first_name} {voter.middle_name} {voter.last_name}</h2>
                <h4>Date Of Birth : {voter.DOB}</h4>
                <h4>ID Number : {voter.id_number}</h4>
                <h4>Polling Station : {console.log(stationData.find(stn => stn.id === voter.polling_station_id))}</h4>
                <button onClick={handleDelete} value={voter.id}>delete</button>
            </div>
        )
    })

    const handleSearch = (e) => {
        setSearch(e.target.value)
      }

    return(
        <div style={{padding:"15px", textAlign:"center", background:"gold"}}>
            <input type="search" placeholder="search by id..." onChange={handleSearch} style={{fontSize:"25px", border:"none", borderRadius:"12px"}} ></input>
            {voter}
        </div>
    )
}

export default SearchBar;