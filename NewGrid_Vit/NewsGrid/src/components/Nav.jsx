import React from 'react';
import logo from '../../public/images/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
export default function NavBar() {return (
    <nav id="main-nav">
      <div className="container">
   <img src={logo} alt="NewsGrid" className="logo" />
  <div className="social">
     <SocialLink link="http://facebook.com" icon={<FaFacebook className="fab fa-facebook fa-2x" />} />
    <SocialLink link="http://twitter.com" icon={<FaTwitter className="fab fa-twitter fa-2x" />} />
     <SocialLink link="http://instagram.com" icon={<FaInstagram className="fab fa-instagram fa-2x" />} />
    <SocialLink link="http://youtube.com" icon={<FaYoutube className="fab fa-youtube fa-2x" />} />
        </div>
        <ul>
     <NavItem link="index.html" text="Home" />
      <NavItem link="about.html" text="About" />
</ul>
  </div>
    </nav>);}

function SocialLink({ link, icon }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>)}

function NavItem({ link, text }) {
  return (
    <li>
  <a href={link}>{text}</a>
    </li>)}
