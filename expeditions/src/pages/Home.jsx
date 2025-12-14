import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import DestinationGrid from "../components/DestinationGrid";
import AboutUs from "../components/AboutUs";
import Activities from "../components/Activities";
import TailorMadePackage from "../components/TailorMadePackage";

function Home() {
  return (
    <Layout>
      <Hero />
      <DestinationGrid />
      <AboutUs />
      <Activities />
    </Layout>
  );
}

export default Home;
