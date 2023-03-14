import React, { useState, useEffect } from 'react';
import './styles/RSVP.css';
import { MdRsvp } from 'react-icons/md';
import RSVPForm from './components/RSVPForm';
import Success from './components/Success';
import toast, { Toaster } from 'react-hot-toast';

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

export default function RSVP() {
  const [submittedOk, setSubmittedOk] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  const handleSubmitted = (value, errors) => {
    if (value === true) {
      setSubmittedOk(value);
      toast.remove();
      toast('We appreciate your help and we look forward to being in touch with you!');
    } else if (value === false) {
      toast.remove();
      errors.forEach((item) => toast(item.msg));
      toast('Please fill in all of the fields.');
    }
  };
  return (
    <>
      <Toaster
        position={windowSize.innerWidth > 600 ? 'top-center' : 'bottom-center'}
        toastOptions={{ className: 'toast', duration: 5000, icon: `❤️` }}
      />
      <div className="rsvpHeader">
        <MdRsvp className="icon" />
        <h1>Help us plan for our wedding via RSVP!</h1>
      </div>
      {submittedOk ? <Success /> : <RSVPForm handleSubmitOk={handleSubmitted} toasty={toast} />}
    </>
  );
}
