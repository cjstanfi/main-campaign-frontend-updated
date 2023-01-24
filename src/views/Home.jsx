import React from "react";
import PlansDesigned from "../components/landing/PlansDesigned";
import Marketing from "../components/landing/Marketing";
import Scale from "../components/landing/Scale";
import Footer from "../components/landing/Footer";
import LandingHeader from "../components/landing/LandingHeader";

const Home = () => {
  return (
    <>
      <LandingHeader/>
      <Marketing />
      <PlansDesigned />
      <Scale />
      <Footer />
    </>
  );
};

export default Home;
