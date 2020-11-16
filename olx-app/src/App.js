import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,  Redirect,  Route, Switch} from 'react-router-dom'
import './props.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import '@fortawesome/fontawesome-free/css/solid.css'


//import components 
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { connect } from 'react-redux';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <Header /> 
      <Switch >
      <Route path="/" component={Home} />
      <Route path='/Home/UserLoggedIn' render={()=>(this.props.isLoggedIn ? <Home /> : <Redirect to="/" />)}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    )
  }
}
const mapStateToProps = (state) => ({
  // email: state.auth.email,
  // userName: state.auth.userName,
  isLoggedIn: state.auth.isLoggedIn,
})
export default connect(mapStateToProps,null)(App);
