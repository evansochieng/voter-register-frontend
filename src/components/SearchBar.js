import React, {useState} from "react";

const SearchBar = ({votersList, stationData}) =>{
    const [search, setSearch] = useState("")


    const searchFilter = votersList.filter(voter => {
        if(search === ""){
            return false
        }else{
            return voter.id_number === search.toString()
        }
    })

    const voter = searchFilter.map(voter => {

        return(
            <div key={voter.id}>
                <h2>Name : {voter.first_name} {voter.middle_name} {voter.last_name}</h2>
                <h4>Date Of Birth : {voter.DOB}</h4>
                <h4>ID Number : {voter.id_number}</h4>
                <h4>Polling Station : {console.log(stationData.find(stn => stn.id === voter.polling_station_id))}</h4>
            </div>
        )
    })

    const handleSearch = (e) => {
        setSearch(e.target.value)
      }

    return(
        <div>
            <input type="search" placeholder="search by id..." onChange={handleSearch}></input>
            {voter}
        </div>
    )
}

export default SearchBar;