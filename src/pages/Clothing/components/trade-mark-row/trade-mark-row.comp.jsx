import React from 'react';

import './trade-mark-row.style.css';

const TradeMarkRow = (props) => {
    return(
        <div className="trade-mark-row-container">
            {props.trade.mark}
            <br/>
            {props.trade.price}
        </div>
    )
}

export default TradeMarkRow;