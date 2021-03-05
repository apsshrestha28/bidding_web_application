import React from 'react';

const BidDetails = (props)=>{
  const description = props.description;
  const created_at = props.created_at;
  return(
    <div>
      <>${description} </>
      
      <span>
        on {created_at.toLocaleString()}
      </span>
      <br/>
      <br/>
      </div>
  )
}
export default BidDetails;