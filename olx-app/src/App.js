import React from 'react'
import './App.css';
import './post.css';
import './chat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom'
import './props.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import '@fortawesome/fontawesome-free/css/solid.css'


//import components 
import Home from './components/Home'
import Header from './components/Header'
import HeaderSignedIn from './components/HeaderSignedIn'
import Post from './components/Post'
import Footer from './components/Footer'
import { connect } from 'react-redux';
import Chat from './components/Chat'
import { SignalWifiOffOutlined } from '@material-ui/icons';

class App extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.isLoggedIn) {
      return (
        <BrowserRouter>
        <HeaderSignedIn />
          <Switch >
            <Route path="/" component={Home} exact/>
            <Route path="/post"  component={Post} />
            <Route path="/chat"  component={Chat} />
            {/* <Route path='/post' render={()=>(this.props.post ? <Post /> : <Redirect to="/" />)}/> */}
            
            {/* <Route path='/Home/UserLoggedIn' component={Footer} /> */}
          </Switch>
          <Footer />
        </BrowserRouter>
      )
    }


   
    return (
      <BrowserRouter>
        <Header />
        <Switch >
          <Route path="/" component={Home} />
          
          {/* <Route path='/Home/UserLoggedIn' render={()=>(this.props.post ? <Post /> : <Redirect to="/" />)}/> */}
          {/* <Route path='/Home/UserLoggedIn' component={Footer} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}
const mapStateToProps = (state) => ({
  // email: state.auth.email,
  // userName: state.auth.userName,
  isLoggedIn: state.auth.isLoggedIn,
  isLoggedOut: state.auth.isLoggedOut,
  post: state.app.post
})
export default connect(mapStateToProps, null)(App);

// export default App;