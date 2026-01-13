import React from 'react';
import "./latest.css"
import bbq19 from './images/bbq19.jpg';
import bbq12 from './images/bbq12.webp';
import bbq21 from './images/bbq21.jpg';


const Latest = () => {
    return (
        <div className='sed'>
            <h3 className='sea1'>OUR BLOG</h3>
            <h1 className='sea2'>Latest Articles</h1>
            <h1 className='sea3'>From Food Blog</h1>
            <div className="color1">
                <img src={bbq19} alt="food5" />

                <div className="date1">
                     <span className="line1">|</span>
                    <p className='week1'>Sed amet tempor sit, kasd sea lorem dolo</p>
                    <span className="day1">01</span>
                    <span className="month1">JANUARY</span>
                    <span className="year1">2045</span>
                </div>
            </div>


            <div className="color2">
                <img src={bbq12} alt="food6" />

                <div className="date2">
                    <span className="line2">|</span>
                    <p className='week2'>Sed amet tempor sit, kasd sea lorem dolo</p>
                    <span className="day2">01</span>
                    <span className="month2">JANUARY</span>
                    <span className="year2">2045</span>
                </div>
            </div>


            <div className="color3">
                <img src={bbq21} alt="food6" />

                <div className="date3">
                       <span className="line3">|</span>
                    <p className='week3'>Sed amet tempor sit, kasd sea lorem dolo</p>
                    <span className="day3">01</span>
                    <span className="month3">JANUARY</span>
                    <span className="year3">2045</span>
                </div>
            </div>

        </div>
    );
};
export default Latest;