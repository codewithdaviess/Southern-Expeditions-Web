// src/pages/Contact.jsx
import aboutHero from "../assets/tours-hero.jpg";

export default function Contact() {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${aboutHero})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          About Zambia Expeditions
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
          Your trusted partner in creating unforgettable African adventures since 2010
        </p>
      </div>
    </section>
  );
}