import React from 'react';
import './styles/Registry.css';
import { AiFillGift } from 'react-icons/ai';
import ZolaLogo from '../../assets/zola-company-logo.png';

export default function Registry() {
  return (
    <div className="rsvpContainer">
      <div className="rsvpHeader">
        <AiFillGift className="icon" />
        <h1>We are registered on Zola!</h1>
      </div>
      <p>We made it easier for you to gift us in different stores using one platform!</p>
      <div className="shop">
        <a href={`https://www.zola.com/registry/spencerandhana`}>
          <img src={ZolaLogo} alt={`Zola Logo`}></img>
        </a>
      </div>
    </div>
  );
}
