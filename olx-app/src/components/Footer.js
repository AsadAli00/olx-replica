import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import linkImg1 from '../images/link-img1.png'
import linkImg2 from '../images/link-img2.png'

class Footer extends Component {
    render() {
        return (
            <div className="footer flex aic jcc">
                <div className="block flex flex-col">
                    <h2 className="title s16 fontb color">POPULAR CATEGORIES</h2>
                    <Link to="/" className="noul noulh font  s14 color">Cars</Link>
                    <Link to="/" className="noul noulh font  s14 color">Flat for rent</Link>
                    <Link to="/" className="noul noulh font  s14 color">Jobs</Link>
                    <Link to="/" className="noul noulh font  s14 color">Mobiles Phones</Link>
                </div>
                <div className="block flex flex-col">
                    <h2 className="title s16 fontb color">TRENDING SEARCHING</h2>
                    <Link to="/" className="noul noulh font  s14 color">Bikes</Link>
                    <Link to="/" className="noul noulh font  s14 color">Watches</Link>
                    <Link to="/" className="noul noulh font  s14 color">Books</Link>
                    <Link to="/" className="noul noulh font  s14 color">Dogs</Link>
                </div>
                <div className="block flex flex-col">
                    <h2 className="title s16 fontb color">ABOUT US</h2>
                    <Link to="/" className="noul noulh font  s14 color">About OLX Group</Link>
                    <Link to="/" className="noul noulh font  s14 color">OLX Blog</Link>
                    <Link to="/" className="noul noulh font  s14 color">Contact Us</Link>
                    <Link to="/" className="noul noulh font  s14 color">OLX for Businesses</Link>
                </div>
                
                <div className="block flex flex-col">
                    <h2 className="title s16 fontb color">OLX</h2>
                    <Link to="/" className="noul noulh font  s14 color">Help</Link>
                    <Link to="/" className="noul noulh font  s14 color">Sitemap</Link>
                    <Link to="/" className="noul noulh font  s14 color">Legal and Privacy information </Link>
                </div>
                <div className="block flex flex-col">
                    <h2 className="title s16 fontb color">FOLLOW US</h2>
                    <div className="social-icon flex">
                    <Link to="/" className="noul noulh font  s14 color">Help</Link>
                    <Link to="/" className="noul noulh font  s14 color">Sitemap</Link>
                    <Link to="/" className="noul noulh font  s14 color">Legal </Link>
                    </div>
                    <div className="flex as">
                            <a href="#" className="noul bl"> <img src={linkImg1} alt="link-img-1" /></a>
                            <a href="#" className="noul  bl"> <img src={linkImg2} alt="link-img-1" /></a>
                        </div>
                </div>
                
                

                
            </div>
        );
    }
}

export default Footer;