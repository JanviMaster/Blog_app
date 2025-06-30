import React from 'react';
import asset4 from '../assets/asset4.jpg';

export default function About() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div><br></br></div>
        <div className="gap-10 flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={asset4}
              className="max-h-[50vh] w-full object-cover rounded-xl shadow-lg"
              alt="Banner"
            />
          </div>

          <div className="w-full md:w-1/2 px-4">
            <h1 className="font-semibold text-6xl mb-6">About Us</h1>
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Story</h2>
              <p className="text-base leading-relaxed">
                What started as a small passion project has now grown into a vibrant community
                of readers who are curious, creative, and always looking to live their best lives.
                Our team of writers, creators, and dreamers come from different walks of life,
                but share one goal — to make life a little more stylish and meaningful.
              </p>
            </section>
          </div>
        </div>

        <p className="mb-6 text-center">
          <span className="text-3xl font-semibold text-pink-600 block mb-2">Welcome to Lifestyle Blog!</span>
          Your go-to space for everything inspiring, refreshing, and real.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">What We Share</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>🧘 Wellness tips that nurture your mind, body, and soul</li>
            <li>🍳 Easy recipes and food discoveries you’ll love</li>
            <li>✈️ Travel stories that spark your wanderlust</li>
            <li>🛍️ Fashion and style ideas that express your vibe</li>
            <li>💡 Productivity and self-care advice for a balanced life</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Why Follow Us?</h2>
          <p className="text-base leading-relaxed">
            Because this isn’t just a blog — it’s a lifestyle. We’re not here to tell you how to live,
            but to offer inspiration, relatable stories, and real-life experiences to help you shape your own path.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Stay Connected</h2>
          <p className="text-base leading-relaxed">
            Join our journey by subscribing to our newsletter, following us on social media,
            or dropping a comment on your favorite post. We love hearing from you!
          </p>
        </section>

        <blockquote className="italic text-center text-pink-500 text-lg mt-10">
          “Live better. Feel better. Be better — with Lifestyle Blog.”
        </blockquote>
      </div>
    </>
  );
}
