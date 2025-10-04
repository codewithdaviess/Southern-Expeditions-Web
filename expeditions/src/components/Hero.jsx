import heroImage from "../assets/background.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Static Background */}
      <div
        className="absolute bg-fixed flex items-center justify-center inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Discover Victoria Falls
          </h1>
          <p className="text-gray-200 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-8">
            Plan your perfect adventure with activities, destinations, and a smart itinerary planner.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}