// File: C:\Users\acer\OneDrive\ai-blog\components\AboutHero.jsx

'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "AI Article Generator",
    desc: "Generate high-quality articles using AI.",
    img: "/placeholder1.png",
  },
  {
    title: "Code Snippet Library",
    desc: "A curated collection of useful code snippets.",
    img: "/placeholder2.png",
  },
  {
    title: "Tech News Aggregator",
    desc: "Stay updated with the latest programming news.",
    img: "/placeholder3.png",
  },
]

export default function AboutHero() {
  return (
    <section className="w-full py-12 px-4 md:px-0 ">
      {/* Hero Section */}
   <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="max-w-5xl mx-auto text-center mb-20 min-h-[450px]  rounded-3xl shadow-2xl p-12 border-4 border-purple-300"
>
  <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight">
    About Us
  </h1>
  <p className="text-xl md:text-2xl   mb-8 font-medium">
    Yukta Blog is a programming blog dedicated to sharing insightful tutorials, project showcases, and the latest trends in software development. Whether you&apos;re a beginner or a seasoned developer, you&apos;ll find valuable resources to boost your coding journey.
  </p>
  <p className="text-lg   italic">
    Built with <span >❤️</span> by Yukta, passionate about code, learning, and community.
  </p>
</motion.div>
      {/* Showcase Section */}
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center text-purple-600 mb-8"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className=" rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-28 h-28   rounded-full mb-4 flex items-center justify-center overflow-hidden">
                {/* Placeholder image */}
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="object-cover w-full h-full"
                  style={{ filter: 'blur(2px) grayscale(60%)' }}
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{proj.title}</h3>
              <p className=" 0 text-center">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
