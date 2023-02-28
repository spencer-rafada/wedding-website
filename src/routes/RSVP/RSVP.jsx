import React from 'react';
import './styles/RSVP.css';
import { MdRsvp } from 'react-icons/md';
import RSVPForm from './components/RSVPForm';

export default function RSVP() {
  return (
    <>
      <div className="rsvpHeader">
        <MdRsvp className="icon" />
        <h1>Help us plan for our wedding via RSVP!</h1>
      </div>
      <RSVPForm />
    </>
  );
}
