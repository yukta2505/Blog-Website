

// const blogs = [
//   {
//     title: "Understanding React Hooks",
//     description: "A deep dive into React Hooks and how they can simplify your code.",
//     slug: "understanding-react-hooks",
//     date: "2024-06-01",
//     author: "Jane Doe",
//     image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
//   },
//   {
//     title: "Tailwind CSS for Beginners",
//     description: "Learn how to style your applications quickly with Tailwind CSS.",
//     slug: "tailwind-css-for-beginners",
//     date: "2024-05-20",
//     author: "John Smith",
//     image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
//   },
//   {
//     title: "Next.js Routing Explained",
//     description: "Master routing in Next.js with practical examples.",
//     slug: "nextjs-routing-explained",
//     date: "2024-05-15",
//     author: "Alice Johnson",
//     image: "https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg"
//   }
// ];



import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'

// Read blog data from markdown files
const dirContent = fs.readdirSync('content', 'utf-8')
const blogs = dirContent.map(file => {
  const fileContent = fs.readFileSync(`content/${file}`, 'utf-8')
  const { data } = matter(fileContent)
  return data
})

const Page = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-4 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">
        Our Latest Blogs
      </h1>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-card text-card-foreground rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-semibold mb-2 text-foreground">
                {blog.title}
              </h2>
              <p className="text-muted-foreground mb-4 flex-1">
                {blog.description}
              </p>
              <div className="flex items-center justify-between mb-4 text-sm">
                <span className="text-muted-foreground">
                  {new Date(blog.date).toLocaleDateString()}
                </span>
                <span className="text-primary font-medium">{blog.author}</span>
              </div>
              <a
                href={`/blogpost/${blog.slug}`}
                className="inline-block mt-auto px-4 py-2 bg-primary text-primary-foreground rounded-lg shadow hover:opacity-90 transition-colors duration-200 text-center"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
