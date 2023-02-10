import React from 'react';
import './styles/Registry.css';
import ZolaLogo from '../../assets/zola-company-logo.png';

export default function Registry() {
  return (
    <main>
      <div className="rsvpContainer">
        <h1>We are registered on Zola!</h1>
        <p>We made it easier for you to gift us in different stores using one platform!</p>
        <div className="shop">
          <a href={`https://www.zola.com/registry/spencerandhana`}>
            <img src={ZolaLogo} alt={`Zola Logo`}></img>
          </a>
        </div>
      </div>
    </main>
  );
}
