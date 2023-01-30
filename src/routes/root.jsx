import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import 'normalize.css';
import '../styles/styles.css';
import FlowerHeader from '../assets/top-header-on-white.jpg';

export default function Root() {
  return (
    <>
      <Navbar />
      {/* <div className='flowerHeader'>
        <img src={FlowerHeader} alt={`Flower Header`}></img>
      </div> */}
      <Outlet />
      {/* <div className='flowerFooter'>
        <img src={FlowerHeader} alt={`Flower Footer`}></img>
      </div> */}
    </>
  );
}
