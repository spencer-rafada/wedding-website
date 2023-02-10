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
      <div className="inyaContainer">
        <h1>We need your Address!</h1>
        <p>We will need your address as we send out our invitations!</p>
        <button>
          <a href={'https://ineedyouraddress.com/hanaandspencer'}>Click Me!</a>
        </button>
      </div>
    </main>
  );
}
