import { client } from './client'
import { blogPosts as localBlogPosts, getAllBlogPosts as getLocalBlogPosts, getAllCategories as getLocalCategories } from '@/app/data/blogPosts'
import { urlFor } from './image'

export interface SanityBlogPost {
  _id: string
  title: string
  slug: { current: string }
  author?: string
  image?: any
  category?: string
  tags?: string[]
  excerpt: string
  content: any[]
  readTime?: string
  publishedAt: string
}

// Convert Sanity blog post to local format for compatibility
function convertSanityPost(post: SanityBlogPost) {
  return {
    id: parseInt(post._id.replace(/[^\d]/g, '')) || Math.floor(Math.random() * 10000),
    title: post.title,
    slug: post.slug.current,
    excerpt: post.excerpt,
    content: convertBlocksToText(post.content),
    category: post.category || 'TechTrends & BizInnovations',
    tags: post.tags || [],
    date: new Date(post.publishedAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    readTime: post.readTime || '5 min read',
    author: post.author || 'Himanshu Shukla',
    image: post.image ? urlFor(post.image).width(800).height(600).url() : 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
  }
}

// Convert Sanity block content to plain text (simplified)
function convertBlocksToText(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return ''

  return blocks
    .map(block => {
      if (block._type === 'block') {
        return block.children?.map((child: any) => {
          if (child.marks && child.marks.includes('strong')) {
            return `**${child.text}**`
          }
          return child.text
        }).join('') || ''
      }
      return ''
    })
    .join('\n\n')
}

// Fetch all blog posts from Sanity
export async function getAllBlogPostsFromSanity() {
  // Check if Sanity is configured
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'your_project_id_here') {
    console.log('📝 Sanity not configured, using local blog posts')
    return getLocalBlogPosts()
  }

  try {
    const query = `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author,
      image,
      category,
      tags,
      excerpt,
      content,
      readTime,
      publishedAt
    }`

    const posts = await client.fetch(query)

    if (!posts || posts.length === 0) {
      console.log('📝 No posts in Sanity yet, using local blog posts')
      return getLocalBlogPosts()
    }

    console.log(`✅ Fetched ${posts.length} posts from Sanity`)
    return posts.map(convertSanityPost)
  } catch (error) {
    console.error('Error fetching from Sanity:', error)
    console.log('📝 Falling back to local blog posts')
    return getLocalBlogPosts()
  }
}

// Fetch single blog post by slug
export async function getBlogPostBySlug(slug: string) {
  // Check if Sanity is configured
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'your_project_id_here') {
    const localPost = localBlogPosts.find(post => post.slug === slug)
    return localPost || null
  }

  try {
    const query = `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author,
      image,
      category,
      tags,
      excerpt,
      content,
      readTime,
      publishedAt
    }`

    const post = await client.fetch(query, { slug })

    if (!post) {
      // Fallback to local
      const localPost = localBlogPosts.find(p => p.slug === slug)
      return localPost || null
    }

    return convertSanityPost(post)
  } catch (error) {
    console.error('Error fetching post from Sanity:', error)
    const localPost = localBlogPosts.find(p => p.slug === slug)
    return localPost || null
  }
}

// Get all categories
export async function getAllCategoriesFromSanity() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'your_project_id_here') {
    return getLocalCategories()
  }

  try {
    const query = `array::unique(*[_type == "blogPost"].category)`
    const categories = await client.fetch(query)
    return categories.filter(Boolean)
  } catch (error) {
    console.error('Error fetching categories from Sanity:', error)
    return getLocalCategories()
  }
}

// Get all projects from Sanity
export async function getAllProjectsFromSanity() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'your_project_id_here') {
    console.log('📝 Sanity not configured, projects unavailable')
    return []
  }

  try {
    const query = `*[_type == "project"] | order(order asc) {
      _id,
      title,
      subtitle,
      category,
      description,
      fullDescription,
      challenge,
      solution,
      impact,
      technologies,
      metrics,
      image,
      unsplashId,
      gradient,
      order
    }`

    const projects = await client.fetch(query)

    if (!projects || projects.length === 0) {
      console.log('📝 No projects in Sanity yet')
      return []
    }

    console.log(`✅ Fetched ${projects.length} projects from Sanity`)

    // Transform projects to match expected format
    return projects.map((project: any) => ({
      id: parseInt(project._id.replace(/[^\d]/g, '')) || Math.floor(Math.random() * 10000),
      title: project.title,
      subtitle: project.subtitle,
      category: project.category,
      description: project.description,
      fullDescription: project.fullDescription,
      challenge: project.challenge,
      solution: project.solution,
      impact: project.impact || [],
      technologies: project.technologies || [],
      metrics: project.metrics || [],
      image: project.image ? urlFor(project.image).width(800).height(600).url() : `https://images.unsplash.com/photo-${project.unsplashId}?w=800&h=600&fit=crop`,
      unsplashId: project.unsplashId,
      gradient: project.gradient || 'from-blue-500 to-purple-600',
    }))
  } catch (error) {
    console.error('Error fetching projects from Sanity:', error)
    return []
  }
}
