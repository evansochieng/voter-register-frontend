import React from "react";
import home from '../home.css';

const Home = ({stationData}) => {

    const stationList = stationData.map((stn)=> {
        return(
            
            <div className='pollcount' key={stn.id}>
                <button className='poll' value={stn.id}>{stn.name}</button>
                <button className='vote'>voters-count</button>
                {/* <div><h1>Voter registration Platform</h1></div> */}
            </div>
           
        )
    })

    return(
        <div>{stationList}</div>
    )

}

export default Home;