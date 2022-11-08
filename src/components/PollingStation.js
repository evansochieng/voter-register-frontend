import React, {useState} from 'react';


const PollingStations = () =>{
    const [userInput, setUserInput] = useState("")
    
    fetch("").then(r => r.json()).then(d => setUserInput(d))

    const pollingStations = userInput.map((stn) => {
        return(
            <option value={stn.name}>{stn.name}</option>
        )
    })

    return (
        <div>
            <label>Polling Station</label><br />
            <select name="pollingStation">
                {pollingStations}
            </select>
        </div>
    )
}

export default  PollingStations;