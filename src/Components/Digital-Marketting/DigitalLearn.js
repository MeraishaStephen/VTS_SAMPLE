import React from "react";
import './DigitalLearn.css';  
import { FaChartLine, FaBullhorn, FaLaptop, FaCertificate, FaUsers, FaMobileAlt } from 'react-icons/fa'; 

function DigitalLearn() {
    return (
        <div id="digital-marketing-learn">
            <div className="digital-marketing-learn-container">
                <h1 className="section-title">Why Learn Digital Marketing?</h1>
                <div className="d-content-wrapper">
                    <div className="d-content-item">
                        <FaChartLine className="d-icon" />
                        <h3>Master Digital Marketing Strategies</h3>
                        <p>Start your journey with digital marketing, learning strategies for SEO, SEM, content marketing, and social media marketing.</p>
                    </div>

                    <div className="d-content-item">
                        <FaBullhorn className="d-icon" />
                        <h3>Career Opportunities</h3>
                        <p>Digital marketers are in high demand across industries such as e-commerce, entertainment, and healthcare. Build a career in a fast-growing field.</p>
                    </div>

                    <div className="d-content-item">
                        <FaLaptop className="d-icon" />
                        <h3>Work from Anywhere</h3>
                        <p>With digital marketing, you can work remotely for top companies around the world, giving you the flexibility to work from anywhere.</p>
                    </div>

                    <div className="d-content-item">
                        <FaUsers className="d-icon" />
                        <h3>Engage with Global Audiences</h3>
                        <p>Digital marketing lets you connect with a global audience, creating campaigns that can reach millions and make a significant impact.</p>
                    </div>

                    <div className="d-content-item">
    <FaMobileAlt className="d-icon" />
    <h3>Mobile Marketing</h3>
    <p>With more people browsing the web on mobile devices, learning mobile marketing will allow you to create campaigns that drive engagement on smartphones and tablets.</p>
</div>

<div className="d-content-item">
    <FaCertificate className="d-icon" />
    <h3>Certifications</h3>
    <p>Get certified in digital marketing to enhance your resume. There are various certification programs like Google Ads, HubSpot, and Facebook Blueprint to help you become a recognized expert.</p>
</div>


<div className="d-content-item">
    <FaUsers className="d-icon" />
    <h3>Social Media Marketing</h3>
    <p>Engage with your target audience using platforms like Facebook, Instagram, and Twitter. Master the art of content creation, scheduling posts, and analyzing performance metrics.</p>
</div>

<div className="d-content-item">
    <FaBullhorn className="d-icon" />
    <h3>Paid Advertising</h3>
    <p>Leverage paid advertising through Google Ads, Facebook Ads, and other platforms to drive traffic, generate leads, and increase sales for businesses.</p>
</div>


                   
                </div>
            </div>
        </div>
    );
}

export default DigitalLearn;
