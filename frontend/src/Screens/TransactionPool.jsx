import React, { useEffect, useState } from 'react'
import Transaction from '../Components/Transaction';
import { API_BASE_URL, SECONDS_JS } from '../Config';
import history from '../history';

const POLL_INTERVAL = 10 * SECONDS_JS

const TransactionPool = () => {
    const [transactions, setTransactions] = useState([])

    const fetchTransactions = () => {
        fetch(`${API_BASE_URL}/transactions`)
        .then(Response => Response.json())
        .then(json => {
            console.log('transactions json', json)
            setTransactions(json)
        });
    }

    useEffect(()=>{
fetchTransactions()

const intervalId = setInterval(fetchTransactions, POLL_INTERVAL)

return() => clearInterval(intervalId)
    }, [])

    const fetchMineBlock=()=>{
        fetch(`${API_BASE_URL}/blockchain/mine`)
        .then(()=>{
            alert('Success')

            history.push('/blockchain')
        })
    }

    return(
        <>
<div className="container">
    <div className="text-center">
        <h1>Transaction Pool</h1>
        <hr />
        <div className="row">
            {
                transactions.map(transaction => (
                    <div className="col-md-4 my-2">
                    <div className="card" style={{width:'100%', height:'100%'}}>
  <div className="card-body">
    <Transaction transaction={transaction}/>
  </div>
</div>
</div>
                ))
            }
        </div>
        <hr />
        <button className="btn btn-primary" onClick={fetchMineBlock}>Mine a block of these transactions</button>
    </div>
</div>
        </>
    )

}

export default TransactionPool