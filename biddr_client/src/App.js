import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuctionIndexPage from './components/AuctionIndexPage';
import AuctionShowPage from './components/AuctionShowPage';
import NewAuctionForm from './components/NewAuctionForm';
import SignInPage from './components/SignInPage';
import Navbar from './components/Navbar';
import {Session } from './requests';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
import {NotFoundPage} from './components/NotFoundPage';
import WelcomePage from './components/WelcomePage';

import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
     
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  componentDidMount() {  
    Session.currentUser()
      .then(user => {
        this.setState((state) => {
          return {
            user: user
          }
        })
      })
  }
  handleSubmit(params) {
    Session.create(params)
    .then(() => {
      return Session.currentUser()
    })
    .then(user => {
      this.setState((state) => {
        return {
          user: user
        }
      })
    })
  }
  destroySession() {
    Session.destroy()
      .then(res => {
        this.setState((state) => {
          return {
            user: null
          }
        })
      })
  }


  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar currentUser={this.state.user} destroySession={this.destroySession}/>
          <Switch>
           <Route exact path='/' component={WelcomePage}/>
          
          
            <Route exact path='/auctions'>
              <AuctionIndexPage />
            </Route>
            <AuthRoute exact
              path='/auctions/new'
              isAuth={this.state.user}
              component={NewAuctionForm}
            />
           
           <Route path='/auction/:id' component={AuctionShowPage} />
            <Route
             exact path='/sign_in' render={(routeProps) => <SignInPage handleSubmit={this.handleSubmit} {...routeProps}/>}
            />
            <Route
              exact
              path="/sign_up"
              render={routeProps => (
                <SignUpPage {...routeProps} onSignUp={this.handleSubmit} />
              )}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>

      </div>

    )
  }



}
export default App;