"use client";
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-indigo-500 to-indigo-700 dark:from-indigo-950 dark:via-indigo-900 dark:to-purple-900 flex flex-col items-center py-10 px-4 font-sans relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-full blur-3xl opacity-50 z-0" />
      <div className="absolute -bottom-36 -right-36 w-80 h-80 bg-gradient-to-br from-yellow-300 to-indigo-500 rounded-full blur-3xl opacity-40 z-0" />
      <h1 className="text-4xl text-white mb-6 font-bold tracking-wide drop-shadow-md">Contact Us</h1>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl z-10">
        <form className="bg-card/90 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-6">
          <label className="text-primary font-semibold text-lg">
            Name:
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full mt-2 px-4 py-2 rounded-lg border border-muted outline-none text-base shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </label>
          <label className="text-primary font-semibold text-lg">
            Email:
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              className="w-full mt-2 px-4 py-2 rounded-lg border border-muted outline-none text-base shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </label>
          <label className="text-primary font-semibold text-lg">
            Message:
            <textarea
              name="message"
              rows={5}
              placeholder="How can we help you?"
              className="w-full mt-2 px-4 py-2 rounded-lg border border-muted outline-none text-base shadow-sm resize-y focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </label>
          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-indigo-400 text-white py-3 rounded-lg font-semibold shadow-md hover:from-indigo-600 hover:to-indigo-500 transition-transform hover:scale-105"
          >
             Submit
          </button>
        </form>

        <div className="w-full max-w-md bg-card/90 backdrop-blur-md rounded-2xl shadow-xl flex flex-col items-center">
          <h2 className="text-primary font-bold text-xl mt-8 mb-4 tracking-wide">🌍 Our Location</h2>
          <div className="w-full h-80 rounded-xl overflow-hidden shadow-md mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119064.90027594799!2d79.0180596!3d21.1458004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1751431101938!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0 w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nagpur Map"
            />
          </div>
          <p className="text-primary text-base font-medium mb-8 text-center">
            Nagpur, Maharashtra, India
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
