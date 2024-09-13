import React from "react";
import Hero from "../components/landingPage/Hero";
import Services from "../components/landingPage/Services";
import RentBanner from "../components/landingPage/RentBanner";
import BookingInfo from "../components/landingPage/BookingInfo";
import Newslater from "../components/landingPage/Newslater";
import Testimonials from "../components/landingPage/Testimonials";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <RentBanner />
      <BookingInfo />
      <Testimonials />
      <Newslater />
    </div>
  );
};

export default LandingPage;
