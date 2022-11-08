import React,{ useState, useEffect} from "react";
import AddVoter from "./pages/AddVoter";


function App() {
  const [wardData, setWardData] = useState([])
    
    useEffect(()=>{
        fetch("http://localhost:9292/wards")
        .then(r => r.json())
        .then(d => setWardData(d))
    },[])

    console.log(wardData)

  return(
    <div>
        <AddVoter wardData={wardData}/>
    </div>
  )
}

export default App;
