import React from 'react';
import logolight from '../../public/images/logo-light.png';

function Footer() {
    return (
  <footer id="main-footer" className="py-2">
            <div className="container">
                <div className="footer-logo-section">
        <img src={logolight} alt="NewsGrid" />
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>

                <div className="footer-newsletter-section">
                    <h3>Email Newsletter</h3>
          <form>
 <input type="email" placeholder="Enter Email..." />
    <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>
                <div className="footer-links-section">
                    <ul>
                        <li><a href="#">Help & Support</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-join-section">
                    <h2>Join Our Club</h2>
                    <a href="#" className="btn btn-secondary">Join Now</a>
                </div>
              <div className="footer-copyright-section">
                    <p>Copyright &copy; 2019, All Rights Reserved</p>
         </div>
    </div>
        </footer>
    );}
export default Footer;
