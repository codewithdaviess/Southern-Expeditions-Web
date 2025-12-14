// components/Activities.jsx
import React from "react";
import { activities } from "../data/activities";

export default function Activities() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-xl lg:text-2xl font-bold text-dark">
            Available Activities
          </h2>
          <p className="mt-2 text-gray-600">
            Explore our curated list of activities and experiences during your
            stay
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Destination */}
                <span className="text-sm text-gray-500">
                  {activity.destination}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold mt-1">{activity.title}</h3>

                {/* Activity type */}
                <span className="text-sm text-gray-600 mt-1">
                  {activity.type}
                </span>
              </div>

              {/* Offered by / Price */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-700">
                  {activity.offeredBy}
                </span>
                <span className="font-semibold text-lg text-black">
                  ${activity.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
