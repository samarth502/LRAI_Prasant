import React, { useState } from 'react';
// Note: Tailwind CSS is assumed to be available in the environment.
import { MapPin, Clock, Briefcase, X, Menu, Search, Filter } from 'lucide-react';

// --- Icon Definitions (Lucide Replacements) ---
const IconGlobe = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);
const IconUsers = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const IconZap = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconBriefcase = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);
const IconMapPin = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconClock = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const IconX = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"/><path d="M6 6L18 18"/></svg>
);
const IconCheck = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);
const IconDollarSign = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h1a3.5 3.5 0 0 1 0 7H6"/></svg>
);
const IconHeart = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A7 7 0 0 0 16.5 3c-1.85 0-3.63.78-5.12 2.76-.73 1.05-1.46 2.04-2.22 2.92-1.45 1.77-2.91 3.49-4.38 5.16-1.57 1.83-3.2 3.64-3.2 5.5A7 7 0 0 0 7.5 21c1.85 0 3.63-.78 5.12-2.76 1.49 1.98 3.27 2.76 5.12 2.76A7 7 0 0 0 19 14z"/></svg>
);


const jobOpenings = [
    {
        id: 101,
        title: "Senior Machine Learning Engineer (LLMs)",
        department: "AI/ML Engineering",
        location: "Remote (US/Canada)",
        type: "Full-Time",
        description: "Design, build, and deploy production-grade Large Language Model (LLM) applications and scalable inference pipelines.",
        full_description: "You will be responsible for the end-to-end lifecycle of our core generative AI services. This includes model selection, fine-tuning, developing robust MLOps practices, and optimizing models for low-latency production environments using frameworks like PyTorch and TensorFlow.",
        responsibilities: [
            "Implement and optimize LLMs (e.g., transformers) for specific business use cases (RAG, summarization, generation).",
            "Develop scalable model serving and monitoring infrastructure (e.g., Kubernetes, KServe).",
            "Collaborate with data scientists to transition experimental models into production code.",
            "Drive adoption of best practices for performance and cost efficiency in cloud AI services."
        ],
        qualifications: [
            "5+ years in a Machine Learning Engineer role, with significant experience in NLP.",
            "Expert proficiency in Python and ML frameworks (PyTorch, TensorFlow, Hugging Face).",
            "Strong understanding of modern MLOps principles and cloud platforms (AWS, GCP, or Azure).",
            "Experience with distributed computing and data processing (e.g., Spark, Dask)."
        ]
    },
    {
        id: 102,
        title: "AI Research Scientist (Computer Vision)",
        department: "Research & Development",
        location: "Boston, MA",
        type: "Full-Time",
        description: "Conduct cutting-edge research in computer vision, focusing on novel architectures for real-time video analysis and perception.",
        full_description: "Our R&D team is pushing the boundaries of spatial intelligence. You will propose and lead research projects, publish findings, and collaborate with product teams to transition state-of-the-art algorithms into commercial solutions.",
        responsibilities: [
            "Design and implement novel deep learning models for object detection, segmentation, and tracking.",
            "Write and submit research papers to top-tier conferences (CVPR, ICCV, NeurIPS).",
            "Maintain research code quality and reproducibility.",
            "Mentor junior researchers and stay current with the latest advancements in AI."
        ],
        qualifications: [
            "Ph.D. in Computer Science, Electrical Engineering, or a related field, specializing in Computer Vision.",
            "A strong publication record in top-tier ML/CV venues.",
            "Expertise in deep learning principles and model training at scale.",
            "Proficiency in Python, PyTorch, and cloud-based training infrastructure."
        ]
    },
    {
        id: 103,
        title: "Prompt Engineering & Content Strategy Lead",
        department: "Product & Content",
        location: "Hybrid (Seattle, WA)",
        type: "Full-Time",
        description: "Define the strategy and best practices for interacting with generative AI models to maximize output quality and consistency.",
        full_description: "This unique role bridges linguistics, technical design, and product strategy. You will develop and standardize prompt templates, establish guardrails for safe and reliable AI output, and train product teams on effective prompt design and chain-of-thought techniques.",
        responsibilities: [
            "Develop, test, and maintain a library of highly effective, low-variability prompt templates for various LLMs.",
            "Design and implement evaluation metrics and testing suites for AI-generated content (e.g., toxicity, relevance, factual accuracy).",
            "Work closely with UX designers to integrate prompting best practices into user-facing product features.",
            "Analyze model behavior and report on emerging failure modes and necessary model updates."
        ],
        qualifications: [
            "3+ years of professional experience in technical writing, computational linguistics, or product management focused on LLMs.",
            "Deep, practical experience with multiple commercial and open-source generative AI models (e.g., GPT-4, Claude, Llama).",
            "Strong analytical skills and experience with structured testing methodologies.",
            "Excellent written communication skills and ability to translate complex model behaviors into simple operational guides."
        ]
    },
];
// --- 1. JobDetailModal Component ---
const JobDetailModal = ({ job, onClose }) => {
    if (!job) return null;

    // Simple state to handle the Quick Apply confirmation
    const [isApplied, setIsApplied] = useState(false);

    const handleApply = (e) => {
        e.preventDefault();
        // In a real application, this would handle form submission/API call
        setIsApplied(true);
        setTimeout(() => {
            onClose(); // Close modal after a short delay
        }, 2000);
    };

    return (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-70 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300">
                
                {/* Modal Header */}
                <div className="sticky top-0 bg-white p-6 md:p-8 border-b border-gray-100 z-10 flex justify-between items-start">
                    <div>
                        <h2 className="text-3xl font-extrabold text-indigo-800">{job.title}</h2>
                        <p className="text-md font-medium text-indigo-500 mt-1">{job.department}</p>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
                        <IconX className="w-6 h-6" />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8">
                    {/* Job Metadata */}
                    <div className="flex flex-wrap gap-4 mb-8 text-sm font-semibold">
                        <span className="flex items-center text-gray-700 bg-indigo-100 px-4 py-2 rounded-full">
                            <IconMapPin className="w-4 h-4 mr-2 text-indigo-600" />
                            {job.location}
                        </span>
                        <span className="flex items-center text-gray-700 bg-indigo-100 px-4 py-2 rounded-full">
                            <IconClock className="w-4 h-4 mr-2 text-indigo-600" />
                            {job.type}
                        </span>
                    </div>
                    
                    {/* Full Description */}
                    <p className="text-gray-700 text-lg mb-8 leading-relaxed border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-3 rounded-md">
                        {job.full_description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h3>
                        <ul className="space-y-3 text-gray-700">
                            {job.responsibilities.map((r, i) => (
                                <li key={i} className="flex items-start">
                                    <IconCheck className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-indigo-600" />
                                    <span>{r}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Qualifications */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Qualifications</h3>
                        <ul className="space-y-3 text-gray-700">
                            {job.qualifications.map((q, i) => (
                                <li key={i} className="flex items-start">
                                    <IconCheck className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-indigo-600" />
                                    <span>{q}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Quick Apply / Resume Submission */}
                <div className="sticky bottom-0 bg-gray-50 p-6 md:p-8 border-t border-gray-200 z-10 rounded-b-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Apply</h3>
                    {isApplied ? (
                        <div className="text-center p-4 bg-green-100 text-green-700 rounded-lg font-semibold">
                            Application Submitted Successfully! Closing in a moment...
                        </div>
                    ) : (
                        <form onSubmit={handleApply} className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                required
                                className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                            />
                            {/* Note on Resume Submission: Since we cannot handle file uploads, this simulates a quick apply by collecting an email */}
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg sm:w-auto w-full"
                            >
                                Submit Resume (Simulated)
                            </button>
                        </form>
                    )}
                    <p className="text-sm text-gray-500 mt-3">By clicking 'Submit', you agree to our simulated application process.</p>
                </div>
            </div>
        </div>
    );
};

// --- 2. JobCard Component ---
// const JobCard = ({ job, onClick }) => {
//     return (
//         // Added onClick handler to open the modal
//         <div
//             onClick={() => onClick(job)}
//             className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer"
//         >
//             <div className="flex justify-between items-start">
//                 <div>
//                     <h3 className="text-xl md:text-2xl font-bold text-indigo-800 mb-1">
//                         {job.title}
//                     </h3>
//                     <p className="text-sm font-medium text-indigo-500">{job.department}</p>
//                 </div>
              
//             </div>

//             <p className="text-gray-600 mt-4 text-base line-clamp-2">{job.description}</p>

//             <div className="mt-5 pt-5 border-t border-gray-100 flex flex-wrap gap-4 text-sm font-medium">
//                 <span className="flex items-center text-gray-500 bg-indigo-50 px-3 py-1 rounded-full">
//                     <IconMapPin className="w-4 h-4 mr-2 text-indigo-500" />
//                     {job.location}
//                 </span>
//                 <span className="flex items-center text-gray-500 bg-indigo-50 px-3 py-1 rounded-full">
//                     <IconClock className="w-4 h-4 mr-2 text-indigo-500" />
//                     {job.type}
//                 </span>

//                  <div className="hidden sm:block">
//                     <span className="text-indigo-600 font-semibold text-sm border-2 border-indigo-100 px-3 py-1.5 rounded-full hover:bg-indigo-50 transition-colors">
//                         View Details
//                     </span>
//                 </div>
                
//             </div>
//             <div className="sm:hidden mt-4">
//                  <span className="w-full text-center block text-indigo-600 font-semibold text-sm border-2 border-indigo-100 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
//                     Tap to View Details
//                 </span>
//             </div>
//         </div>
//     );
// };



const JobCard = ({ job, onClick }) => {
    return (
        <div
            onClick={() => onClick(job)}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer"
            role="button"
            aria-label={`View details for ${job.title}`}
        >
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-indigo-800 mb-1">
                        {job.title}
                    </h3>
                    <p className="text-sm font-medium text-indigo-500">{job.department}</p>
                </div>
            </div>

            <p className="text-gray-600 mt-4 text-base line-clamp-2 min-h-[3rem]">{job.description}</p>

            {/* --- MODIFIED DETAIL SECTION FOR RESPONSIVE PLACEMENT --- */}
            {/* On mobile (default), items stack (flex-col). On desktop (sm:), they justify between on a row. */}
            <div className="mt-5 pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                
                {/* Job Tags (Location and Type) - Grouped to stay together */}
                <div className="flex flex-wrap gap-3 text-sm font-medium">
                    <span className="flex items-center text-gray-500 bg-indigo-50 px-3 py-1 rounded-full">
                        <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                        {job.location}
                    </span>
                    <span className="flex items-center text-gray-500 bg-indigo-50 px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4 mr-2 text-indigo-500" />
                        {job.type}
                    </span>
                </div>

                {/* View Details Button/CTA - Pushed to the right on desktop */}
                <div className="w-full sm:w-auto">
                    {/* Note: Using cursor-pointer here since the whole card is clickable */}
                    <span className="text-center block text-indigo-600 font-semibold text-sm border-2 border-indigo-100 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors w-full sm:w-auto">
                        View Details
                    </span>
                </div>
            </div>
            {/* ----------------------------------------------------- */}
        </div>
    );
};



// --- 3. CareerPage Component (The Main Content Block) ---
const CareerPage = () => {
    // State to manage the job detail modal
    const [selectedJob, setSelectedJob] = useState(null);

    const handleOpenModal = (job) => {
        setSelectedJob(job);
    };

    const handleCloseModal = () => {
        setSelectedJob(null);
    };
    
    // // Values and Benefits data
    // const values = [
    //     { icon: IconUsers, title: "Collaborative Culture", description: "A high-trust environment where radical ideas are shared openly, and every voice matters." },
    //     { icon: IconZap, title: "Impact & Autonomy", description: "You will solve meaningful problems with the freedom to choose your best path and drive real-world impact." },
    //     { icon: IconGlobe, title: "Global Reach", description: "Work on products used by millions worldwide, contributing to a global digital transformation." },
    // ];
    
    const benefits = [
        { icon: IconDollarSign, title: "Competitive Compensation", detail: "Equity options, annual bonuses, and best-in-class salary benchmarking." },
        { icon: IconClock, title: "Flexible Working", detail: "Generous PTO, flexible hours, and full remote work options for most roles." },
        { icon: IconHeart, title: "Health & Wellness", detail: "Comprehensive medical, dental, and vision coverage from day one, plus a wellness stipend." },
    ];


    return (
        <div className="min-h-screen bg-white font-['Inter']">

            {/* Job Detail Modal Render */}
            <JobDetailModal job={selectedJob} onClose={handleCloseModal} />

            {/* Premium Hero Section */}
            <section className="bg-white pt-24 pb-16 md:pt-7 md:pb-2 overflow-hidden border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">
                        Join The Vanguard
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl uppercase font-extrabold text-gray-900 leading-tight">
                        Shape Tomorrow. Build Excellence.
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto">
                        We are building the next generation of enterprise solutions. If you are driven by complex challenges and the pursuit of mastery, your future starts here.
                    </p>
                    <a href="#positions" className="mt-10 inline-block bg-indigo-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-xl hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                        Explore Open Roles
                    </a>
                </div>
            </section>

            {/* Why Join Us: Values Proposition */}
            {/* <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
                        The Core of Our Culture
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-indigo-500 transition-all duration-300 hover:shadow-2xl">
                                <value.icon className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 text-base">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
            
            {/* Job Listings Section */}
            <section id="positions" className="py-16 md:py-10">
                <div className="max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl uppercase sm:text-4xl font-bold text-gray-900 mb-4">
                        Current Opportunities
                    </h2>
                    <p className="text-gray-500 text-lg mb-12">
                        Click on any card below to view the full details and apply instantly.
                    </p>

                    {/* Job Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {jobOpenings.map(job => (
                            <JobCard key={job.id} job={job} onClick={handleOpenModal} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section (New Detail Added) */}
            <section className="py-16 md:py-10 bg-indigo-50">
                <div className="max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="uppercase text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
                        Perks & Compensation
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-indigo-200">
                                <benefit.icon className="w-8 h-8 text-indigo-700 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 text-base">{benefit.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Application Process Section (New Detail Added) */}
            <section className="py-16 md:py-24">
                <div className="max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl uppercase sm:text-4xl font-bold text-gray-900 text-center mb-12">
                        Our Transparent Process
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12">
                        {[
                            { step: 1, title: "Quick Apply", desc: "Submit your basic details via the card pop-up." },
                            { step: 2, title: "Initial Screen", desc: "A brief, non-technical conversation with our recruiter." },
                            { step: 3, title: "Technical Interview", desc: "A practical session focusing on your core domain skills." },
                            { step: 4, title: "Team Connect", desc: "Meet your future peers and team lead." },
                            { step: 5, title: "Offer", desc: "Welcome to the team! Our best-in-class offer is extended." },
                        ].map((item, index) => (
                            <div key={index} className="text-center max-w-xs">
                                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-indigo-600 text-white rounded-full font-bold text-xl shadow-lg">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA/Footer Section */}
            <footer className="bg-indigo-800 text-white py-16 md:py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-3xl font-bold mb-4">Questions or General Inquiries?</h3>
                    <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
                        For roles not listed, or if you just want to connect, feel free to reach out to our talent acquisition team.
                    </p>
                    <a href="mailto:careers@example.com" className="inline-block bg-white text-indigo-700 text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                        Contact HR
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default CareerPage;