import {
  Users,
  Video,
  Eye,
  Clock,
  ExternalLink,
  Youtube,
  PlayCircle
} from 'lucide-react';
// --- 2. VideoCard Component (FIXED) ---
function VideoCard({ video }) {
  return (
    <a
      // FIX APPLIED: Use the dedicated videoUrl for redirection
      href={video.videoUrl} 
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out shadow-2xl -translate-y-1.5"
    >
      <div className="relative">
        {/* Thumbnail Image */}
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-48 object-cover transition-transform duration-300 scale-105"
        />
        {/* Play Icon */}
        <div className="absolute inset-0 bg-black bg-opacity-0 bg-opacity-50 flex items-center justify-center transition-all duration-300">
          <PlayCircle className="w-16 h-16 text-white opacity-0 opacity-100 scale-110 transform transition-all duration-300" />
        </div>
        {/* Video Duration Badge */}
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold px-2 py-1 rounded-md">
          {video.duration}
        </span>
      </div>
      <div className="p-5">
        {/* Video Title */}
        <h3 className="text-lg font-bold text-gray-900 truncate mb-2 text-blue-700 transition-colors duration-300">
          {video.title}
        </h3>
        {/* Video Stats */}
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center gap-1.5">
            <Eye className="w-4 h-4" />
            <span>{video.views} views</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{video.uploaded}</span>
          </div>
        </div>
      </div>
    </a>
  );
}



// --- 3. VideoGrid Component (Data Updated) ---
function VideoGrid() {
  // UPDATED: videoUrl and thumbnailUrl are separated. thumbnailUrl uses placeholders.
  const mockVideos = [
    {
      id: 1,
      title: 'RLAI LoVAIC The AI City Solution Using Advanced Computer Vision',
      views: '1.2K',
      uploaded: '13 days ago',
      videoUrl: 'https://youtu.be/c6AZX4tpUgM?si=j03ngQE1FAECjghi',
      thumbnailUrl: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Video+1', // Placeholder for thumbnail
      duration: '12:45',
    },
    {
      id: 2,
      title: 'AI City - RLAI Solutions using LOVAIC (Part 2)',
      views: '2.8K',
      uploaded: '1 week ago',
      videoUrl: 'https://youtu.be/4OFO-y9I_58?si=PAEWJKeanBBYUTAs',
      thumbnailUrl: 'https://placehold.co/600x400/059669/FFFFFF?text=Video+2',
      duration: '08:22',
    },
    {
      id: 3,
      title: 'RLAI Solutions for Smart Traffic Management',
      views: '980',
      uploaded: '6 day ago',
      videoUrl: 'https://youtu.be/4OFO-y9I_58?si=CXBI_3bgvsgz0kR8',
      thumbnailUrl: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Video+3',
      duration: '3:34',
    },
    {
      id: 4,
      title: 'Unlocking Data with RLAI: Case Study',
      views: '5.1K',
      uploaded: '3 weeks ago',
      videoUrl: 'https://www.youtube.com/watch?v=rlai_casestudy', // Mock URL
      thumbnailUrl: 'https://placehold.co/600x400/D97706/FFFFFF?text=Video+4',
      duration: '11:10',
    },
    {
      id: 5,
      title: 'AI-Powered Automation for Startups',
      views: '3.3K',
      uploaded: '1 month ago',
      videoUrl: 'https://www.youtube.com/watch?v=rlai_automation', // Mock URL
      thumbnailUrl: 'https://placehold.co/600x400/DC2626/FFFFFF?text=Video+5',
      duration: '09:05',
    },
    {
      id: 6,
      title: 'AIM. AMPLIFY. ACHIEVE. - Our Vision',
      views: '10.2K',
      uploaded: '1 month ago',
      videoUrl: 'https://www.youtube.com/watch?v=rlai_vision', // Mock URL
      thumbnailUrl: 'https://placehold.co/600x400/374151/FFFFFF?text=Video+6',
      duration: '05:45',
    },
  ];
  return (
    <div className="mb-12 max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Featured Videos
      </h2>
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}


export default VideoGrid;