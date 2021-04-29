import React from 'react';

import './garment-row.style.css';

const GarmentRow = (props) => {
    return(
        <div className="garment-row-container">
            
            {props.garment.name}
            <br/>
            {
                props.garment.size === "Child"
                ?
                    <span className="garment-size">{props.garment.size}</span> 
                :
                    <span>{props.garment.size}</span> 
            }
            <br/>  
            {props.garment.gender}
        </div>
    )
}

export default GarmentRow;