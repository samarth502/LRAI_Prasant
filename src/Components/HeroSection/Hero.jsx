// import React from 'react';

// const Hero = () => {
//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white p-4 overflow-hidden font-sans">
//       {/* Background Video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover z-0"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/5263914_Robot_Future_3840x2160.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

//       {/* Hero Content */}
//       <div className="relative z-20 max-w-4xl mx-auto space-y-8 py-16 px-6 sm:px-12 md:px-20">
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
//           Pioneering Tomorrow's Digital <span className="text-green-400">Frontiers</span>
//         </h1>
//         <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto text-gray-300">
//           We are dedicated to crafting cutting-edge web and app solutions that drive your business forward. As your trusted technology partner, we transform innovative ideas into scalable, real-world applications.
//         </p>

//         {/* Call to Action Button */}
//         <div className="flex justify-center mt-8">
//           <a
//             href="#"
//             className="px-8 py-4 bg-green-500 text-white rounded-full font-bold text-lg shadow-lg transform hover:scale-105 hover:bg-green-600 transition-all duration-300 ease-in-out"
//           >
//             Explore Our Solutions
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



import React from 'react';

const Hero = () => {
  return (


    <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white p-4 overflow-hidden font-sans">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/5263914_Robot_Future_3840x2160.mp4" type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>

    </div>

    
  );
};

export default Hero;
