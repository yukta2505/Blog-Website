'use client'
import React, {useRef, useEffect} from 'react';
import Navbar from "../components/Navbar";
import Typed from 'typed.js';

export default function Home() {

   const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding', 'Designing', 'Developing', 'Creating', 'Innovating'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

    


  return (
   <main>
   <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
  <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
    <h1 className="text-3xl leading-snug text-foreground md:text-4xl">
      A <span className="font-semibold">free repository</span> for community  
      <br className="hidden lg:block" /> 
      components using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
    </h1>
    <p className="mt-4 text-lg text-muted-foreground">
      Open source Tailwind UI components and templates to 
      <br className="hidden lg:block" /> 
      bootstrap your new apps, projects or landing sites!
    </p>
    <div className="mt-6 bg-transparent border rounded-lg border-border lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary focus-within:ring-opacity-20">
      <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
        
      </form>
    </div>
  </div>
  <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
    <img 
      src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" 
      alt="tailwind css components" 
      className="w-full h-full max-w-md mx-auto"
    />
  </div>
</section>
<section className="bg-card py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-card-foreground mb-4">Pricing Plans</h2>
    <p className="text-center text-muted-foreground mb-12">
      Choose the plan that fits your needs. Simple, transparent pricing.
    </p>
    <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 max-w-5xl mx-auto">
      {/* Basic Plan */}
      <div className="group flex-1 bg-card rounded-lg shadow-lg p-8 border border-primary flex flex-col transition-all duration-300
        hover:shadow-2xl hover:border-primary hover:-translate-y-2 hover:scale-105">
        <h3 className="text-xl font-semibold text-card-foreground mb-4 text-center group-hover:text-primary transition-colors duration-300">
          Basic
        </h3>
        <div className="text-center mb-6">
          <span className="text-4xl font-bold text-card-foreground">$9</span>
          <span className="text-muted-foreground">/mo</span>
        </div>
        <ul className="mb-8 space-y-3 text-muted-foreground">
          <li>✔️ 1 Project</li>
          <li>✔️ 5 GB Storage</li>
          <li>✔️ Email Support</li>
          <li>❌ Team Collaboration</li>
        </ul>
        <button className="mt-auto bg-primary text-white py-2 px-4 rounded-lg transition-all duration-300
          group-hover:bg-primary group-hover:scale-105">
          Choose Basic
        </button>
      </div>
      {/* Pro Plan - Bestseller */}
      <div className="relative group flex-1 bg-card rounded-lg shadow-2xl p-8 border-2 border-primary flex flex-col scale-105 z-10 transition-all duration-300
        hover:shadow-3xl hover:border-primary hover:-translate-y-2 hover:scale-110 ring-2 ring-primary">
        {/* Bestseller Badge */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <span className="inline-block bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
            Bestseller
          </span>
        </div>
        <h3 className="text-xl font-semibold text-primary mb-4 text-center group-hover:text-primary transition-colors duration-300">
          Pro
        </h3>
        <div className="text-center mb-6">
          <span className="text-4xl font-bold text-primary">$29</span>
          <span className="text-muted-foreground">/mo</span>
        </div>
        <ul className="mb-8 space-y-3 text-muted-foreground">
          <li>✔️ 10 Projects</li>
          <li>✔️ 50 GB Storage</li>
          <li>✔️ Priority Email Support</li>
          <li>✔️ Team Collaboration</li>
        </ul>
        <button className="mt-auto bg-primary text-white py-2 px-4 rounded-lg transition-all duration-300
          group-hover:bg-primary group-hover:scale-105 font-semibold">
          Choose Pro
        </button>
      </div>
      {/* Enterprise Plan */}
      <div className="group flex-1 bg-card rounded-lg shadow-lg p-8 border border-primary flex flex-col transition-all duration-300
        hover:shadow-2xl hover:border-primary hover:-translate-y-2 hover:scale-105">
        <h3 className="text-xl font-semibold text-card-foreground mb-4 text-center group-hover:text-primary transition-colors duration-300">
          Enterprise
        </h3>
        <div className="text-center mb-6">
          <span className="text-4xl font-bold text-card-foreground">$99</span>
          <span className="text-muted-foreground">/mo</span>
        </div>
        <ul className="mb-8 space-y-3 text-muted-foreground">
          <li>✔️ Unlimited Projects</li>
          <li>✔️ 1 TB Storage</li>
          <li>✔️ 24/7 Support</li>
          <li>✔️ Advanced Analytics</li>
        </ul>
        <button className="mt-auto bg-primary text-white py-2 px-4 rounded-lg transition-all duration-300
          group-hover:bg-primary group-hover:scale-105">
          Contact Sales
        </button>
      </div>
    </div>
  </div>
</section>
<section
  className={`relative flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 md:py-24 max-w-6xl mx-auto
    transition-all duration-1000
    opacity-100 translate-y-0
    bg-gradient-to-br from-purple-100 via-white to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900
    rounded-3xl shadow-2xl
    overflow-hidden
  `}
>
  {/* Cool Background Blobs */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 opacity-30 rounded-full filter blur-3xl pointer-events-none"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 opacity-20 rounded-full filter blur-3xl pointer-events-none"></div>
  {/* Text Content */}
  <div className="w-full md:w-1/2 mt-8 md:mt-0 z-10">
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
      Welcome to <span className="text-purple-600 dark:text-purple-400 animate-pulse">Yukta&apos;s Blog</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
      Build modern, fast, and <span className="font-semibold text-purple-500 dark:text-purple-300">beautiful</span> websites with ease.<br />
      Start your journey with our <span className="underline decoration-wavy decoration-purple-400">powerful tools</span> and templates.
    </p>
    <a
      href="#get-started"
      className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-white font-semibold shadow-xl hover:scale-105 hover:from-purple-700 hover:to-indigo-600 dark:bg-purple-500 dark:hover:bg-purple-600 transition-all duration-300"
    >
      🚀 Get Started
    </a>
  </div>
  {/* Illustration */}
  <div className="w-full md:w-1/2 flex justify-center z-10">
    <img
      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
      alt="Modern workspace illustration"
      className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800 hover:scale-105 transition-transform duration-500"
    />
  </div>
</section>
<section className="w-full py-20 bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white relative inline-block">
      Top Blogs
      <span className="block h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></span>
    </h2>
    <p className="text-center text-gray-500 dark:text-gray-400 mb-12 text-lg">
      Discover our most popular and insightful articles.
    </p>
    <div className="grid gap-10 md:grid-cols-2">
      {[
        {
          title: "How to Build a Modern Web App",
          description:
            "A step-by-step guide to building scalable and maintainable web applications using the latest technologies.",
          link: "#",
        },
        {
          title: "Mastering Tailwind CSS",
          description:
            "Tips, tricks, and best practices for getting the most out of Tailwind CSS in your projects.",
          link: "#",
        },
        {
          title: "Understanding React Hooks",
          description:
            "A deep dive into React Hooks and how they can simplify your component logic.",
          link: "#",
        },
        {
          title: "Deploying with Docker",
          description:
            "Learn how to containerize your applications and deploy them effortlessly using Docker.",
          link: "#",
        },
      ].map((blog, idx) => (
        <div
          key={blog.title}
          className="relative group bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-transparent hover:ring-2 hover:ring-blue-400/50"
          style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: "forwards" }}
        >
          <div className="absolute -top-3 left-6 w-10 h-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
            {blog.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {blog.description}
          </p>
          <a
            href={blog.link}
            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold hover:underline hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
          >
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      ))}
    </div>
  </div>
  <style>
    {`
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(40px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .group {
        opacity: 0;
        animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
      }
    `}
  </style>
</section>
</main>
  );
}

 