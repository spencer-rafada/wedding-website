import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <nav>
        <h1>Cheriemae Hana & Neil Spencer</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/temple`}>Temple</Link>
            </li>
            <li>
              <Link to={`/reception`}>Reception</Link>
            </li>
            <li>
              <Link to={`/schedule`}>Schedule</Link>
            </li>
            <li>
              <Link to={`/photos`}>Photos</Link>
            </li>
            <li>
              <Link to={`/registry`}>Registry</Link>
            </li>
            <li>
              <Link to={`/RSVP`}>RSVP</Link>
            </li>
          </ul>
        </nav>
      </nav>
      <Outlet />
    </>
  );
}
