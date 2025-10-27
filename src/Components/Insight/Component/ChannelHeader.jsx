import React from 'react';
// Hum 'lucide-react' se kuch modern icons import kar rahe hain
// Yeh icons design ko premium look denge
import {
  Users,
  Video,
  Eye,
  Clock,
  ExternalLink,
  Youtube,
  PlayCircle
} from 'lucide-react';


function ChannelHeader() {
  // Aapke screenshot se profile pic ka placeholder
  const profilePicUrl = "https://yt3.googleusercontent.com/AYkmqM1WLvgkcCxgG-ueWKa996bkx8BCipUKDGbqkb7cq8CF4ErBtHGhTu4opnqAEzWrn4s_dg=s160-c-k-c0x00ffffff-no-rj";
   // Background image URL jo aapne provide kiya hai
  const bannerImageUrl = "https://yt3.googleusercontent.com/RxkGNWutZ0qn2saIxc5zemMSB0yXBl81msTnBmCaI071i114hR3kjpCPnAnjRNhNS-QziasDIQ=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj";

  return (
    <header className="bg-white shadow-lg  mb-5">
      {/* 1. Banner (Aapke motto ke saath) */}
      <div 
        className="h-48 md:h-64  flex items-center justify-center p-4 bg-cover bg-center"
        style={{ backgroundImage: `url('${bannerImageUrl}')` }}
      >
        
      </div>

      {/* 2. Main Info Block (Profile Pic, Stats, Buttons) */}
      <div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 md:-mt-20 space-y-4 md:space-y-0 md:space-x-8">
          
          {/* Profile Picture */}
          <img
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl object-cover"
            src={profilePicUrl}
            alt="RLAI Consultancy Profile"
          />

          {/* Channel Name, Stats, and Buttons */}
          <div className="flex-1 w-full md:w-auto text-center md:text-left">
       

            {/* Stats & Buttons Wrapper */}
            <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Stats */}
              <div className="flex items-center justify-center md:justify-start gap-5 text-gray-700">
                <div className="flex items-center gap-1.5">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-lg">16</span>
                  <span className="text-sm text-gray-500">Subscribers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Video className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-lg">18</span>
                  <span className="text-sm text-gray-500">Videos</span>
                </div>
              </div>

              {/* Buttons (Premium design ke saath) */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.youtube.com/@RLAIConsultancy" // Yahaan apna subscribe link daalein
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-white bg-red-600 shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  Subscribe
                </a>
                {/* <a
                  href="http://rightleft.ai" // Yahaan apna website link daalein
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-white bg-gray-900 shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit Website
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Channel Description */}
        <div className="mt-8 pb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">About</h3>
          <p className="text-gray-600 max-w-4xl leading-relaxed">
            Welcome to Right Left AI (RLAI) Consultancy – your trusted partner in AI powered
            solutions. Discover insights, tutorials, and success stories that
            AIM to Amplify your business and help you Achieve your goals.
            Visit us at <strong className="text-gray-800">rightleft.ai</strong>
          </p>
        </div>
      </div>
    </header>
  );
}
export default ChannelHeader;