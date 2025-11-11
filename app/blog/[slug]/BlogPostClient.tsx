'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, Facebook, Tag, TrendingUp, Sparkles, Target } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useRef } from 'react'

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  date: string
  readTime: string
  author: string
  image: string
}

interface BlogPostClientProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5])

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

  // Enhanced content formatter with rich styling
  const formatBlogContent = (content: string) => {
    let formatted = content

    // First, handle section headers with special styling
    formatted = formatted.replace(/\*\*([^*]+:)\*\*/g, (match, header) => {
      return `<h2 class="text-2xl font-bold text-slate-900 mt-10 mb-6 flex items-center gap-3">
        <span class="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
        ${header}
      </h2>`
    })

    // Handle subsections (numbered points with bold)
    formatted = formatted.replace(/(\d+)\.\s+\*\*([^*]+)\*\*\s*[-–]\s*/g, (match, num, title) => {
      return `<div class="numbered-item bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-xl my-4 border-l-4 border-blue-500">
        <div class="flex items-start gap-3">
          <span class="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm">${num}</span>
          <div class="flex-1">
            <h3 class="font-bold text-slate-900 text-lg mb-2">${title}</h3>
            <p class="text-slate-700">`
    })

    // Close numbered item divs (look for patterns that indicate end)
    formatted = formatted.replace(/(<\/p>)(\n\n)(?=\d+\.\s+\*\*)/g, '$1</div></div>$2')
    formatted = formatted.replace(/(<\/p>)(\n\n)(?=[^0-9])/g, (match, p, newlines, offset, string) => {
      // Check if we're inside a numbered-item
      const beforeText = string.substring(0, offset)
      const openDivs = (beforeText.match(/<div class="numbered-item/g) || []).length
      const closeDivs = (beforeText.match(/<\/div><\/div>/g) || []).length
      if (openDivs > closeDivs) {
        return `${p}</div></div>${newlines}`
      }
      return match
    })

    // Convert remaining **bold text** to highlighted strong tags
    formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-slate-900 bg-yellow-50 px-1 rounded">$1</strong>')

    // Handle bullet points with better styling
    formatted = formatted.replace(/^-\s+(.+)$/gm, '<li class="flex items-start gap-3 my-3"><span class="text-blue-500 mt-1.5">●</span><span class="flex-1 text-slate-700">$1</span></li>')

    // Wrap consecutive list items in ul
    formatted = formatted.replace(/(<li class="flex[^>]+>.*?<\/li>\s*)+/gs, match => {
      return `<ul class="my-6 space-y-2">${match}</ul>`
    })

    // Split by double newlines for paragraphs
    const sections = formatted.split('\n\n').map(para => {
      para = para.trim()
      if (!para) return ''

      // Don't wrap if it's already HTML
      if (para.startsWith('<h2') || para.startsWith('<h3') ||
          para.startsWith('<div') || para.startsWith('<ul') ||
          para.startsWith('<li')) {
        return para
      }

      // Check if this looks like a statistic or key fact
      if (para.match(/^\w+.*:\s*[""].*[""]/)) {
        return `<div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-xl">
          <p class="text-lg text-slate-800 leading-relaxed italic">${para.replace(/\n/g, '<br/>')}</p>
        </div>`
      }

      // Regular paragraph with enhanced styling
      return `<p class="text-lg text-slate-700 leading-relaxed mb-6">${para.replace(/\n/g, '<br/>')}</p>`
    })

    return sections.join('\n')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Custom styles for blog content */}
      <style jsx global>{`
        .blog-content {
          font-size: 1.125rem;
          color: #334155;
        }
        .blog-content h2 {
          scroll-margin-top: 100px;
          transition: all 0.3s ease;
        }
        .blog-content h2:hover {
          transform: translateX(5px);
        }
        .blog-content h3 {
          color: #1e293b;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .blog-content p {
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .blog-content strong {
          color: #1e293b;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .blog-content strong:hover {
          background-color: #fef3c7;
        }
        .blog-content ul {
          margin: 1.5rem 0;
        }
        .blog-content li {
          transition: all 0.2s ease;
        }
        .blog-content li:hover {
          transform: translateX(5px);
        }
        .blog-content .numbered-item {
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .blog-content .numbered-item:hover {
          box-shadow: 0 10px 25px rgba(59,130,246,0.15);
          transform: translateY(-2px);
        }
        .blog-content a {
          color: #3b82f6;
          text-decoration: underline;
          text-decoration-color: #93c5fd;
          text-underline-offset: 3px;
          transition: all 0.2s ease;
        }
        .blog-content a:hover {
          color: #2563eb;
          text-decoration-color: #3b82f6;
        }
        /* Add smooth scrolling behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Navigation */}
      <Navbar />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section with Parallax */}
      <section ref={ref} className="relative pt-32 pb-16 px-8 overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(post.category)} opacity-10`}></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url(${post.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px) brightness(0.7)',
          }}></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/blog">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-slate-700 hover:text-accent transition-colors mb-8 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </motion.button>
          </Link>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <span className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${getGradient(post.category)} text-white text-sm font-semibold shadow-lg`}>
              {getIcon(post.category)}
              {post.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-display font-bold text-white mb-8 leading-tight drop-shadow-2xl"
          >
            {post.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 text-white/90 mb-8"
          >
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">{post.date}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-5 h-5" />
              <span className="font-medium">{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="font-medium">By {post.author}</span>
            </div>
          </motion.div>

          {/* Share Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <span className="text-white/90 font-medium mr-2">Share:</span>
            {[
              { icon: <Twitter className="w-4 h-4" />, label: "Twitter" },
              { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
              { icon: <Facebook className="w-4 h-4" />, label: "Facebook" }
            ].map((social, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-accent transition-all"
              >
                {social.icon}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-8 -mt-8 mb-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative group"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${getGradient(post.category)} rounded-3xl blur-3xl opacity-30 group-hover:opacity-40 transition-opacity`}></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[500px] object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${getGradient(post.category)} opacity-10`}></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-3xl shadow-elegant p-12 md:p-16"
          >
            {/* Excerpt */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12 pb-12 border-b border-slate-200"
            >
              <p className="text-2xl text-slate-700 leading-relaxed font-light italic">
                {post.excerpt}
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg prose-slate max-w-none blog-content"
            >
              <div
                className="space-y-2"
                dangerouslySetInnerHTML={{ __html: formatBlogContent(post.content) }}
              />
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 pt-12 border-t border-slate-200"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <Tag className="w-5 h-5 text-slate-600" />
                {post.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:border-accent hover:text-accent transition-all cursor-pointer"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Author Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getGradient(post.category)} flex items-center justify-center text-white text-2xl font-bold`}>
                  {post.author[0]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{post.author}</h3>
                  <p className="text-slate-600">Strategic Project Management Consultant</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                With 14+ years of experience in strategic project management and digital transformation, I help organizations navigate complex challenges and drive innovation across climate-tech, fintech, and digital twin ecosystems.
              </p>
            </motion.div>
          </motion.article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-8 pb-32">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-display font-bold text-primary mb-4">
                Related Articles
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 hover:shadow-2xl transition-all cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${getGradient(relatedPost.category)} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    </div>

                    <div className="p-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${getGradient(relatedPost.category)} text-white text-xs font-semibold mb-3`}>
                        {getIcon(relatedPost.category)}
                        {relatedPost.category}
                      </span>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>

                      <div className="flex items-center gap-3 text-slate-600 text-xs">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {relatedPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {relatedPost.readTime}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
              Never Miss an Insight
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
