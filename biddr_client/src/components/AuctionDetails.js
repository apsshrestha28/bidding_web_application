import React from 'react';

const AuctionDetails = ({ title, description, ends_at, reserve_price}) => {
  return (
    <div>
      <ul style={{ padding: '3px',marginLeft:'2px', listStyle: 'none'}}>
        <li style={{fontSize:'2rem',fontFamily:'sans-serif'}}><b>{title}</b></li><br/>
      
        <li style={{width: '200px', wordWrap: 'break-word'}}>{description}</li>
      </ul>
      <ul style={{ padding: '2px',marginLeft:'300px',marginTop:'-3rem', listStyle: 'none'}}>
        <li>Ends at: {new Date(ends_at).toDateString()}</li><br/>
        <li>Reserve price: ${reserve_price}</li>
        <br/><br/>
      </ul>
    </div>
  );
};
export default AuctionDetails;
