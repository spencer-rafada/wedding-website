import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mainImg from '../../assets/proposal.jpeg';
import mainSecondImg from '../../assets/mainSecondImg.jpeg';
import './styles/Home.css';

export default function Home() {
  const calculateTimeLeft = () => {
    let timeLeft = {};
    const difference = +new Date('2023-07-21T10:00:00-07:00') - +new Date();

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <main>
      <div className="mainHeroImg">
        <h1>We're getting married!!</h1>
        <img src={mainImg} alt={`Main Image`}></img>
      </div>
      <div className="mainCouple">
        <h1>Cheriemae Hana Ko</h1>
        <p>&</p>
        <h1>Neil Spencer Rafada</h1>
      </div>

      <div className="mainCountdownTimer">
        <p>#HanaandSpencer</p>
        <h2>July 21, 2023</h2>
        <p>Temple Sealing: Provo City Center Temple @ 9 am</p>
        <p>
          Wedding Reception: <i>RSVP for details</i>
        </p>
        <div className="mainTimer">
          {timeLeft.days > 0 ? <span>{timeLeft.days} Days</span> : null}
          {timeLeft.hours > 0 ? <span>{timeLeft.hours} Hours</span> : null}
          {timeLeft.minutes > 0 ? <span>{timeLeft.minutes} Minutes</span> : null}
          {timeLeft.seconds > 0 ? <span>{timeLeft.seconds} Seconds</span> : null}
        </div>
      </div>

      <div className="mainRSVPButton">
        <button>
          <Link to={`/RSVP`}>RSVP</Link>
        </button>
      </div>

      <div className="mainHowWeMet">
        <h3>How We Met</h3>
        <p>Hi</p>
      </div>
      <div className="mainTheProposal">
        <h3>The Proposal</h3>
        <p>10.24.2022</p>
        <p>Hello</p>
      </div>
      <div className="mainMessage">
        <p>We're so excited to celebrate this next chaper in our lives with you</p>
        <p>See you soon!</p>
      </div>

      <div className="mainSecondImg">
        <img src={mainSecondImg} alt={`Hana and I`}></img>
      </div>
    </main>
  );
}
