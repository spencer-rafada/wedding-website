import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'normalize.css';
import '../styles/styles.css';

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

const messages = {
  home: 'We want to celebrate the next chapter of our lives with you! Go to RSVP and help us plan for our special day!',
  temple:
    'We only have 50 spots! If you want to witness the sealing inside, let us know! Feel free to wait for the temple exit!',
  registry: 'We appreciate you all for the gifts!',
  rsvp: 'Help us plan for our wedding by filling out the RSVP and INeedYourAddress!',
  faq: 'Here is a list of Frequently Asked Questions. You can submit your own question and we will respond with an answer!'
};

export default function Root() {
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

  const notify = (category) => {
    var message;
    if (category === 'home') {
      message = messages.home;
    } else if (category === 'temple') {
      message = messages.temple;
    } else if (category === 'registry') {
      message = messages.registry;
    } else if (category === 'rsvp') {
      message = messages.rsvp;
    } else if (category === 'faq') {
      message = messages.faq;
    }
    toast.remove();
    toast(message);
  };
  return (
    <>
      <Toaster
        position={windowSize.innerWidth > 600 ? 'top-center' : 'bottom-center'}
        toastOptions={{ className: 'toast', duration: 5000, icon: `❤️` }}
      />
      <Navbar toast={notify} />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
