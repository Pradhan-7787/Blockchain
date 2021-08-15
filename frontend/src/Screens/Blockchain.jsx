import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../Config'
import Block from '../Components/Block'


const PAGE_RANGE = 4;


const Blockchain = () => {
    const [blockchain, setBlockchain] = useState([]);
    const [blockchainLength, setBlockchainLength] = useState(0);

    const fetchBlockchainPage = ({start, end})=>{
        fetch(`${API_BASE_URL}/blockchain/range?start=${start}&end=${end}`)
        .then(Response => Response.json())
        .then(json => setBlockchain(json));
    }


    useEffect(()=>{
        fetchBlockchainPage({start: 0, end: PAGE_RANGE})

        // fetch(`${API_BASE_URL}/blockchain`)
        // .then(Response => Response.json())
        // .then(json => setBlockchain(json));


        fetch(`${API_BASE_URL}/blockchain/length`)
        .then(Response => Response.json())
        .then(json => setBlockchainLength(json));
    }, [])

const buttonNumbers = []
for(let i=0; i<blockchainLength/PAGE_RANGE; i++){
    buttonNumbers.push(i)
}

    return(
        <>
 <div className="container">
     <h1 className="text-center">
         Welcome to Blockchain
     </h1>
<div className="text-center">
    <div className="row">
        
            {
                
                blockchain.map(block=>
                    <Block key={block.hash} block={block}/>
                    )
                    
            }
        
    </div>
    <hr />
    {
     buttonNumbers.map(number=>{
         const start = number * PAGE_RANGE;
         const end = (number + 1) * PAGE_RANGE
         return(
             <span key = {number} onClick={()=>fetchBlockchainPage({start, end})}>
                 <button className="btn btn-warning">
                     {number + 1}
                     </button>{' '}
             </span>
         )
     })
 }
</div>
 </div>

        </>
    )
}
export default Blockchain