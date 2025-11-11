/**
 * Migration Script: Move Blog Posts to Sanity CMS
 *
 * This script migrates your existing blog posts from app/data/blogPosts.ts to Sanity.
 *
 * Usage:
 * 1. Make sure you've set up your Sanity project and added the Project ID to .env.local
 * 2. Run: npx tsx scripts/migrate-to-sanity.ts
 */

import dotenv from 'dotenv'
import { createClient } from '@sanity/client'
import { blogPosts } from '../app/data/blogPosts'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // You'll need to add this to .env.local
})

// Convert blog post content to Sanity block content
function convertContentToBlocks(content: string) {
  const blocks = []
  const paragraphs = content.split('\n\n')

  for (const para of paragraphs) {
    if (!para.trim()) continue

    // Check if it's a heading (starts with **)
    if (para.startsWith('**') && para.includes(':**')) {
      const headingText = para.replace(/\*\*/g, '').trim()
      blocks.push({
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: headingText,
            marks: [],
          },
        ],
      })
    }
    // Check if it contains bold text
    else if (para.includes('**')) {
      const children = []
      const parts = para.split('**')

      for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 0) {
          // Regular text
          if (parts[i]) {
            children.push({
              _type: 'span',
              text: parts[i],
              marks: [],
            })
          }
        } else {
          // Bold text
          if (parts[i]) {
            children.push({
              _type: 'span',
              text: parts[i],
              marks: ['strong'],
            })
          }
        }
      }

      blocks.push({
        _type: 'block',
        style: 'normal',
        children,
      })
    }
    // Regular paragraph
    else {
      blocks.push({
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: para.trim(),
            marks: [],
          },
        ],
      })
    }
  }

  return blocks
}

async function migrateBlogPosts() {
  console.log('🚀 Starting blog post migration to Sanity...\n')

  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.error('❌ Error: NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local')
    process.exit(1)
  }

  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ Error: SANITY_API_TOKEN is not set in .env.local')
    console.log('\nTo get your token:')
    console.log('1. Go to https://www.sanity.io/manage')
    console.log('2. Select your project')
    console.log('3. Go to API > Tokens')
    console.log('4. Create a new token with "Editor" permissions')
    console.log('5. Add it to .env.local as SANITY_API_TOKEN=your_token_here\n')
    process.exit(1)
  }

  let successCount = 0
  let errorCount = 0

  for (const post of blogPosts) {
    try {
      console.log(`📝 Migrating: ${post.title}`)

      const sanityDoc = {
        _type: 'blogPost',
        title: post.title,
        slug: {
          _type: 'slug',
          current: post.slug,
        },
        author: post.author,
        excerpt: post.excerpt,
        content: convertContentToBlocks(post.content),
        category: post.category,
        tags: post.tags,
        readTime: post.readTime,
        publishedAt: new Date(post.date).toISOString(),
        // Note: image field will be empty - you can upload images through Studio
      }

      await client.create(sanityDoc)
      console.log(`✅ Successfully migrated: ${post.title}\n`)
      successCount++
    } catch (error: any) {
      console.error(`❌ Error migrating "${post.title}":`, error.message)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(50))
  console.log('📊 Migration Summary:')
  console.log(`✅ Successful: ${successCount}`)
  console.log(`❌ Failed: ${errorCount}`)
  console.log(`📝 Total: ${blogPosts.length}`)
  console.log('='.repeat(50))

  console.log('\n🎉 Migration complete!')
  console.log('\nNext steps:')
  console.log('1. Visit http://localhost:3008/studio')
  console.log('2. Review your migrated blog posts')
  console.log('3. Upload images for each post')
  console.log('4. Publish the posts')
}

// Run migration
migrateBlogPosts()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Fatal error:', error)
    process.exit(1)
  })
