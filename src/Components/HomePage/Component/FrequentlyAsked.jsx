import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// --- FAQ Data Structure ---
const faqData = [
  {
    id: 1,
    question: "What sets InnovationM apart from other technology companies?",
    answer: "We deliver personalized, scalable, digital solutions that align technology with your business goals, ensuring real impact beyond just coding. Our 15+ years of experience, combined with certified AI and Cloud teams, allows us to provide end-to-end digital transformation strategies rather than just standard development services.",
  },
  {
    id: 2,
    question: "How does InnovationM guarantee project success?",
    answer: "We guarantee success through rigorous Agile methodologies, continuous stakeholder collaboration, design-led engineering, and a focus on measurable business outcomes at every sprint and delivery milestone.",
  },
  {
    id: 3,
    question: "Can InnovationM support small or pilot projects?",
    answer: "Absolutely. We offer flexible engagement models tailored for small, pilot, or proof-of-concept projects, helping you test ideas quickly before scaling up.",
  },
  {
    id: 4,
    question: "What engagement and pricing models do you offer?",
    answer: "We offer Time & Material (T&M), Fixed Price, and Dedicated Team models to suit various project scopes and budget requirements. We will discuss the best fit during our initial consultation.",
  },
  {
    id: 5,
    question: "Which industries do you specialize in?",
    answer: "Our expertise spans across Fintech, EdTech, Healthcare, Logistics, and E-commerce, but our foundational engineering practices are applicable to any industry undergoing digital transformation.",
  },
  {
    id: 6,
    question: "How does InnovationM protect my data and intellectual property?",
    answer: "We adhere to strict NDA and contractual agreements. All data handling follows industry-leading security protocols, and the Intellectual Property (IP) for all custom development work is fully transferred to the client upon project completion.",
  },
  {
    id: 7,
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, comprehensive post-launch support, maintenance, and continuous feature enhancement services are available to ensure the longevity and peak performance of your solution.",
  },
  {
    id: 8,
    question: "Can you integrate new solutions with my existing systems?",
    answer: "Yes, system integration is a core part of our expertise. We specialize in building custom APIs and utilizing middleware to ensure seamless, secure integration with your legacy systems and third-party tools.",
  },
  {
    id: 9,
    question: "How quickly can we start working together?",
    answer: "Our typical onboarding process is efficient. After a discovery call and finalizing the scope, we can usually initiate the project within 1 to 2 weeks, depending on the required team size and model.",
  },
];

// --- Single FAQ Accordion Item Component ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg transition-all duration-300 overflow-hidden">
      {/* Question Header (Toggle Button) */}
      <button
        className="flex justify-between items-start w-full text-left p-6 md:p-8  bg-indigo-100 transition-colors duration-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`text-lg md:text-xl font-semibold text-gray-800 ${isOpen ? 'text-emerald-700' : 'text-gray-900'}`}>
          {question}
        </span>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <Minus className="w-6 h-6 text-indigo-500 transition-transform duration-300" />
          ) : (
            <Plus className="w-6 h-6 text-indigo-600 transition-transform duration-300" />
          )}
        </span>
      </button>

      {/* Answer Content (Animated) */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="p-6 md:p-8 pt-0 text-gray-600 leading-relaxed border-t border-green-200/50">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
const FrequentlyAsked = () => {
  // Split the data into two columns for desktop layout
  const halfLength = Math.ceil(faqData.length / 2);
  const column1 = faqData.slice(0, halfLength);
  const column2 = faqData.slice(halfLength);

  return (
    <div className="min-h-screen bg-white font-sans p-4 antialiased">
      <div className="max-w-[96%] mx-auto py-9 lg:py-2">
        
        {/* Header Section */}
        <header className="mb-8 text-center">
          <h1 className="uppercase text-5xl font-extrabold text-gray-900 tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Frequently Asked Questions
          </h1>
        </header>

        {/* FAQ Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Column 1 */}
          <div className="space-y-6 lg:space-y-8">
            {column1.map((faq) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6 lg:space-y-8">
            {column2.map((faq) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FrequentlyAsked;
