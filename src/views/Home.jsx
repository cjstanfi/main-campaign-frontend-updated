import React from "react";
import PlansDesigned from "../components/landing/PlansDesigned";
import Marketing from "../components/landing/Marketing";
import Scale from "../components/landing/Scale";
import Footer from "../components/landing/Footer";
import LandingHeader from "../components/landing/LandingHeader";
import Hero from "../components/landing/Hero";
import RevenueGrow from "../components/landing/RevenueGrow";
import BusinessSlider from "../components/landing/BusinessSlider";

const Home = () => {
  return (
    <>
      <LandingHeader />
      <Hero />
      <RevenueGrow />
      <Marketing />
      <BusinessSlider />
      <PlansDesigned />
      <Scale />
      <Footer />
    </>
  );
};

export default Home;
