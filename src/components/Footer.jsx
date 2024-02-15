import React from "react";
import "./Footer.css";
import {BsArrowRightCircleFill } from "react-icons/bs";
import { FaInstagramSquare,FaTwitter,FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <ul className="links">
              <h4>Info</h4>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Compressions</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Collection</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <ul className="links">
              <h4>Explore</h4>
              <li>
                <a href="#">Free Designs</a>
              </li>
              <li>
                <a href="#">Latest Designs</a>
              </li>
              <li>
                <a href="#">Themes</a>
              </li>
              <li>
                <a href="#">Popular Designs</a>
              </li>
              <li>
                <a href="#">Art Skills</a>
              </li>
              <li>
                <a href="#">New Uploads</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <ul className="links">
              <h4>Legal</h4>
              <li>
                <a href="#">Customer Agreement</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">GDPR</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Media Kit</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter</p>
            <form className="foortinput" action="#">
              <input type="text" placeholder="Your email" required />
              <button type="submit">{<BsArrowRightCircleFill />}</button>
            </form>
          </div>
        </div>
       <div className="footerbuild">
           <div>
            <p>© 2024 Green. Designed by Nitin Kondhari</p>
           </div>
           <div className="footerlogo">
           <div>{<FaTwitter/>}</div>
           <div>{<FaFacebook/>}</div>
           <div>{< FaInstagramSquare/>}</div>
           </div>
       </div>
      </div>
    </div>
  );
};

export default Footer;
