import React from "react";
import Hero from "../components/landingPage/Hero";
import Services from "../components/landingPage/Services";
import RentBanner from "../components/landingPage/RentBanner";
import BookingInfo from "../components/landingPage/BookingInfo";
import Newslater from "../components/landingPage/Newslater";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <RentBanner />
      <BookingInfo />
      <Newslater />
    </div>
  );
};

export default LandingPage;
