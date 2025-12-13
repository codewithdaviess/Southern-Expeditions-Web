import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import DestinationGrid from "../components/DestinationGrid";

function Home() {
  return (
    <Layout>
      <Hero />
      <DestinationGrid />
    </Layout>
  );
}

export default Home;
