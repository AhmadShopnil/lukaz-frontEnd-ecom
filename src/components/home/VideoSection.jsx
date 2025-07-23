import React from 'react';

const videoInfo = {
  videoId: '9vHNTuexED4', // Demo YouTube video ID
  title: 'Discover the Latest Trends',
  subtitle: 'Watch our product highlights in action',
  buttonText: 'Shop Now',
};

export default function VideoSection() {
  return (
    <section className="relative w-full h-[550px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[160%] h-[160%] -translate-x-1/2 -translate-y-1/2">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoInfo.videoId}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${videoInfo.videoId}`}
            title="Product Ad"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Optional overlay */}
      </div>

      {/* Content Overlay - aligned left bottom */}
      <div className="relative z-20 h-full flex items-end px-6 pb-12 text-white">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{videoInfo.title}</h1>
          <p className="text-lg md:text-xl mb-6">{videoInfo.subtitle}</p>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
            {videoInfo.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
