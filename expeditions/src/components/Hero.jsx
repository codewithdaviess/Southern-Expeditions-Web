import React, { useEffect, useState } from 'react';
import { client } from '../lib/contentful';

function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    client.getEntries({ content_type: 'hero' })
      .then((response) => {
        setHero(response.items[0].fields);
      })
      .catch(console.error);
  }, []);

  if (!hero) return <div>Loading...</div>;

  const bgUrl = hero.backgroundImage?.fields?.file?.url;

  return (
    <div
      className="relative w-full h-[600px] flex items-center text-left text-white"
      style={{
        backgroundImage: bgUrl ? `url(${bgUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content container with responsive max width */}
      <div className="relative z-10 w-full lg:max-w-6xl mx-auto px-6 lg:px-4">
        <h1 className="text-4xl md:text-5xl font-bold">{hero.title}</h1>
        <p className="mt-4 text-md md:text-lg">{hero.subtitle}</p>
        {hero.ctaText && (
          <a
            href={hero.ctaLink}
            className="inline-block mt-6 text-md p-4 font-medium text-white bg-[#829442] hover:text-white rounded-xl px-4 shadow-lg"
          >
            {hero.ctaText}
          </a>
        )}
      </div>
    </div>
  );
}

export default Hero;
