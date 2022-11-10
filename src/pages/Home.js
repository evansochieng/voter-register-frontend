import React, { useEffect, useState } from "react";
import '../home.css';

const Home = () => {

    //set state
    const [voterCount, setVoterCount] = useState([]);

    //fetch voter count summary from api
    useEffect(() => {
        fetch("http://localhost:9292/pollingstations/votercounts")
        .then(resp => resp.json())
        .then(data => setVoterCount(data))
    }, [])

    const stationList = voterCount.map((stn)=> {
        return (
          <tr key={Object.keys(stn)}>
            <td className="poll">{Object.keys(stn)}</td>
            <td className="vote">{Object.values(stn)}</td>
          </tr>

        );
    })

    return (
      <div>
        <table className="pollcount">
          <thead>
            <tr className="heading">
              <th>Polling Station</th>
              <th>No. of Registered Voters</th>
            </tr>
          </thead>
          <tbody>{stationList}</tbody>
        </table>

        <p style={{marginTop: "90px",color: "white",fontSize: "50px", fontWeight: "bolder", fontFamily: "sans-serif", textAlign: "center", justifyContent: "center"}}>Jiandikishe turudishe bei ya unga chini!</p>
      </div>
    );

}

export default Home;