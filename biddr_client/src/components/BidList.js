import React from 'react';
import BidDetails from './BidDetails';

const BidList = (props) => {
  const bids = props.bids;
  return(
    <ul>
      {
        bids?
        bids.map(bid => {
          return (
            <li key={bid.id}>
              <BidDetails
                id={bid.id}
                description={bid.description}
                created_at={new Date(bid.created_at).toDateString() }
              />
            </li>
          )
        })
        :
        null
      }
    </ul>
  )
}

export default BidList;
