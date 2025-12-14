import React, { useState } from "react";
import { activities } from "../data/activities";

// Generate package including required + selected activities
function generatePackage(selectedIds) {
  const requiredActivities = activities.filter((a) => a.required);
  const selectedActivities = activities.filter((a) =>
    selectedIds.includes(a.id)
  );

  // Combine required + selected, avoid duplicates
  const packageActivities = [
    ...requiredActivities,
    ...selectedActivities.filter(
      (a) => !requiredActivities.some((r) => r.id === a.id)
    ),
  ];

  return packageActivities;
}

export default function TailorMadePackage() {
  const [selectedIds, setSelectedIds] = useState([]);
  const [generatedPackage, setGeneratedPackage] = useState([]);

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleGenerate = () => {
    const pkg = generatePackage(selectedIds);
    setGeneratedPackage(pkg);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          Create Your Tailor-Made Itinerary
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={`p-4 rounded-xl border cursor-pointer ${
                selectedIds.includes(activity.id)
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200"
              }`}
              onClick={() => handleSelect(activity.id)}
            >
              <h3 className="font-semibold">{activity.title}</h3>
              <p className="text-sm text-gray-600">{activity.time}</p>
              {activity.required && (
                <p className="text-xs text-green-600 font-semibold">Required</p>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleGenerate}
          className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Generate Package
        </button>

        {generatedPackage.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Your Package:</h3>
            <ul className="list-disc list-inside">
              {generatedPackage.map((a) => (
                <li key={a.id}>
                  {a.title} ({a.time})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
