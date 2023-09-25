import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Showcase from './components/ShowCase';
import Footer from './components/Footer';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
export default function App() {
  return (
 <div> 
   <Nav />
  <Home />
   <Showcase />
   <Footer />
 </div>
  );}
