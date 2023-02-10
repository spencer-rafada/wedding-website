import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <h1>Cheriemae Hana & Neil Spencer</h1>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/temple`}>Temple</Link>
          </li>
          {/* <li>
            <Link to={`/reception`}>Reception</Link>
          </li>
          <li>
            <Link to={`/schedule`}>Schedule</Link>
          </li>
          <li>
            <Link to={`/photos`}>Photos</Link>
          </li> */}
          <li>
            <Link to={`/registry`}>Registry</Link>
          </li>
          <li>
            <Link to={`/RSVP`}>RSVP</Link>
          </li>
          <li>
            <Link to={`/FAQ`}>
              FAQ<span className="FAQs">s</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
