'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, ArrowRight, TrendingUp, Sparkles, Target } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { getAllBlogPosts, getAllCategories } from '@/app/data/blogPosts'

export default function BlogPage() {
  const blogPosts = getAllBlogPosts()
  const categoriesData = getAllCategories()
  const categories = ["All", ...categoriesData]

  // Helper function to get gradient based on category
  const getGradient = (category: string) => {
    const gradients: { [key: string]: string } = {
      "TechTrends & BizInnovations": "from-blue-500 to-purple-600",
      "Project Pulse: Operational Innovations & Management insights": "from-purple-500 to-pink-600",
      "Did you know?": "from-green-500 to-emerald-600",
      "default": "from-indigo-500 to-purple-600"
    }
    return gradients[category] || gradients["default"]
  }

  // Helper function to get icon based on category
  const getIcon = (category: string) => {
    if (category.includes("Tech") || category.includes("AI")) return <Sparkles className="w-5 h-5" />
    if (category.includes("Project") || category.includes("Management")) return <Target className="w-5 h-5" />
    return <TrendingUp className="w-5 h-5" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-slate-600 hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 text-primary">
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Perspectives</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Exploring the intersection of technology, strategy, and innovation through practical insights and real-world experiences.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white rounded-3xl shadow-elegant overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[400px] md:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${getGradient(blogPosts[0].category)} opacity-20`}></div>
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${getGradient(blogPosts[0].category)} text-white text-sm font-semibold shadow-lg`}>
                      Featured Post
                    </span>
                  </div>
                </div>

                <div className="p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${getGradient(blogPosts[0].category)} bg-opacity-10 text-primary text-sm font-medium flex items-center gap-2`}>
                      {getIcon(blogPosts[0].category)}
                      {blogPosts[0].category}
                    </span>
                  </div>

                  <h2 className="text-4xl font-display font-bold text-primary mb-4">
                    {blogPosts[0].title}
                  </h2>

                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    {blogPosts[0].excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-slate-600 text-sm mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${blogPosts[0].slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r ${getGradient(blogPosts[0].category)} text-white rounded-full font-semibold shadow-lg w-fit`}
                    >
                      Read Article <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Latest Articles
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 hover:shadow-2xl transition-all cursor-pointer"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${getGradient(post.category)} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${getGradient(post.category)} text-white text-xs font-semibold shadow-lg flex items-center gap-1.5`}>
                        {getIcon(post.category)}
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-slate-600 text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-accent font-semibold"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold shadow-lg"
            >
              Load More Articles
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-8 bg-gradient-to-br from-primary to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-display font-bold text-white mb-6">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Subscribe to receive new articles and industry insights directly in your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary rounded-full font-bold shadow-2xl"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-display font-bold mb-4">Himanshu Shukla</h3>
              <p className="text-slate-400 leading-relaxed">
                Strategic Project Management Consulting & Digital Transformation Expert
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Projects', 'Services', 'About', 'Blog', 'Contact'].map((item) => (
                  <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                    <div className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                      {item}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="space-y-2 text-slate-400">
                <div>LinkedIn</div>
                <div>Email</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Himanshu Shukla. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
