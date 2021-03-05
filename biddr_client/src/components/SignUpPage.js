import React from "react";

import { User } from "../requests";

 function SignUpPage(props) {
  const { onSignUp } = props;

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fD = new FormData(currentTarget);

    const newUser = {
      first_name: fD.get("first_name"),
      last_name: fD.get("last_name"),
      email: fD.get("email"),
      password: fD.get("password"),
      password_confirmation: fD.get("password_confirmation")
    };

    User.create(newUser).then(res => {
      if (res.id) {
        onSignUp();
        props.history.push("/auctions");
      }
    });
  }
  return (
    <main>
      <ul style={{ padding: 5, listStyle: 'none'}}>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="first_name">First Name*</label><br/>
          <input type="text" name="first_name" id="first_name" />
        </div><br/>

        <div className="field">
          <label htmlFor="last_name">Last Name*</label><br/>
          <input type="text" name="last_name" id="last_name" />
        </div><br/>

        <div className="field">
          <label htmlFor="email">Email*</label><br/>
          <input type="email" name="email" id="email" />
        </div><br/>

        <div className="field">
          <label htmlFor="password">Password*</label><br/>
          <input type="password" name="password" id="password" />
        </div><br/>

        <div className="field">
          <label htmlFor="password_confirmation">Password Confirmation*</label><br/>
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
          />
        </div><br/>
        <button className="ui primary button">Sign Up</button>
      </form>
      </ul>
    </main>
  );
}
export default SignUpPage;