import React from "react";

function Landing() {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white px-6">
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Level Up Your Style
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Discover high-performance products built for creators, athletes, and
            dreamers.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Explore Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Landing;
