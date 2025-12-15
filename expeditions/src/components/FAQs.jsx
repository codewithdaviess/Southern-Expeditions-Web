import React, { useState, useRef, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import toursImg from "../assets/tours.png"; // Adjust path if needed

// FAQ data
const faqs = [
  {
    id: 0,
    question: "What tours are available around Victoria Falls?",
    answer: "We offer guided tours, adventure activities like bungee jumping, river cruises, and day trips to nearby national parks.",
  },
  {
    id: 1,
    question: "How do I book a trip?",
    answer: "You can book online through our website or contact our local travel agents directly for personalized packages.",
  },
  {
    id: 2,
    question: "Are the tours safe?",
    answer: "Yes, all our tours are operated by licensed guides with strict safety protocols in place.",
  },
  {
    id: 3,
    question: "What should I pack for Victoria Falls?",
    answer: "We recommend lightweight clothing, comfortable shoes, swimwear, a hat, sunscreen, and a raincoat for the mist.",
  },
];

const Timeline = ({ isMobile }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-xl flex justify-center shadow-md overflow-hidden">
      <img
        src={toursImg}
        alt="Tours"
        className={`w-full max-w-full object-cover rounded-xl ${isMobile ? "h-48" : "h-72"}`}
      />
    </div>
  );
};

const FAQItem = ({ faq, isActive, onClick }) => {
  const ref = useRef(null);
  const navOffset = 120;

  useEffect(() => {
    if (isActive && ref.current) {
      if (window.innerWidth < 1024) {
        const top = ref.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: top - navOffset,
          behavior: "smooth",
        });
      }
    }
  }, [isActive]);

  return (
    <div ref={ref} onClick={onClick} className="cursor-pointer py-6 border-b border-gray-300 last:border-b-0">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{faq.question}</h3>
        {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-3"
        >
          <p className="text-sm text-gray-500">{faq.answer}</p>

          {/* On small screens, show only the tours image */}
          <div className="mt-4 lg:hidden">
            <Timeline isMobile={true} />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const FAQs = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-xl lg:text-2xl font-bold text-dark">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600">
            Answers to common questions for travelers visiting Zambia and Zimbabwe.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* LEFT: FAQs */}
          <div className="flex-1 flex flex-col">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isActive={active === faq.id}
                onClick={() => setActive(faq.id)}
              />
            ))}
          </div>

          {/* RIGHT: Tours image on large screens */}
          <div className="flex-1 hidden lg:block">
            <div className="sticky top-20 flex justify-center">
              <Timeline isMobile={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
