/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ toast }) {
  return (
    <>
      <header>
        <h1>Cheriemae Hana & Neil Spencer</h1>
        <nav>
          <ul>
            <li onClick={() => toast('home')}>
              <Link to={`/`}>Home</Link>
            </li>
            <li onClick={() => toast('temple')}>
              <Link to={`/temple`}>Temple</Link>
            </li>
            {/* <li onClick={()=>toast("hi")}>
            <Link to={`/reception`}>Reception</Link>
            </li>
            <li onClick={()=>toast("hi")}>
            <Link to={`/schedule`}>Schedule</Link>
            </li>
            <li onClick={()=>toast("hi")}>
            <Link to={`/photos`}>Photos</Link>
          </li> */}
            <li onClick={() => toast('registry')}>
              <Link to={`/registry`}>Registry</Link>
            </li>
            <li onClick={() => toast('rsvp')}>
              <Link to={`/RSVP`}>RSVP</Link>
            </li>
            {/* <li onClick={()=>toast("hi")}>
            <Link to={`/FAQ`}>
            FAQ<span className="FAQs">s</span>
            </Link>
          </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}
