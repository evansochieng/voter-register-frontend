import React, {useState, useEffect} from 'react';


const WardSelection = () =>{
    const [userInput, setUserInput] = useState("")
    
    useEffect(()=>{
        fetch("http://localhost:9292/wards")
        .then(r => r.json())
        .then(d => setUserInput(d))
    },[])

    console.log(userInput)
    const wards = userInput.map((ward) => {
        return(
            <option value={ward.name} key={ward.name}>{console.log(ward.name)}{ward.name}</option>
        )
    })

    return (
        <div>
            <label>Ward</label><br />
            <select name="ward">
                {wards}
            </select>
        </div>
    )
}

export default WardSelection;