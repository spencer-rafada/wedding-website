import React from 'react';
import { Link } from 'react-router-dom';

export default function Reception() {
  return (
    <main>
      <div>
        <h1>Maplewood Events</h1>
        <img src={``} alt={`Put image or iframe here`}></img>
        <p>
          We only have limited seats for the venue so we appreciate you helping us with the planning
          through <Link to={`/RSVP`}>RSVP</Link>.
        </p>
        <p>
          We love you all and we look forward to celebrating this next chapter of our lives with
          you. <i>We love you too Chef!</i>
        </p>
      </div>
    </main>
  );
}
