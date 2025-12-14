import React, { useEffect, useState } from "react";
import { client } from "../lib/contentful";

function DestinationGrid() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "destination" })
      .then((response) => {
        const data = response.items.map((item) => ({
          name: item.fields.name,
          country: item.fields.country,
          size: item.fields.size || "small",
          imageUrl: item.fields.destinationImage?.fields?.file?.url || "",
        }));

        setDestinations(data);
      })
      .catch(console.error);
  }, []);

  if (!destinations.length) return <div>Loading...</div>;

  return (
    <section className="py-16 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-xl lg:text-2xl font-bold text-dark">
            Explore Our Destinations
          </h2>
          <p className="mt-2 text-gray-600">
            Discover breathtaking places across Africa
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className={`group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition
                ${dest.size === "large" ? "md:row-span-2" : "row-span-1"}`}
            >
              {/* Image */}
              <img
                src={`https:${dest.imageUrl}`}
                alt={dest.name}
                className="w-full h-full object-cover"
              />

              {/*Mobile overlay on hover*/}
              <div
                className="absolute bottom-0 left-0 w-full
                              bg-gradient-to-t from-black/60 via-black/30 to-transparent
                              p-3 lg:hidden"
              >
                <h3 className="text-white text-lg font-semibold">
                  {dest.name}
                </h3>
                <p className="text-white/80 text-sm">{dest.country}</p>
              </div>
                {/* Desktp Overlay on hover */}
              <div
                className="hidden lg:flex absolute inset-0 bg-black/50
                              flex-col items-center justify-center text-center
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4"
              >
                <h3 className="text-white text-xl font-semibold">
                  {dest.name}
                </h3>
                <p className="text-white/80 text-sm mt-1">{dest.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestinationGrid;
