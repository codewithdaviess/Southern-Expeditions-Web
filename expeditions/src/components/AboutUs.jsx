import React, { useEffect, useState } from "react";
import { Leaf, Target, Eye, Handshake } from "lucide-react";
import { client } from "../lib/contentful";

const iconMap = {
  leaf: Leaf,
  target: Target,
  eye: Eye,
  handshake: Handshake,
};

function AboutUs() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "aboutCard",
      })
      .then((response) => {
        setCards(response.items);
      });
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">About Us</h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Learn more about who we are, what we do, and what drives us forward.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((item) => {
            const Icon = iconMap[item.fields.icon];

            return (
              <div
                key={item.sys.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#829442] shadow-lg">
                    {Icon && (
                      <Icon
                        size={28}
                        strokeWidth={1.5}
                        className="text-white"
                      />
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {item.fields.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.fields.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
