import React, {useState} from "react";
import EditDetails from "./EditDetails";

const SearchBar = ({votersList, stationData, deleteVoter}) =>{
    const [search, setSearch] = useState("");
    const [voterInfo, setVoterInfo] = useState("");


    const searchFilter = votersList.filter(voter => {
        if(search === ""){
            return false
        }else{
            return voter.id_number === parseInt(search, 10)
        }
    })

    const handleEdit = () => {
        setVoterInfo(searchFilter);
        return <EditDetails voterInfo={voterInfo} stationData={stationData} />;
    }

    const handleDelete = (e) =>{
        console.log(e.target.value)
        fetch(`http://localhost:9292/voters/${e.target.value}`, {
            method: "DELETE"
        })

        deleteVoter(e.target.value)
    }

    const voter = searchFilter.map(voter => {

        return (
          <div
            key={voter.id}
            style={{
              padding: "2px",
              border: "solid",
              borderRadius: "8px",
              color: "white",
              background: "grey",
              margin: "5px",
              maxWidth: "400px",
              marginLeft: "700px"
            }}
          >
            <h2>
              Name : {voter.first_name} {voter.middle_name} {voter.last_name}
            </h2>
            <h4>Date Of Birth : {voter.DOB}</h4>
            <h4>ID Number : {voter.id_number}</h4>
            <h4>Polling Station : {voter.polling_station_id}</h4>
            <div >
              <button style={{padding: "10px", marginRight: "10px"}} onClick={handleEdit} value={voter.id}>Edit Details</button>
              <button style={{padding: "10px" }} onClick={handleDelete} value={voter.id}>
                delete
              </button>
            </div>
          </div>
        );
    })

    const handleSearch = (e) => {
        setSearch(e.target.value)
      }

    return(
        <div style={{padding:"15px", textAlign:"center", background:""}}>
            <input type="search" placeholder="search by id..." onChange={handleSearch} style={{fontSize:"25px", border:"none", borderRadius:"12px"}} ></input>
            {voter}
        </div>
    )
}

export default SearchBar;