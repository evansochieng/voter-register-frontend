import React from "react";

const WardsList = ({wardData}) => {


    wardsList = wardData.map((ward, index)=> {
        return(
            <div key={index}>
                <button>{ward.name}</button>
                <button>Voters Count</button>
            </div>
        )
    })

    return(
        <div>{wardsList}</div>
    )
}

export default WardsList;