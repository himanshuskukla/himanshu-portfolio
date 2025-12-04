import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, ArrowRight, TrendingUp, Sparkles, Target } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { blogPosts } from '@/app/data/blogPosts'
import BlogPageClient from './BlogPageClient'

export default function BlogPage() {
  // Get unique categories from blog posts
  const categoriesData = Array.from(new Set(blogPosts.map(post => post.category)))
  const categories = ["All", ...categoriesData]

  return <BlogPageClient blogPosts={blogPosts} categories={categories} />
}
