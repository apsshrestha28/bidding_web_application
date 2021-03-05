import React, { Component } from 'react';
import { Auction } from '../requests';
import {Link} from 'react-router-dom';

class AuctionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auctions: []
    }
  }
  componentDidMount() {
    Auction.index()
    
      .then((auctions) => {
        this.setState((state) => {
          return {
            auctions: auctions
           
          }
        })
      })
  }

  
  render() {
    return (
      <main>
        <h1 style={{backgroundColor:'yellow',textAlign:'center'}}>AUCTIONS</h1>
        <ul style={{ padding: 5, listStyle: 'none'}}>
          {
            this.state.auctions.map(auction => {
              return(
                <li key={auction.id}>
                <Link key={auction.id} to={`/auction/${auction.id}`}>{auction.title}</Link>      
                <p> posted on {new Date(auction.created_at).toDateString()}</p>
                </li>
              )
            })
          }
        </ul>
      </main>
    );
  }

}
export default AuctionIndexPage;