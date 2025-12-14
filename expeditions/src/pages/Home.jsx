import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import DestinationGrid from "../components/DestinationGrid";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <Layout>
      <Hero />
      <DestinationGrid />
      <AboutUs />
    </Layout>
  );
}

export default Home;
