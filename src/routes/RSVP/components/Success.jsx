import React from 'react'
import ThankYouImage from '../../../assets/Hana&Spencer_-03.jpg'

export default function Success() {
  return (
    <>
      <div className='rsvpSuccessContainer'>
        <h1>RSVP Confirmed</h1>
        <p>We appreciate you and we look forward to being in contact with you!</p>
        <img src={ThankYouImage} alt='image of Hana and Spencer'></img>
      </div>
    </>
  )
}
