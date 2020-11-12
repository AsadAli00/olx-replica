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
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import firebase from '../config/firebase'


class Header extends React.Component {

    constructor() {
        super()
        this.state = {
            locationValue: "Karachi",
            anchorEl: "",
            loginModel: false,
            PhoneModel: false,
            emailModel: false,
            PhoneNumber: "",
            email: "",
            password: "",
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


        const handleLoginOpen = () => {
            this.setState({
                ...this.state,
                loginModel: true
            })
        };

        const handleLoginClose = () => {
            this.setState({
                ...this.state,
                loginModel: false
            })
        };
        const handlePhoneOpen = () => {
            this.setState({
                ...this.state,
                PhoneModel: true,
            })
        };

        const handleEmailOpen = () => {
            this.setState({
                ...this.state,
                emailModel: true,
            })
        };
        const handlePhoneClose = () => {
            this.setState({
                ...this.state,
                PhoneModel: false,
            })
        };
        const handleEmailClose = () => {
            this.setState({
                ...this.state,
                emailModel: false,
            })
        };

        const SignInWithEmail = () => {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            
            .then(()=>{
                alert("successFull Create Now Log In Again")
            })
            
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
                // ...
            });
        }

        const SignOutEmail = () => {

        }

        const nav = [
            { ID: 1, label: "Mobile Phones" },
            { ID: 2, label: "Cars" },
            { ID: 3, label: "Motorcycles" },
            { ID: 4, label: "Houses" },
            { ID: 5, label: "TV-Video-Audio" },
            { ID: 6, label: "Teblets" },
            { ID: 7, label: "Land & Plots" },
        ]

        const LoginBody = (

            <React.Fragment>
                <div className="login flex">
                    <div className="close-btn">
                        <CloseIcon onClick={handleLoginClose} />
                    </div>
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
                        <div className="flex aic jcc color" onClick={handlePhoneOpen}>
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
                        <div className="flex aic jcc color" onClick={handleEmailOpen}>
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
            </React.Fragment>
        );

        const PhoneBody = (
            <React.Fragment>
                <div className="login flex">
                    <div className="backBtn">
                        <ArrowBackIcon onClick={handlePhoneClose} />
                    </div>
                    <form>
                        <div className="phone">
                            <div className="phoneLogo flex aic jcc">
                                <img src={logo} alt="logo" width="50px" />
                            </div>
                            <div className="PhoneText color aic flex jcc">
                                <h5 className="b font"><label for="phone">Enter your Phone</label></h5>
                            </div>
                            <div className="PhoneInput flex aic">
                                <div className="fontl color p-2 s16 aic jcc">+92</div>
                                <div className="phoneBreak"></div>
                                <div className="Input">
                                    <input type="tel" id="phone" name="phone" onChange={(e) => this.setState({
                                        ...this.state,
                                        PhoneNumber: e.target.value,
                                    })} pattern="3[0-9]{2}[0-9]{7}" placeholder="Phone Number" className="Phoneinput s15 font" />
                                </div>
                            </div>
                            <div className="Login flex aic jcc">
                                <button className="fontr b anim s16" id="sign-in-button">
                                    LogIn
                                    </button>
                            </div>
                            <div className="phoneFooter font flex tac cb">
                                <p className="s13">We won't reveal your phone number to anyone else nor use it to send you spam</p>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );

        const EmailBody = (
            <React.Fragment>
                <div className="login flex">
                    <div className="backBtn">
                        <ArrowBackIcon onClick={handleEmailClose} />
                    </div>
                        <div className="phone">
                            <div className="phoneLogo flex aic jcc">
                                <img src={logo} alt="logo" width="50px" />
                            </div>
                            <div className="PhoneText color aic flex jcc">
                                <h5 className="b font"><label for="email">Enter your Email</label></h5>
                            </div>
                            <div className="PhoneInput flex aic color jcc">
                                <input type="email" name="email" id="email" value={this.state.email} placeholder="Enter Email" className="Phoneinput s15 font" onChange={(e) => {
                                    this.setState({
                                        ...this.state,
                                        email: e.target.value,
                                    })
                                }} />
                            </div>
                            <div className="PhoneInput flex color aic jcc">
                                <input type="password" name="email" value={this.state.password} placeholder="Enter Password" className="Phoneinput s15 font" onChange={(e) => {
                                    this.setState({
                                        ...this.state,
                                        password: e.target.value,
                                    })
                                }} />
                            </div>
                            <div className="Login flex aic jcc">
                                <button className="fontr b anim s16" onClick={()=> SignInWithEmail()}>
                                    LogIn
                                </button>
                            </div>
                            <div className="phoneFooter font flex tac cb">
                                <p className="s13">We won't reveal your phone number to anyone else nor use it to send you spam</p>
                            </div>
                        </div>
                </div>
            </React.Fragment>
        );

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
                        <Link to="/signIn" className="fontb s16 noul" onClick={handleLoginOpen}>Login</Link>
                        <button className="sell flex aic" onClick={handleLoginOpen}>
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
                        {LoginBody}
                    </Modal>
                    <Modal
                        open={this.state.PhoneModel}
                        onClose={handlePhoneClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        className="flex aic jcc"
                    >
                        {PhoneBody}
                    </Modal>
                    <Modal
                        open={this.state.emailModel}
                        onClose={handleEmailClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        className="flex aic jcc"
                    >
                        {EmailBody}
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


// const mapStateToProps = (state) => ({
//     // email: state.auth.email,
//     // userName: state.auth.userName,
//     loginModel: state.app.loginModel,
//     PhoneModel: state.app.PhoneModel,
//     emailModel: state.app.emailModel,
// })



// const mapDispatchToMap = (dispatch) => ({
//     set_Login: (data) => dispatch(set_Login(data)),

// })

export default Header;