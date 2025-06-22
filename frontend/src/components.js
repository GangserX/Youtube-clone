import React, { useState } from 'react';

// Mock data for videos
export const mockVideos = [
  {
    id: 1,
    title: "Amazing Gaming Setup Tour 2025",
    channel: "TechGamer",
    views: "2.3M",
    timeAgo: "3 days ago",
    duration: "10:42",
    thumbnail: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    description: "Check out this incredible RGB gaming setup with the latest hardware and peripherals!",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Best Music Mix 2025 - Electronic Beats",
    channel: "MusicVibes",
    views: "5.1M",
    timeAgo: "1 week ago",
    duration: "45:30",
    thumbnail: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    channelAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    description: "The ultimate electronic music mix to get you pumped up!",
    youtubeId: "jNQXAC9IVRw"
  },
  {
    id: 3,
    title: "How to Cook Perfect Pasta - Italian Chef Tutorial",
    channel: "CookingMasterClass",
    views: "1.8M",
    timeAgo: "4 days ago",
    duration: "12:15",
    thumbnail: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
    channelAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    description: "Learn the secrets of making restaurant-quality pasta at home!",
    youtubeId: "hFZFjoX2cGg"
  },
  {
    id: 4,
    title: "Latest Tech Review - MacBook Pro 2025",
    channel: "TechReviewer",
    views: "3.7M",
    timeAgo: "2 days ago",
    duration: "18:25",
    thumbnail: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    description: "In-depth review of the new MacBook Pro with M4 chip!",
    youtubeId: "MejbOFk7H6c"
  },
  {
    id: 5,
    title: "Epic Football Match Highlights",
    channel: "SportsCenter",
    views: "8.2M",
    timeAgo: "1 day ago",
    duration: "8:45",
    thumbnail: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
    channelAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    description: "Best moments from yesterday's championship match!",
    youtubeId: "QH2-TGUlwu4"
  },
  {
    id: 6,
    title: "Learn JavaScript in 30 Minutes",
    channel: "CodeAcademy",
    views: "4.5M",
    timeAgo: "5 days ago",
    duration: "31:20",
    thumbnail: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg",
    channelAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    description: "Complete JavaScript tutorial for beginners!",
    youtubeId: "hdI2bqOjy3c"
  },
  {
    id: 7,
    title: "Amazing Desert Adventure - Travel Vlog",
    channel: "WanderlustTravel",
    views: "2.1M",
    timeAgo: "6 days ago",
    duration: "15:30",
    thumbnail: "https://images.pexels.com/photos/2245436/pexels-photo-2245436.png",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    description: "Join me on an incredible journey through the Sahara Desert!",
    youtubeId: "fJ9rUzIMcZQ"
  },
  {
    id: 8,
    title: "DJ Mix Live Performance",
    channel: "ElectroBeats",
    views: "6.8M",
    timeAgo: "3 days ago",
    duration: "52:10",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    channelAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    description: "Live DJ set from the biggest electronic music festival!",
    youtubeId: "kJQP7kiw5Fk"
  },
  {
    id: 9,
    title: "Home Cooking Masterclass",
    channel: "ChefLife",
    views: "3.2M",
    timeAgo: "1 week ago",
    duration: "25:45",
    thumbnail: "https://images.unsplash.com/photo-1528712306091-ed0763094c98",
    channelAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    description: "Professional cooking techniques you can use at home!",
    youtubeId: "L_jWHffIx5E"
  },
  {
    id: 10,
    title: "Running Marathon Training Tips",
    channel: "FitnessGuru",
    views: "1.9M",
    timeAgo: "4 days ago",
    duration: "14:20",
    thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    description: "Everything you need to know about marathon training!",
    youtubeId: "9bZkp7q19f0"
  },
  {
    id: 11,
    title: "Programming Tutorial - React Hooks",
    channel: "WebDevPro",
    views: "2.7M",
    timeAgo: "2 days ago",
    duration: "22:15",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    channelAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    description: "Master React Hooks with this comprehensive tutorial!",
    youtubeId: "TNhaISOUy6Q"
  },
  {
    id: 12,
    title: "Guitar Lessons for Beginners",
    channel: "MusicSchool",
    views: "4.1M",
    timeAgo: "1 week ago",
    duration: "19:35",
    thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    channelAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    description: "Learn to play guitar with these easy beginner lessons!",
    youtubeId: "kN0SVBCJqLs"
  }
];

