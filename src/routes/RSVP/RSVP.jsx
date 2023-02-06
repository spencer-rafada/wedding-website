import React from 'react';
import './styles/RSVP.css';

export default function RSVP() {
  return (
    <main>
      <div className="rsvpIframe">
        <h1>Help us plan for our wedding via RSVP!</h1>
        <p>
          This RSVP will help us determine the people who will come and be sending invites to.
          Invitations will be sent out soon!
        </p>
        <iframe src={`https://cheriemaeandspencer.rsvpify.com`}></iframe>
      </div>
    </main>
  );
}
