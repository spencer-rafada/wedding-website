import React from 'react';
import './styles/Temple.css';
import ProvoCity from '../../assets/provo-city-center-temple.jpeg';

export default function Temple() {
  return (
    <main>
      <div className="mainTemple">
        <img src={ProvoCity} alt={`Insert Temple Picture Here`}></img>
        <div>

        <h1>Provo City Center Temple</h1>
        <p>July 21, 2023 @ 9:00 AM</p>
        <p>We will be getting sealed at the Provo City Center Temple!</p>
        <p>We have reserved 50 seats for the temple sealing.</p>
        <p>If you want to be part of our temple sealing, message us for availability!</p>
        <p>We look forward to seeing you all for the temple exit!</p>
        </div>
      </div>
    </main>
  );
}
