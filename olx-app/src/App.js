import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,  Route} from 'react-router-dom'
import './props.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import '@fortawesome/fontawesome-free/css/solid.css'


//import components 
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <Header /> 
      <Route path="/" component={Home} />
      <Footer/>
      </BrowserRouter>
    )
  }
}

export default App;
