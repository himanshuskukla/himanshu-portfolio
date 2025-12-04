import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/app/data/blogPosts'
import BlogPostClient from './BlogPostClient'

// Generate static params for all blog posts at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for SEO
export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: `${post.title} | Himanshu Shukla`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the blog post from local data
  const post = blogPosts.find(p => p.slug === params.slug)

  // If post not found, show 404
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog Post Not Found</h1>
          <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold">
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    )
  }

  // Find related posts
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />
}
