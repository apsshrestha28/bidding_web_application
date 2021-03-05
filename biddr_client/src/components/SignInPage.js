import React from 'react';

const SignInPage = ({ handleSubmit, history}) => {

  function onSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    handleSubmit({
      email: formData.get('email'),
      password: formData.get('password')
    });
    history.push('/auctions')
  }

  return(
    <main>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
      <ul style={{ padding: 5, listStyle: 'none'}}>
          <li>
            <div>
              <label htmlFor='email'>Email*</label>
              <br/>
              <input id='email' type='email' name='email' />
            </div>
            <br/>
            <div>
              <label htmlFor='password'>Password*</label>
              <br/>
              <input id='password' type='password' name='password' />
            </div>
          </li>
        <br/>
        <button style={{backgroundColor:'black'}}> <input type='submit' value='Sign In'/></button>

      </ul>
      </form>
    </main>
  )
}

export default SignInPage;