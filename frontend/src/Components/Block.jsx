import React, { useState } from 'react'
import {MILLISECONDS_PY} from '../Config'
import Transaction from './Transaction';

function ToggleTransactionDisplay({block}){
    const [displayTransaction, setDisplayTransaction] = useState(false)
    const {data} = block;

    const toggleDisplayTransaction=()=> {
        setDisplayTransaction(!displayTransaction)
    }

    if(displayTransaction){
return(
    <p className="card-text">{
        data.map(transaction => (
            <p className="card-text" key={transaction.id}>
                <hr />
                <Transaction transaction={transaction}/>
                </p>
        ))
        }
        <br />
        <button className="btn btn-danger" onClick={toggleDisplayTransaction}>Show Less</button>
        </p>
)
    }
    return(
        <button className="btn btn-primary" onClick={toggleDisplayTransaction}>Show More</button>
    )
}

const Block = ({block}) => {
const {timestamp, hash} = block;
const hashDisplay = `${hash.substring(0, 15)}...`;
const timestampDisplay = new Date(timestamp / MILLISECONDS_PY).toLocaleString();
    return(
        <>
        <div className="col-md-6 my-2">
                    <div className="card" style={{width:'100%', height:'100%'}}>
  <div className="card-body">
    <h5 className="card-title">Blockchain Info</h5>
    <hr />
    <p className="card-text"><b>Hash: </b> {hashDisplay}</p>
    <p className="card-text"><b>Timestamp: </b> {timestampDisplay}</p>
    <br />
    <ToggleTransactionDisplay block={block}/>
  </div>
</div>
</div>
        </>
    )
}
export default Block