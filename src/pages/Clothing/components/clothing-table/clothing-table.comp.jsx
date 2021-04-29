import React from 'react';
import TypeGarmentRow from '../type-garment-row/type-garment-row.comp';
import GarmentRow from '../garment-row/garment-row.comp';
import TradeMarkRow from '../trade-mark-row/trade-mark-row.comp';

import './clothing-table.style.css';

const ClothingTable = (props) => {
    return(
        <div className="clothing-table-container">
            {props.garmentsList.map((category, index)=>{
                return (
                    <React.Fragment key={category.id}>
                        <TypeGarmentRow typeGarment={category.name}/>
                        <div className="left-content">
                            {category.garments.map((garment, indexGarment)=>{
                                return (
                                    <GarmentRow
                                        key={garment.id}
                                        garment={garment}
                                    />
                                );
                            })}
                        </div>
                        <div className="right-content">
                            {category.tradeMarks.map((trade, indexMark)=>{
                                return (
                                    <TradeMarkRow
                                        key={trade.id}
                                        trade={trade}
                                    />
                                );
                            })}
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    )
}

export default ClothingTable;


