import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import mainImg1 from '../../assets/proposal.jpeg';
import mainImg2 from '../../assets/Hana&Spencer_-01.jpg';
import mainImg3 from '../../assets/Hana&Spencer_-02.jpg';
import mainImg4 from '../../assets/Hana&Spencer_-03.jpg';
import mainImg5 from '../../assets/Hana&Spencer_-04.jpg';
import mainImg6 from '../../assets/Hana&Spencer_-05.jpg';
import mainImg7 from '../../assets/Hana&Spencer_-06.jpg';
import mainImg10 from '../../assets/Hana&Spencer_-09.jpg';
import mainImg11 from '../../assets/Hana&Spencer_-10.jpg';
import './styles/Home.css';

export default function Home() {
  const images = [mainImg1, mainImg10, mainImg11, mainImg2, mainImg7];

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
    <>
      <div className="mainHeroImg">
        <h1>We're getting married!!</h1>
        <Carousel
          infiniteLoop={true}
          useKeyboardArrows={true}
          autoPlay={true}
          dynamicHeight={false}
          emulateTouch={true}
        >
          {/* these are the photos that are hiding the faces */}
          <div className="mainImgCarousel">
            <img src={mainImg6} alt={`Hana and Spencer`}></img>
          </div>
          <div className="mainImgCarousel">
            <img src={mainImg4} alt={`Hana and Spencer`}></img>
          </div>
          <div className="mainImgCarousel">
            <img src={mainImg5} alt={`Hana and Spencer`}></img>
          </div>
          <div className="mainImgCarousel">
            <img src={mainImg3} alt={`Hana and Spencer`}></img>
          </div>
          {images.map((item) => {
            return (
              <div>
                <img src={item} alt={`Hana and Spencer`}></img>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="mainCouple">
        <h1>Cheriemae Hana Ko</h1>
        <p>&</p>
        <h1>Neil Spencer Rafada</h1>
      </div>

      <div className="mainCountdownTimer">
        <p>#Hana&Spencer</p>
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
          <Link to={`/RSVP`}>RSVP NOW</Link>
        </button>
      </div>

      <div className="mainHowWeMet mainInfo">
        <h3>How We Met</h3>
        <p>
          Hana and Spencer met back in 2021 during the wedding of Hana's sister. It was after
          Spencer's first semester back from his mission. He was invited by his friend before
          mission, Brian, to his wedding.
        </p>
      </div>
      {/* <div className="mainTheProposal mainInfo">
        <h3>The Proposal</h3>
        <p>10.24.2022</p>
        <p>
          Hana's love from lanterns grew because of the movie Tangled. With the help of
          Hana's sisters, Spencer planned how the night will be. I asked her the question as soon as
          the lantern went up. Kneeling down felt forever, but hearing her say "Yes" made it all
          worth it.
        </p>
      </div> */}
      <div className="mainMessage mainInfo">
        <p>We're so excited to celebrate this next chaper in our lives with you</p>
        <p>See you soon!</p>
      </div>

      {/* <div className="mainSecondImg">
        <img src={mainSecondImg} alt={`Hana and I`}></img>
      </div> */}
    </>
  );
}
