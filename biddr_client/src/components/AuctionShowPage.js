import React, { Component } from 'react';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';
import { Auction } from '../requests';
import { Bid } from '../requests';
class AuctionShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auction: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Auction.show(this.props.match.params.id)
      .then(auction => {
        this.setState((state) => {
          return {
            auction: auction
          }
        })
      })
  }


  handleSubmit(event) {
  
    console.log(event);
    const formData= new FormData(event.currentTarget);
    const params = {
      description: formData.get('description'),
      auction_id: this.state.auction.id
    };
     Bid.create(params)
     .then((bid)=>{
       this.props.history.push(`/auction/${this.state.auction.id}`)
     })
    
  }

  render() {
    return (
      <main>
          <ul style={{ padding: 2,marginLeft:'20px', listStyle: 'none'}}>
        <AuctionDetails
          title={ this.state.auction.title }
          description={ this.state.auction.description }
          ends_at={ this.state.auction.ends_at }
          reserve_price={ this.state.auction.reserve_price }     
        />
      
        <form onSubmit={this.handleSubmit} >
          <div>
            <label htmlFor='description'> </label>
            <input type='number' id='description' name='description' required='required' placeholder="Enter Bid Price..."></input>
            <button style={{backgroundColor:'black',marginLeft:'.3rem'}}> <input type="submit" value="Bid"></input></button>
          </div>
        </form>
     
        </ul>
       
     
       
        <u><h4 style={{ padding: 2,marginLeft:'20px', listStyle: 'none'}}>Previous Bids</h4></u> 
        
      
        <BidList bids={this.state.auction.bids}/>
     
  
      </main>
    )
  }
}

export default AuctionShowPage;