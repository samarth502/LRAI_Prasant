import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

// --- Configuration and Data ---
const AUTO_SLIDE_INTERVAL_MS = 5000;

const clientTestimonials = [
  {
    name: "Giri Patil",
    title: "Chief Technology Officer",
    company: "Prypco - UAE",
    quote: "Working with InnovationM has been exceptional. As we explored the app, we loved it more and more. Kudos to the team for their dedication and skill. We're confident they will deliver a successful final product.",
    imagePlaceholder: "Giri+Patil",
  },
  {
    name: "Tony Grant",
    title: "Technical Delivery Manager",
    company: "British Council",
    quote: "Many thanks to the team for the work they did, and we've had over 1000 survey responses, so it's gone really well!",
    imagePlaceholder: "Tony+Grant",
  },
  {
    name: "Amit Kumar",
    title: "Assistant General Manager",
    company: "Saregama India Ltd",
    quote: "We've worked with InnovationM for a year, and unlike others, they've excelled at agile methodology, quickly adapting to changes with their solid processes and expertise. Thank you for your continued support!",
    imagePlaceholder: "Amit+Kumar",
  },
  {
    name: "Jane Doe",
    title: "Head of Marketing",
    company: "Future Innovations Group",
    quote: "Their design-led approach transformed our product's user experience. The results were immediate, leading to a 40% increase in user engagement and better market positioning. A truly reliable partner.",
    imagePlaceholder: "Jane+Doe",
  },
];

// --- Testimonial Card Component (FIXED: Using React.memo instead of incorrect useMemo call) ---
const TestimonialCardComponent = ({ name, title, company, quote, imagePlaceholder }) => (
  <div
    // Updated: Removed horizontal centering classes (mx-auto, max-w-lg) and added h-full for consistent height
    className="bg-white rounded-xl shadow-2xl p-6 md:p-8 lg:p-10 flex flex-col h-full w-full transform transition-all duration-300"
  >
    {/* Client Image and Details */}
    <div className="flex flex-col items-center mb-6">
      <img
        src={`https://placehold.co/150x150/059669/ffffff?text=${imagePlaceholder}`}
        alt={`Profile of ${name}`}
        className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-emerald-500/50 mb-4"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/059669/ffffff?text=Client'; }}
      />
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <p className="text-sm text-emerald-600 font-medium">{title}</p>
      <p className="text-sm text-gray-500 italic">{company}</p>
    </div>

    {/* Quote Body */}
    <div className="relative text-center flex-grow pt-4">
      <Quote className="text-emerald-200 absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 opacity-70" />
      <p className="text-gray-700 leading-relaxed mt-4 z-10 relative">
        "{quote}"
      </p>
    </div>
  </div>
);

// We export the memoized version to optimize rendering
const TestimonialCard = React.memo(TestimonialCardComponent);


// --- Main Slider Component (Renamed back to App for environment compatibility) ---
const ClientTestimonialsOne = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = clientTestimonials.length;

  // Configuration for 3-card desktop view (lg breakpoint)
  const cardsPerView = 3; 

  // Max index we can reach before the last visible card is aligned to the left.
  // If totalSlides=4 and cardsPerView=3, maxIndex = 4 - 3 = 1. (Slide 0 and Slide 1 only)
  const maxIndex = totalSlides > cardsPerView ? totalSlides - cardsPerView : 0;
  
  // Translation percentage per step, based on the desktop view (1/3 of the visible area)
  const slideStepPercentage = 100 / cardsPerView; 

  const goToNext = useCallback(() => {
    setActiveIndex((prevIndex) => {
        // Loop back to start (0) if we reach the max slide boundary
        if (prevIndex >= maxIndex) {
            return 0; 
        }
        return prevIndex + 1;
    });
  }, [maxIndex]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prevIndex) => {
        // Loop back to the end (maxIndex) if we are at the start
        if (prevIndex === 0) {
            return maxIndex; 
        }
        return prevIndex - 1;
    });
  }, [maxIndex]);

  const goToSlide = (index) => {
    // Ensure manual jump doesn't exceed the boundary
    setActiveIndex(Math.min(index, maxIndex));
  };

  // Auto-Slide Effect
  useEffect(() => {
    // Only auto-slide if there's more than one visible 'page'
    if (maxIndex > 0) {
        const timer = setInterval(() => {
            goToNext();
        }, AUTO_SLIDE_INTERVAL_MS);

        // Cleanup interval on component unmount or dependency change
        return () => clearInterval(timer);
    }
  }, [goToNext, maxIndex]);

  // Determine the translation value based on the active index and slide step
  const translationValue = useMemo(() => {
      // Translates the container by the width of one card (33.333%) for each step
      return activeIndex * slideStepPercentage;
  }, [activeIndex, slideStepPercentage]);

  return (
    <div className=" bg-gray-50 font-sans p-4 antialiased">
      {/* Increased max-w-7xl to comfortably fit three cards */}
      <div className=" py-1"> 
        
        {/* Header */}
        <header className="mb-12 text-center">
          <p className="text-lg font-semibold text-emerald-600 uppercase tracking-widest mb-2">
            Clients
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Building Lasting Success Through Client Partnerships
          </h1>
        </header>

        {/* Slider Container */}
        <div className="relative">
          {/* Outer mask defines the viewable area */}
          <div className="overflow-hidden rounded-xl shadow-inner">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                // Total width must accommodate all cards, calculated based on 1/3 card width
                width: `${totalSlides * slideStepPercentage}%`, 
                // Translate by the calculated percentage for the current active index
                transform: `translateX(-${translationValue}%)`,
              }}
            >
              {clientTestimonials.map((testimonial, index) => (
                <div 
                    key={index} 
                    // Card width responsive classes: 100% (mobile), 50% (tablet), 33.333% (desktop)
                    // Added p-4 for spacing between the cards
                    className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4 box-border" 
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows (Only show arrows if there are more items than cards in view) */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={goToPrev}
                className="hidden md:flex absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-gray-200 text-gray-700 hover:bg-emerald-500 hover:text-white transition z-20 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous Testimonial"
                disabled={activeIndex === 0}
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="hidden md:flex absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-gray-200 text-gray-700 hover:bg-emerald-500 hover:text-white transition z-20 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next Testimonial"
                disabled={activeIndex === maxIndex}
              >
                <ArrowRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Navigation Dots (Only show dots for the number of 'pages' available) */}
        {maxIndex > 0 && (
            <div className="flex justify-center space-x-2 mt-8">
              {/* Only create dots for viewable pages (Max Index + 1) */}
              {[...Array(maxIndex + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                    h-3 w-3 rounded-full transition-all duration-300
                    ${activeIndex === index ? 'bg-emerald-600 w-6' : 'bg-gray-300 hover:bg-emerald-300'}
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default ClientTestimonialsOne;