// Header Component
export const Header = ({ onSearch, searchQuery, setSearchQuery, darkMode, setDarkMode }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showApps, setShowApps] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-4">
          <button className={`p-2 rounded-full hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <svg className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>YouTube</span>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                className={`w-full px-4 py-2 border ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-black placeholder-gray-500'} rounded-l-full focus:outline-none focus:border-blue-500`}
              />
            </div>
            <button
              onClick={onSearch}
              className={`px-6 py-2 ${darkMode ? 'bg-gray-800 border-gray-600 hover:bg-gray-700' : 'bg-gray-50 border-gray-300 hover:bg-gray-100'} border-l-0 border rounded-r-full`}
            >
              <svg className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
          >
            {darkMode ? (
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.528 7.171a4.5 4.5 0 116.972 6.972M9.528 7.171L21 21M9.528 7.171a4.5 4.5 0 000-6.342M21 21l-3.75-3.75M21 21v-4.5M21 21h-4.5" />
              </svg>
            )}
          </button>
          
          <button className={`p-2 rounded-full hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <svg className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>

          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className={`p-2 rounded-full hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
            >
              <svg className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h10v-1a3 3 0 00-3-3H7a3 3 0 00-3 3v1z" />
              </svg>
            </button>
          </div>

          <div className="relative">
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className="w-8 h-8 rounded-full overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Sidebar Component
export const Sidebar = ({ darkMode, sidebarCollapsed, currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'shorts', icon: '📱', label: 'Shorts' },
    { id: 'subscriptions', icon: '📺', label: 'Subscriptions' },
  ];

  const secondaryItems = [
    { id: 'library', icon: '📚', label: 'Library' },
    { id: 'history', icon: '🕐', label: 'History' },
    { id: 'your-videos', icon: '🎥', label: 'Your videos' },
    { id: 'watch-later', icon: '⏰', label: 'Watch later' },
    { id: 'liked-videos', icon: '👍', label: 'Liked videos' },
  ];

  return (
    <aside className={`fixed left-0 top-16 h-full ${darkMode ? 'bg-gray-900' : 'bg-white'} border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300 z-40 ${sidebarCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-3">
        {/* Main Menu */}
        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center space-x-4 px-3 py-2 rounded-lg hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} ${
                currentPage === item.id ? (darkMode ? 'bg-gray-800' : 'bg-gray-100') : ''
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {!sidebarCollapsed && <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.label}</span>}
            </button>
          ))}
        </div>

        {!sidebarCollapsed && (
          <>
            <hr className={`my-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />
            
            {/* Secondary Menu */}
            <div className="space-y-1">
              {secondaryItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center space-x-4 px-3 py-2 rounded-lg hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} ${
                    currentPage === item.id ? (darkMode ? 'bg-gray-800' : 'bg-gray-100') : ''
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.label}</span>
                </button>
              ))}
            </div>

            <hr className={`my-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />
            
            {/* Subscriptions */}
            <div>
              <h3 className={`px-3 py-2 text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wide`}>
                Subscriptions
              </h3>
              <div className="space-y-1">
                {['TechGamer', 'MusicVibes', 'CookingMasterClass'].map((channel) => (
                  <button
                    key={channel}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                  >
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-xs text-white font-bold">
                      {channel[0]}
                    </div>
                    <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{channel}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

// Video Card Component
export const VideoCard = ({ video, onClick, darkMode }) => {
  return (
    <div 
      className="cursor-pointer group"
      onClick={() => onClick(video)}
    >
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full aspect-video object-cover rounded-lg group-hover:rounded-none transition-all duration-200"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
          {video.duration}
        </div>
      </div>
      
      <div className="flex mt-3 space-x-3">
        <img 
          src={video.channelAvatar} 
          alt={video.channel}
          className="w-9 h-9 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className={`font-medium text-sm line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600`}>
            {video.title}
          </h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
            {video.channel}
          </p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {video.views} views • {video.timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
};

// Video Player Component
export const VideoPlayer = ({ video, onBack, darkMode }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [liked, setLiked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const relatedVideos = mockVideos.filter(v => v.id !== video.id).slice(0, 10);

  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} min-h-screen`}>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Main Video Section */}
        <div className="flex-1 lg:mr-6">
          {/* Video Player */}
          <div className="relative bg-black aspect-video rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
              title={video.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video Info */}
          <div className="mt-4">
            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {video.title}
            </h1>
            
            <div className="flex items-center justify-between mt-2">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {video.views} views • {video.timeAgo}
              </p>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full ${liked ? 'bg-blue-600 text-white' : darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  <svg className="w-5 h-5" fill={liked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V8a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span>Like</span>
                </button>
                
                <button className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Channel Info */}
            <div className="flex items-center justify-between mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <img 
                  src={video.channelAvatar} 
                  alt={video.channel}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {video.channel}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    2.1M subscribers
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => setSubscribed(!subscribed)}
                className={`px-6 py-2 rounded-full font-medium ${subscribed ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-red-600 text-white hover:bg-red-700'}`}
              >
                {subscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>

            {/* Description */}
            <div className={`mt-4 p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-lg`}>
              <button 
                onClick={() => setShowDescription(!showDescription)}
                className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}
              >
                {showDescription ? 'Show less' : 'Show more'}
              </button>
              {showDescription && (
                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {video.description}
                </p>
              )}
            </div>

            {/* Comments Section */}
            <div className="mt-6">
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Comments
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((comment) => (
                  <div key={comment} className="flex space-x-3">
                    <img 
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" 
                      alt="Commenter"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className={`font-medium text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          @user{comment}
                        </span>
                        <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          2 hours ago
                        </span>
                      </div>
                      <p className={`mt-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Great video! Really helpful content. Thanks for sharing this amazing tutorial.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Videos Sidebar */}
        <div className="lg:w-96 mt-6 lg:mt-0">
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Up next
          </h3>
          <div className="space-y-3">
            {relatedVideos.map((relatedVideo) => (
              <div 
                key={relatedVideo.id}
                onClick={() => window.location.reload()}
                className="flex space-x-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg"
              >
                <div className="relative flex-shrink-0">
                  <img 
                    src={relatedVideo.thumbnail} 
                    alt={relatedVideo.title}
                    className="w-40 aspect-video object-cover rounded"
                  />
                  <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                    {relatedVideo.duration}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-medium text-sm line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {relatedVideo.title}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                    {relatedVideo.channel}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {relatedVideo.views} views
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Content Component
export const MainContent = ({ videos, onVideoClick, darkMode, searchQuery, currentPage }) => {
  const filteredVideos = searchQuery 
    ? videos.filter(video => 
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.channel.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : videos;

  const getPageTitle = () => {
    switch(currentPage) {
      case 'home': return searchQuery ? `Search results for "${searchQuery}"` : 'Home';
      case 'trending': return 'Trending';
      case 'subscriptions': return 'Subscriptions';
      case 'library': return 'Library';
      case 'history': return 'History';
      default: return 'Home';
    }
  };

  return (
    <main className="flex-1 p-6">
      <div className="mb-6">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {getPageTitle()}
        </h1>
        {searchQuery && (
          <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {filteredVideos.length} results
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVideos.map((video) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            onClick={onVideoClick}
            darkMode={darkMode}
          />
        ))}
      </div>
    </main>
  );
};