import React from 'react'
import logo from '../images/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        const nav = [
            {ID:1, label: "Mobile Phones"},
            {ID:2, label: "Cars"},
            {ID:3, label: "Motorcycles"},
            {ID:4, label: "Houses"},
            {ID:5, label: "TV-Video-Audio"},
            {ID:6, label: "Teblets"},
            {ID:7, label: "Land & Plots"},
        ]
    
        return (
            <React.Fragment>
                <div className="header fixed flex aic">
                    <div className="logo">
                        <img src={logo} alt="logo" width="50px" />
                    </div>
                    <div className="location rel flex aic">
                        <SearchIcon className="ico " style={{ fontSize: 30 }} />
                        <input className="label s15 font" placeholder="your Location" value="pakistan" />
                        <KeyboardArrowDownIcon className="arrow" style={{ fontSize: 30 }} />
                    </div>
                    <div className="search flex rel aic">
                        <input type="text" placeholder="Find Cars, Mobile Phones and More...." className="query s15 font" />
                        <div className="go-head">
                            <SearchIcon className="go" style={{ fontSize: 30 }} />
                        </div>
                    </div>
                    <div className="actions flex aic">
                        <Link to="/account.signin" className="fontb s16 noulh noul">Login</Link>
                        <button className="sell flex aic">
                            <AddIcon className="ico s24 fontb" />
                            <h2 className="s18 fontb">SELL</h2>
                        </button>

                    </div>
                </div>

                <div className="hnav fixed flex aic">
                    <button className="view-cates flex aic color">
                        <h2 className="s14 fontb">ALL CATEGORIES</h2>
                        <KeyboardArrowDownIcon className="arrow" style={{ fontSize: 30 }} />
                    </button>
                    {
                        nav.map(item =>{
                            return(
                            <Link to={"/browser/" + item.ID} className=" noulh noul color bl font s15">{item.label}</Link>
                            )
                        })
                    }
                </div>
            </React.Fragment>


        )
    }
}
export default Header;