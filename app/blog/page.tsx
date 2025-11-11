import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, ArrowRight, TrendingUp, Sparkles, Target } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { getAllBlogPostsFromSanity, getAllCategoriesFromSanity } from '@/sanity/lib/queries'
import BlogPageClient from './BlogPageClient'

// Enable ISR - revalidate every 5 minutes (300 seconds)
export const revalidate = 300

export default async function BlogPage() {
  const blogPosts = await getAllBlogPostsFromSanity()
  const categoriesData = await getAllCategoriesFromSanity()
  const categories = ["All", ...categoriesData]

  return <BlogPageClient blogPosts={blogPosts} categories={categories} />
}
