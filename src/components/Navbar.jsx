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
            <li>
              <Link to={`/`} onClick={() => toast('home')}>
                Home
              </Link>
            </li>
            <li>
              <Link to={`/temple`} onClick={() => toast('temple')}>
                Temple
              </Link>
            </li>
            {/* <li>
            <Link to={`/reception`} onClick={()=>toast("hi")}>Reception</Link>
            </li>
            <li>
            <Link to={`/schedule`} onClick={()=>toast("hi")}>Schedule</Link>
            </li>
            <li>
            <Link to={`/photos`} onClick={()=>toast("hi")}>Photos</Link>
          </li> */}
            <li>
              <Link to={`/registry`} onClick={() => toast('registry')}>
                Registry
              </Link>
            </li>
            <li>
              <Link to={`/RSVP`} onClick={() => toast('rsvp')}>
                RSVP
              </Link>
            </li>
            <li>
              <Link to={`/FAQ`} onClick={() => toast('faq')}>
                FAQ<span className="FAQs">s</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
