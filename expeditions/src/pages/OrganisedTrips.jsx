// src/pages/OrganizedTrips.jsx
import toursHero from "../assets/tours-hero.jpg";

export default function OrganizedTrips() {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${toursHero})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Our Safari Tours
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
          Discover our curated collection of authentic Zambian safari experiences
        </p>
      </div>
    </section>
  );
}