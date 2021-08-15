import React, {useState, useEffect} from 'react'
import { API_BASE_URL } from '../Config'
import {NavLink} from 'react-router-dom'

const Home = () => {
    const [walletInfo, setWalletInfo] = useState({})

    useEffect(()=>{
        fetch(`${API_BASE_URL}/wallet/info`)
        .then(Response => Response.json())
        .then(json => setWalletInfo(json));
    }, [])
    const {address, balance} = walletInfo
    return(
        <>
 <div className="container">
     <h1 className="text-center">
         Welcome to Blockchain
     </h1>
<div className="text-center">
<div className="card" style={{width:'100%'}}>
  <div className="card-body">
    <h5 className="card-title">Wallet Info</h5>
    <hr />
    <p className="card-text"><b>Address: </b> {address}</p>
    <p className="card-text"><b>Balance: </b> {balance}</p>
    <NavLink style={link_style} to="/blockchain" className="card-link">Blockchain</NavLink>
    <NavLink style={link_style} to="/transaction" className="card-link">Conduct A Transaction</NavLink>
    <NavLink style={link_style} to="/transactionpool" className="card-link">Transaction Pool</NavLink>
  </div>
</div>
</div>
 </div>
        </>
    )
}
export default Home

const link_style={
    textDecoration: 'none',
    fontWeight:'600'
}