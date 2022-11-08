import React,{ useState, useEffect} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import AddVoter from "./pages/AddVoter";
import PollingStations from './pages/PollingStationList'
import NavBar from "./pages/NavBar";


function App() {
  const [stationData, setStationData] = useState([])
    
    useEffect(()=>{
        fetch("http://localhost:3000/polling_stations")
        .then(r => r.json())
        .then(d => setStationData(d))
    },[])

    console.log(stationData)

  return(
    <>
      <BrowserRouter>
        <Route>
            <NavBar path='/' />
        </Route>
          <Switch>
            <Route path='/registration'>
              <AddVoter stationData={stationData} />
            </Route>
            <Route exact path="/">
              <PollingStations stationData={stationData} />
            </Route>
          </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
