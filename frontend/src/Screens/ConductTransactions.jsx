import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../Config'
import history from '../history'

const ConductTransactions = () => {
    const [amount, setAmount] = useState(0)
    const [recipient, setRecipient] = useState('')
    const [knownAddresses, setKnownAddresses] = useState([])

    useEffect(()=>{
        fetch(`${API_BASE_URL}/known-addresses`)
        .then(response => response.json())
        .then(json => setKnownAddresses(json))
    }, [])

    const updateRecipient = event=>{
        setRecipient(event.target.value)
    }
    const updateAmount = event=>{
        setAmount(Number(event.target.value))
    }
    const submitTransaction = ()=>{
        fetch(`${API_BASE_URL}/wallet/transact`,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({recipient, amount})
        }
        ).then(response => response.json())
        .then(json=>{
            console.log('submitTransaction json', json)
            alert('Success')
            history.push('/transaction-pool')
        })
    }

    return(
        <>
 <div className="container">
     <div className="text-center">
         <h1>Conduct a transaction</h1>
     <div className="card" style={{width:'100%'}}>
  <div className="card-body">
  <div className="mb-3">
 <input 
 type="text" placeholder="Recipient" 
 className="form-control" id="exampleInputEmail1" 
 aria-describedby="emailHelp"
 value={recipient}
 onChange={updateRecipient}
 />
  </div>
  <div className="mb-3">
    <input type="text" placeholder="Amount" 
    className="form-control" id="exampleInputPassword1"
    value={amount}
 onChange={updateAmount}
    />
  </div>
  <button onClick={submitTransaction} className="btn btn-primary">Submit</button>
  </div>
</div>
<hr />
<h4>Known Addresses</h4>
{
    knownAddresses.map((knownAddresses, i) => (
        <span key={knownAddresses}><u>{knownAddresses}</u>{i !== knownAddresses.length-1?', ':''}</span>
    ))
}
     </div>
 </div>
        </>
    )
}
export default ConductTransactions