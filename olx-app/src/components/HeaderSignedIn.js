import React from 'react'
import logo from '../images/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';
import { Link, Route } from 'react-router-dom'
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
import firebase from '../config/firebase';
import { connect } from 'react-redux'
import { Is_Logged, Is_LoggedOut} from '../store/action';
import { Redirect } from 'react-router-dom'
import Home from './Home';
import Avatar from '@material-ui/core/Avatar';

class Header extends React.Component {

    constructor() {
        super()
        this.state = {
            locationValue: "Karachi",
            anchorEl: "",
            anchorEl1: "",
            loginModel: false,
            PhoneModel: false,
            emailSignUpModel: false,
            PhoneNumber: "",
            email: "",
            password: "",
        }
    }

    // componentDidMount() {
    //    if(this.props.isLoggedIn){
    //        <Redirect to="/Home/UserLoggedIn" />
    //    }
    //   }


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
        const handleAvaterClick = (event) => {
            this.setState({
                ...this.state,
                anchorEl1: event.currentTarget,
            })
        };
        const handleAvaterClose = () => {
            this.setState({
                ...this.state,
                anchorEl1: ""
            })
        };
        const open = Boolean(this.state.anchorEl);
        const id = open ? 'simple-popover' : undefined;
        const Avateropen = Boolean(this.state.anchorEl1);
        const Avaterid = Avateropen ? 'simple-popover' : undefined;

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
                emailSignUpModel: true,
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
                emailSignUpModel: false,
            })
        };
        // const handleAlertClose = () => {
        //     this.setState({
        //         ...this.state,
        //         alert: false,
        //     })
        // };
        // const handleAlertOpen = () => {
        //     this.setState({
        //         ...this.state,
        //         alert: true,
        //     })
        // };
        const SignUpWithEmail = () => {

            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)

                .then((result) => {



                    setTimeout(() => {
                        alert("SignUp SuccessFull")
                        window.location.reload();
                    }, 500)


                })

                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage)
                    // ...
                });
        }
        const SignInWithEmail = () => {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((result) => {
                    if (result.user) {
                        handleEmailClose()
                        handleLoginClose()
                        setTimeout(() => {
                            this.props.Is_Logged(true)
                        }, 1000)

                    }

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
            firebase.auth().signOut()
            .then((result)=> {
                this.props.Is_Logged(false)
               setTimeout(()=> {
                   console.log("signOut");
                   
                   window.location.reload()

               },500)
                // Sign-out successful.
              }).catch(function(error) {
                // An error happened.
              });
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
        const emailLetter = this.props.AuthEmail[0].substring(0, 2);

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
                        <div onClick={handleAvaterClick}>
                            <Avatar className="Avater" >{emailLetter}</Avatar></div>
                        <button className="sell flex aic" onClick={handleLoginOpen}>
                            <AddIcon className="ico s24 fontb" />
                            <h2 className="s18 fontb">SELL</h2>
                        </button>

                    </div>
                    <Popover
                        id={Avaterid}
                        open={Avateropen}
                        anchorEl={this.state.anchorEl1}
                        onClose={handleAvaterClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <ul className="avater-list flex">
                            {this.props.AuthName ? <Link className=" noulh noul color bl font s15 jcc">{this.props.AuthName[0]}</ Link> : null }
                    
                    <Link className=" noulh noul color bl font s15 jcc" onClick={SignOutEmail}>SignOut</ Link>

                        </ul>
                    </Popover>
                    {/* <Modal
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
                        open={this.state.emailSignUpModel}
                        onClose={handleEmailClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        className="flex aic jcc"
                    >
                        {EmailSignUpBody}
                    </Modal> */}
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


const mapStateToProps = (state) => ({
    // email: state.auth.email,
    // userName: state.auth.userName,
    isLoggedIn: state.auth.isLoggedIn,
    AuthEmail: state.auth.authEmail,
    isLoggedOut: state.auth.isLoggedOut,
    AuthName: state.auth.authName
})



const mapDispatchToMap = (dispatch) => ({
    Is_Logged: (data) => dispatch(Is_Logged(data)),
    Is_LoggedOut: (data) => dispatch(Is_LoggedOut(data))
})

export default connect(mapStateToProps, mapDispatchToMap)(Header);