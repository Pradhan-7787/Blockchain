import React from 'react'

const Transaction = ({transaction}) => {
    const {input, output} = transaction;
    const recipients = Object.keys(output);
    return(
        <>
        <p className="card-text"><b>From: </b> {input.address}</p>
        {
            recipients.map(recipient => (
<p className="card-text" key={recipient}>
    <b>To: </b> {recipient} | Sent: {output[recipient]}
    </p>
        
            ))
        }
    </>
    )
}
export default Transaction