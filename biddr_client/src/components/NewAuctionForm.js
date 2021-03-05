import React, {useState} from 'react';
import {FormErrors} from  './FormErrors';
import {Auction} from '../requests';

const NewAuctionForm=(props)=>{
    const [errors,setErrors]=useState({});

    const handleSubmit =(event)=>{
        event.preventDefault();
        const formData=new FormData(event.currentTarget);
        const params={
            title: formData.get('title'),
            description: formData.get('description'),
            ends_at: formData.get('ends_at'),
            reserve_price: formData.get('reserve_price')
        };
        Auction.create(params)
        .then(
            (auction)=>{
                if(auction.errors){
                setErrors(auction.errors)
            }
            if(auction.id){
                const id=auction.id;
                props.history.push(`/auction/${id}`)

            }
            }
        )
    }


    return(
      <main>
          <h1 style={{backgroundColor:'pink',textAlign:'center',fontFamily:'serif'}}>CREATE AN AUCTION</h1>
          <ul style={{ padding: 5,marginLeft:'20px', listStyle: 'none'}}>
            <form className='auction-form' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='title'>Title*</label>
                <FormErrors errors={errors} forField='title' />
                <input name='title' id='title' />
              </div>
              <br/>

              <div>
                <label htmlFor='description'>Description*</label>
                <FormErrors errors={errors} forField='description' />
                <textarea name='description' id='description' cols='21' rows='5'/>
              </div>
              <br/>

              <div>
                <label htmlFor='ends_at'>Ends at*</label>
                <FormErrors errors={errors} forField='ends_at' />
                <input type="date"name='ends_at' id='ends_at' />
              </div>
              <br/>

              <div>
                <label htmlFor='reserve_price'>Reserve Price*</label>
                <FormErrors errors={errors} forField='reserve_price' />
                <input type="number" name='reserve_price' id='reserve_price'/>
              </div><br/>
              <button style={{backgroundColor:'black',marginLeft:'7.7rem'}}> <input type='submit' value='Save'/></button>
            

              <div>
              
              </div>
            </form>
          </ul>
      </main>
    );
}
export default NewAuctionForm;