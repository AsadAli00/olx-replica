import React from 'react'
import logo from '../images/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'
import Popover from '@material-ui/core/Popover';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Divider from '@material-ui/core/Divider';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Modal from '@material-ui/core/Modal';
import banner2 from '../images/loginbanner1.png';
import banner1 from '../images/loginbanner2.png';
import banner3 from '../images/loginbanner3.png';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';



class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            locationValue: "Karachi",
            anchorEl: "",
            loginModel: false,
        }
    }
    render() {


        const handleClick = (event) => {
            this.setState({
                ...this.state,
                anchorEl: event.currentTarget,
            })
        };

        const handleClose = () => {
            this.setState({
                ...this.state,
                anchorEl: ""
            })
        };

        const open = Boolean(this.state.anchorEl);
        const id = open ? 'simple-popover' : undefined;

        const handleChange = (event) => {
            this.setState({
                ...this.state,
                locationValue: event.target.value
            })

        }


        const handleOpen = () => {
            this.setState({
                ...this.state,
                loginModel: true,
            })
        };

        const handleLoginClose = () => {
            this.setState({
                ...this.state,
                loginModel: false,
            })
        };

        const body = (
            <div className="login flex aic jcc">
                <div
                    id="carouselExampleCaptions"
                    className="carousel font s15"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li
                            data-target="#carouselExampleCaptions"
                            data-slide-to={0}
                            className="active"
                        ></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                        <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item  active">
                        <img src={banner1} className="d-block w-100" alt="..." />
                            <div className="caption s13 font flex color">
                                <h5 className="s15">Help make OLX safer place to buy and sell</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            
                            <img src={banner2} className="d-block w-100" alt="slider 1" />
                            <div className="caption s13 font flex color aic">
                                <h5 className="s15">Contact and Close deals faster</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={banner3} className="d-block w-100" alt="..." />
                            <div className="caption s13 font flex color">
                                <h5 className="s15">Save all your favorite items in one place</h5>
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleCaptions"
                        role="button"
                        data-slide="prev"
                    >
                        <KeyboardArrowLeftIcon className="arrow" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleCaptions"
                        role="button"
                        data-slide="next"
                    >
                        <KeyboardArrowRightIcon className="arrow" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="login-btn flex aic">
                    <div className="flex aic jcc color">
                        <button className="fontr b anim s16">
                            Continue with Phone
                         </button>
                    </div>
                    <div className="flex aic jcc color">
                        <button className="font b anim s16">
                        <i className="fab fa-facebook fa-lg"></i> &nbsp;
                            Continue with facebook
                         </button>
                    </div>
                    <div className="flex aic jcc color">
                        <button className="fontr b anim s16">
                        <i className="fab fa-google fa-lg"></i> &nbsp;
                            Continue with google
                         </button>
                    </div>
                    <div className="flex aic jcc color">
                        <button className="fontr b anim s16">
                            Continue with email
                         </button>
                    </div>
                </div>
                <div className="footer-text font flex jcc aic cb">
                    <p className="s13">We won't share your personal details with anyone</p>
                </div>
                <div className="footerb-text font flex tac cb">
                    <p className="s13">If you continue, you are accepting <Link> OLX Terms and Conditions and Privacy Policy </Link></p>
                </div>
            </div>
        );

        const nav = [
            { ID: 1, label: "Mobile Phones" },
            { ID: 2, label: "Cars" },
            { ID: 3, label: "Motorcycles" },
            { ID: 4, label: "Houses" },
            { ID: 5, label: "TV-Video-Audio" },
            { ID: 6, label: "Teblets" },
            { ID: 7, label: "Land & Plots" },
        ]


        return (
            <React.Fragment>
                <div className="header navbar  navbar-expand-lg navbar-expand-md fixed flex aic jcc">
                    <div className="logo">
                        <img src={logo} alt="logo" width="50px" />
                    </div>
                    <div className="location rel flex aic" aria-describedby={id} onClick={handleClick}>
                        <SearchIcon className="ico " style={{ fontSize: 30 }} />
                        <input className="label s16 fontl" type="text" placeholder="Search City, area or local" onChange={handleChange} value={this.state.locationValue} />
                        <KeyboardArrowDownIcon className="arrow" style={{ fontSize: 30 }} />
                    </div>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={this.state.anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <ul className="location-list flex">
                            <Link className=" noulh noul color bl font s15 jcc ">
                                <MyLocationIcon fontSize="small" /> <b>Use Current Location</b></ Link>
                            <Divider />
                            <h2 className="fonl s15 tal p-2 tc">Recent Location </h2>
                            <Link className=" noulh noul color bl font s15 jcc ">
                                <LocationOnOutlinedIcon fontSize="small" /> Azad Kashmir </ Link>
                            <Link className=" noulh noul color bl font s15 jcc ">
                                <LocationOnOutlinedIcon fontSize="small" /> Karachi </ Link>
                            <Link className=" noulh noul color bl font s15 jcc ">
                                <LocationOnOutlinedIcon fontSize="small" /> Sindh </ Link>
                            <Divider />
                            <h2 className="fonl s15 tal p-2 tc">Popular Locations </h2>
                            <Link className=" noulh noul color bl font s15 jcc ">
                                <LocationOnOutlinedIcon fontSize="small" />Karachi Motorway </ Link>
                            <Link className=" noulh noul color bl font s15 jcc ">
                                <LocationOnOutlinedIcon fontSize="small" /> Karachi </ Link>
                            <Link className=" noulh noul color bl font s15 jcc ">
                                <LocationOnOutlinedIcon fontSize="small" /> North Nazimabad</ Link>

                        </ul>
                    </Popover>
                    <div className="search collapse navbar-collapse" id="navbarText flex rel aic">
                        <input placeholder="Find Cars, Mobile Phones and More...." className="query s15 font" />
                        <div className="go-head">
                            <SearchIcon className="go" style={{ fontSize: 30 }} />
                        </div>
                    </div>
                    <div className="actions flex aic">
                        <Link to="/account.signin" className="fontb s16 noul" onClick={handleOpen}>Login</Link>
                        <button className="sell flex aic" onClick={handleOpen}>
                            <AddIcon className="ico s24 fontb" />
                            <h2 className="s18 fontb">SELL</h2>
                        </button>

                    </div>
                    <Modal
                        open={this.state.loginModel}
                        onClose={handleLoginClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        className="flex aic jcc"
                    >
                        {body}
                    </Modal>
                </div>

                <div className="hnav fixed flex aic">
                    <button className="view-cates flex aic color">
                        <h2 className="s14 fontb">ALL CATEGORIES</h2>
                        <KeyboardArrowDownIcon className="arrow" style={{ fontSize: 30 }} />
                    </button>
                    {
                        nav.map(item => {
                            return (
                                <Link to={"/browser/" + item.ID} className=" noulh noul color bl font s15">{item.label}</Link>
                            )
                        })
                    }
                </div>
                <div className="hclr" />
            </React.Fragment>


        )
    }
}
export default Header;