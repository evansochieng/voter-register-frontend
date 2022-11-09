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
          <tr className="pollcount" key={Object.keys(stn)}>
            <td className="poll">{Object.keys(stn)}</td>
            <td className="vote">{Object.values(stn)}</td>
          </tr>
        );
    })

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Polling Station</th>
              <th>Number of Registered Voters</th>
            </tr>
          </thead>
          <tbody>{stationList}</tbody>
        </table>

        <p style={{fontSize: "30px", textAlign: "center", justifyContent: "center"}}>Jiandikishe turudishe bei ya unga chini!</p>
      </div>
    );

}

export default Home;