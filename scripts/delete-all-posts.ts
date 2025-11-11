/**
 * Delete All Blog Posts from Sanity
 *
 * This script deletes all existing blog posts from Sanity.
 * Run this before re-migrating to fix the missing _key issue.
 */

import dotenv from 'dotenv'
import { createClient } from '@sanity/client'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

async function deleteAllPosts() {
  console.log('🗑️  Deleting all blog posts from Sanity...\n')

  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.error('❌ Error: NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local')
    process.exit(1)
  }

  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ Error: SANITY_API_TOKEN is not set in .env.local')
    process.exit(1)
  }

  try {
    // Fetch all blog post IDs
    const query = `*[_type == "blogPost"]._id`
    const postIds = await client.fetch(query)

    if (!postIds || postIds.length === 0) {
      console.log('✅ No blog posts found to delete.')
      return
    }

    console.log(`Found ${postIds.length} blog posts to delete...`)

    // Delete all posts
    const transaction = client.transaction()
    postIds.forEach((id: string) => {
      transaction.delete(id)
    })

    await transaction.commit()

    console.log(`\n✅ Successfully deleted ${postIds.length} blog posts from Sanity!\n`)
  } catch (error: any) {
    console.error('❌ Error deleting posts:', error.message)
    process.exit(1)
  }
}

// Run deletion
deleteAllPosts()
  .then(() => {
    console.log('🎉 Cleanup complete! Now run the migration script to re-import posts with correct keys.')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Fatal error:', error)
    process.exit(1)
  })
