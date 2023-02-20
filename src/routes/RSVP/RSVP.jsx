import React from 'react';
import './styles/RSVP.css';
import { MdRsvp } from 'react-icons/md';
import RSVPForm from './components/RSVPForm';

export default function RSVP() {
  return (
    <>
      <div className="rsvpIframe">
        <div className="rsvpHeader">
          <MdRsvp className="icon" />
          <h1>Help us plan for our wedding via RSVP!</h1>
        </div>
        <div className="inyaContainer">
          <h1>Step 1: Fill this RSVP form</h1>
          <p>
            This RSVP will help us determine the people who will come and be sending invites to.
            Invitations will be sent out soon!
          </p>
          <button>
            <a href={`https://cheriemaeandspencer.rsvpify.com`} target={`_blank`}>
              Click Me!
            </a>
          </button>
        </div>
      </div>
      <div className="inyaContainer">
        <h1>Step 2: We need your Address!</h1>
        <p>We will need your address as we send out our invitations!</p>
        <button>
          <a href={'https://ineedyouraddress.com/hanaandspencer'} target={`_blank`}>
            Click Me!
          </a>
        </button>
      </div>
      <RSVPForm />
    </>
  );
}
