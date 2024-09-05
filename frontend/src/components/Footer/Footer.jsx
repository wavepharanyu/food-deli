import React from 'react'
import './Footer.css'
import { assets } from "../../assets/assets"

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam dicta natus obcaecati neque, ipsum unde esse, sit culpa consectetur suscipit quas tempora, praesentium ut error dolorum expedita? Ipsum, praesentium.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+66-8-1234-5678</li>
                    <li>contact@fooddeli.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © Fooddeli.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer