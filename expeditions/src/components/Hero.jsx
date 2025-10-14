import { useEffect, useState } from "react";
import { client } from "../contentful"; 

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    client
      .getEntries({ content_type: "headerSection", limit: 1 })
      .then((response) => {
        setHero(response.items[0]);
      })
      .catch(console.error);
  }, []);

  if (!hero) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  const { headerTitle, headerSubheading, headerBackgroundImage } = hero.fields;

  // Background image import
  const imageUrl = headerBackgroundImage?.fields?.file?.url || "";
  const bgUrl = imageUrl.startsWith("http") ? imageUrl : `https:${imageUrl}`;

  return (
    <section
      className="relative w-full h-[85vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {headerTitle}
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
          {headerSubheading}
        </p>
      </div>
    </section>
  );
}
