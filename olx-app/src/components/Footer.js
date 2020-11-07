import React, { Component } from 'react';
import { Link } from 'react-router-dom'



//import images for app ribbon
import linkImg1 from '../images/link-img1.png'
import linkImg2 from '../images/link-img2.png'


//import social icon for footer
import ficon from '../images/social-icons/facebook.png'
import ticon from '../images/social-icons/facebook.png'
import yicon from '../images/social-icons/facebook.png'
import iicon from '../images/social-icons/facebook.png'




class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer flex aic jcc">
                    <div className="block flex flex-col">
                        <h2 className="title s16 fontb color">POPULAR CATEGORIES</h2>
                        <Link to="/" className="noul noulh fontl  s14 color">Cars</Link>
                        <Link to="/" className="noul noulh fontl s14 color">Flat for rent</Link>
                        <Link to="/" className="noul noulh fontl  s14 color">Jobs</Link>
                        <Link to="/" className="noul noulh fontl  s14 color">Mobiles Phones</Link>
                    </div>
                    <div className="block flex flex-col">
                        <h2 className="title s16 fontb color">TRENDING SEARCHING</h2>
                        <Link to="/" className="noul noulh fontl  s14 color">Bikes</Link>
                        <Link to="/" className="noul noulh fontl  s14 color">Watches</Link>
                        <Link to="/" className="noul noulh fontl  s14 color">Books</Link>
                        <Link to="/" className="noul noulh fontl  s14 color">Dogs</Link>
                    </div>
                    <div className="block flex flex-col">
                        <h2 className="title s16 fontb color">ABOUT US</h2>
                        <Link to="/" className="noul noulh fontl  s14 color">About OLX Group</Link>
                        <Link to="/" className="noul noulh fontl  s14 color">OLX Blog</Link>
                        <Link to="/" className="noul noulh fontl  s14 color">Contact Us</Link>
                        <Link to="/" className="noul noulh fontl  s14 color">OLX for Businesses</Link>
                    </div>

                    <div className="block flex flex-col">
                        <h2 className="title s16 fontb color">OLX</h2>
                        <Link to="/" className="noul noulh fontl  s14 color">Help</Link>
                        <Link to="/" className="noul noulh fontl  s14 color">Sitemap</Link>
                        <Link to="/" className="noul noulh fontl  s14 color">Legal information </Link>
                        <Link to="/" className="noul noulh fontl  s14 color">Privacy information</Link>
                    </div>
                    <div className="block flex flex-col">
                        <h2 className="title s16 fontb color">FOLLOW US</h2>
                        <div className="social-icon flex">
                            <Link to="https://www.facebook.com/olxpakistan" className="noul noulh font  s14 color" target="blank"><i className="fab fa-facebook fa-lg"></i></Link>
                            <Link to="https://twitter.com/OLX_Pakistan" className="noul noulh font  s14 color" target="blank"><i className="fab fa-twitter fa-lg"></i></Link>
                            <Link to="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1" className="noul noulh font  s14 color" target="blank"><i className="fab fa-youtube fa-lg"></i></Link>
                            <Link to="https://www.instagram.com/olx.pakistan/" className="noul noulh font  s14 color" target="blank"><i className="fab fa-instagram fa-lg"></i></Link>
                        </div>
                        <div className="flex as">
                            <a href="#" className="noul bl"> <img src={linkImg1} alt="link-img-1" /></a>
                            <a href="#" className="noul  bl"> <img src={linkImg2} alt="link-img-1" /></a>
                        </div>
                    </div>
                </div>
                <div className="footerb flex aic">
                    <div className="flex aic">
                        <h2 className="font b s14">Other Countries</h2>
                        <div>
                            <Link to="/" className=" noul noulh font  s12">india</Link>
                            <Link to="/" className=" noul noulh font  s12">-south Africa</Link>
                            <Link to="/" className=" noul noulh font  s12">-Indonesia</Link>
                        </div>
                    </div>
                    <h2 className="r cfff font s14"><b>Free Classifieds in Pakistan.</b>© 2006-2020 OLX</h2>

                </div>
            </React.Fragment>
        );
    }
}

export default Footer;