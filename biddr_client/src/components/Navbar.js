import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  function handleSignOutButtonClick() {
    props.destroySession();
  }

  return(
    <nav
    style={{
      backgroundColor: 'whitesmoke',
      border:'3px solid black',
      colior:"blue",
      fontFamily:"Arial",
      fontSize:"30px",
      textAlign:"center"
      
    }} >
      <div className="navbar">
        <div className="coin"> </div>

          <NavLink to='/'>Home</NavLink>
          |
          <NavLink to='/auctions'>Auctions</NavLink>
          |
          <NavLink to='/auctions/new'>New Auctions</NavLink>
          |
          {
            props.currentUser ?(
              <>
              <span>{props.currentUser.first_name}</span>
              <button onClick={handleSignOutButtonClick} 
                style={{
                  border:'3px solid red',
                  fontSize:"23px",
                  float:"right"
                }}>Sign Out
              </button>
              </>
          ):
          (
            <>
              <NavLink to="/sign_in">Sign In</NavLink>
              |
              <NavLink to="/sign_up">Sign Up</NavLink>
            </>
          )}
      </div>
    </nav>
  )
}

export default Navbar;