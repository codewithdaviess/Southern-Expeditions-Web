import React, { useEffect, useState } from "react";
import { client } from "../lib/contentful";

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "activity",
        include: 2,
      })
      .then((response) => {
        const data = response.items.map((item) => {
          const company = item.fields.offeredBy;

          return {
            id: item.sys.id,
            title: item.fields.title,
            description: item.fields.description,
            destination: item.fields.destination,
            price: item.fields.price,
            imageUrl: item.fields.image?.fields?.file?.url || "",
            companyName: company?.fields?.name || "",
            companyLogo: company?.fields?.logo?.fields?.file?.url || "",
            isUs: company?.fields?.isUs || false,
          };
        });

        setActivities(data);
      })
      .catch(console.error);
  }, []);

  if (!activities.length) return <div>Loading...</div>;

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-xl lg:text-2xl font-bold text-dark">
            Available Activities
          </h2>
          <p className="mt-2 text-gray-600">
            Explore our curated list of activities and experiences during your
            stay
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white shadow-lg rounded-2xl
                         flex flex-col 
                         group transform transition-transform duration-300 ease-in-out
                         hover:shadow-2xl"
            >
              {/* Image container */}
              <div className="p-6  overflow-hidden rounded-xl">
                <div className="w-full h-60 overflow-hidden rounded-lg">
                  <img
                    src={`https:${activity.imageUrl}?w=600&h=400&fit=fill&fm=webp&q=80`}
                    alt={activity.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg
                               transform transition-transform duration-500 ease-in-out
                               group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-6 flex flex-col justify-between flex-1">
                <div>
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-dark mb-2">
                    {activity.title}
                  </h3>

                  {/* Description */}
                  {activity.description && (
                    <p className="text-gray-600 text-sm mb-2">
                      {activity.description}
                    </p>
                  )}
                </div>

                {/* Activity Footer */}
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-3">
                    {/* Company Logo */}
                    {activity.companyLogo && (
                      <img
                        src={`https:${activity.companyLogo}?w=40&h=40&fit=fill&fm=webp&q=80`}
                        alt={activity.companyName}
                        className="w-8 h-8 rounded-full object-contain"
                        loading="lazy"
                      />
                    )}

                    {/* Offered By + Company Name */}
                    <div className="flex flex-col leading-tight">
                      <span className="text-xs font-regular text-[#829442]">
                        Offered by
                      </span>
                      <span className="text-sm text-gray-700 font-medium">
                        {activity.companyName}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <span className="font-semibold text-xl text-black">
                    ${activity.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;
