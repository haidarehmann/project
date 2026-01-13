import React from 'react';
import "./link.css";
import bbq11 from './images/bbq11.avif';
import bbq16 from './images/bbq16.jpg';
import bbq20 from './images/bbq20.jpg';
import food6 from './images/food6.jpg';
import food7 from './images/food7.jpg';
import food2 from './images/food2.webp';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdCopyright } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Links = () => {
    return (
        <div className='quick'>
            <div className='info1'>
                <img src={food2} alt="bbq11" />
            </div>
            <div className='info2'>
                <img src={bbq16} alt="bbq12" />
            </div>
            <div className='info3'>
                <img src={bbq20} alt="bbq13" />
            </div>
            <div className="instagram1">
                    <FaInstagram />
                </div>
            <div className='info4'>
                <img src={food6} alt="bbq14" />
            </div>
            <div className='info5'>
                <img src={bbq11} alt="bbq15" />
            </div>
            <div className='info6'>
                <img src={food7} alt="bbq16" />
            </div>
            <h2 className='touch1'>Get In Touch</h2>
            <div className='sign1'>
                <CiLocationOn />
                <h4 className='adress'>123 Street , New York , USA</h4>
            </div>
            <div className='sign2'>
                <MdOutlineMailOutline />
                <h4 className='email1'>info@example.com</h4>
            </div>
            <div className='sign3'>
                <IoCallOutline />
                <h4 className='call'>+012 34567890</h4>
            </div>
            <div className="icons">
                <div className="facebook">
                    <FaFacebookF />
                </div>
                <div className="linkdin">
                    <FaLinkedinIn />
                </div>
                <div className="twitter">
                    <FaTwitter />
                </div>
                <div className="instagram">
                    <FaInstagram />
                </div>
            </div>
            <h2 className='touch2'>Quick Links</h2>
            <div className='sign4'>
                <IoIosArrowRoundForward />
                <h4 className='home1'>Home</h4>
            </div>
            <div className='sign5'>
                <IoIosArrowRoundForward />
                <h4 className='home2'>About Us</h4>
            </div>
            <div className='sign6'>
                <IoIosArrowRoundForward />
                <h4 className='home3'>Food Menu</h4>
            </div>
            <div className='sign7'>
                <IoIosArrowRoundForward />
                <h4 className='home4'>Our Chefs</h4>
            </div>
            <div className='sign8'>
                <IoIosArrowRoundForward />
                <h4 className='home5'>Latest Blog</h4>
            </div>
            <div className='sign9'>
                <IoIosArrowRoundForward />
                <h4 className='home6'>Contact Us</h4>
            </div>
            <h2 className='touch3'>More Links</h2>
            <div className='sign10'>
                <IoIosArrowRoundForward />
                <h4 className='home7'>Home</h4>
            </div>
            <div className='sign11'>
                <IoIosArrowRoundForward />
                <h4 className='home8'>About Us</h4>
            </div>
            <div className='sign12'>
                <IoIosArrowRoundForward />
                <h4 className='home9'>Food Menu</h4>
            </div>
            <div className='sign13'>
                <IoIosArrowRoundForward />
                <h4 className='home10'>Our Chefs</h4>
            </div>
            <div className='sign14'>
                <IoIosArrowRoundForward />
                <h4 className='home11'>Latest Blog</h4>
            </div>
            <div className='sign15'>
                <IoIosArrowRoundForward />
                <h4 className='home12'>Contact Us</h4>
            </div>
            <div className='table'>
                <h3 className='total1'>Newsletter</h3>
                <h4 className='total2'>SUBSCRIBE OUR NEWSLETTER</h4>
                <p className='total3'>Don’t forget to follow our new
                    channel for fresh updates and exciting content</p>
                <div className='form'>
                    <input type="email" placeholder="Your Email"></input>
                    <button className=' signBtn'>Signup</button>
                </div>
                <div className='mouse'>
                    <div className='copy'>
                        <MdCopyright />
                    </div>
                    <div className="footer">
                        <h3 className="wire1">Your Site Name.</h3>
                        <h3 className="wire2">All Rights Reserved.</h3>
                        <h2 className="wire3">Designed By HTML Codex</h2>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Links;