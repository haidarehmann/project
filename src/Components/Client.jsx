import React from 'react';
import "./client.css";
import customers from './images/customers.png';
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import client3 from './images/client3.jpg';


const Client = () => {
    return (
        <div className='say'>
            <div className='book'>
                <img src={customers} alt="customers" />
            </div>
            <h2 className='reviews'>TESTIMONIAL</h2>
            <h1 className='honest1'>Our Client</h1>
            <h1 className='honest2'>Say</h1>

            <div className='time'>
                <div className='quote'>
                    <FaQuoteLeft />
                </div>
                <p>
                    The food was absolutely amazing — every bitewas full of rich flavor and freshness.
                    You can really tell that great care goes into selecting ingredients and preparing
                    each dish. Everything was perfectly cooked and beautifully presented.
                    I’ll definitely be coming back again and recommending it to my friends
                </p>
            </div>
            <div className='best'>
                <img src={client3} alt="client3" />
                </div>
                <h2 className='grace1'>Client Name</h2>
                <h4 className='grace2'>PROFESSION</h4>
            <div className='arrow1'>
                <IoIosArrowRoundForward />
            </div>
            <div className='arrow2'>
                <IoIosArrowRoundBack />
            </div>
        </div>
    );
};

export default Client;