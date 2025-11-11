/**
 * Migration Script: Move Projects to Sanity CMS
 *
 * This script migrates your existing projects to Sanity.
 *
 * Usage:
 * 1. Make sure you've set up your Sanity project and added the Project ID to .env.local
 * 2. Run: npx tsx scripts/migrate-projects-to-sanity.ts
 */

import dotenv from 'dotenv'
import { createClient } from '@sanity/client'
import { projects } from '../app/data/projects'

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

async function migrateProjects() {
  console.log('🚀 Starting projects migration to Sanity...\\n')

  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.error('❌ Error: NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local')
    process.exit(1)
  }

  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ Error: SANITY_API_TOKEN is not set in .env.local')
    console.log('\\nTo get your token:')
    console.log('1. Go to https://www.sanity.io/manage')
    console.log('2. Select your project')
    console.log('3. Go to API > Tokens')
    console.log('4. Create a new token with "Editor" permissions')
    console.log('5. Add it to .env.local as SANITY_API_TOKEN=your_token_here\\n')
    process.exit(1)
  }

  let successCount = 0
  let errorCount = 0

  for (const project of projects) {
    try {
      console.log(`📝 Migrating: ${project.title}`)

      const sanityDoc = {
        _type: 'project',
        title: project.title,
        subtitle: project.subtitle,
        category: project.category,
        description: project.description,
        fullDescription: project.fullDescription,
        challenge: project.challenge,
        solution: project.solution,
        impact: project.impact,
        technologies: project.technologies,
        metrics: project.metrics,
        unsplashId: project.unsplashId,
        gradient: project.gradient,
        order: project.id,
      }

      await client.create(sanityDoc)
      console.log(`✅ Successfully migrated: ${project.title}\\n`)
      successCount++
    } catch (error: any) {
      console.error(`❌ Error migrating "${project.title}":`, error.message)
      errorCount++
    }
  }

  console.log('\\n' + '='.repeat(50))
  console.log('📊 Migration Summary:')
  console.log(`✅ Successful: ${successCount}`)
  console.log(`❌ Failed: ${errorCount}`)
  console.log(`📝 Total: ${projects.length}`)
  console.log('='.repeat(50))

  console.log('\\n🎉 Migration complete!')
  console.log('\\nNext steps:')
  console.log('1. Visit http://localhost:3008/studio')
  console.log('2. Review your migrated projects')
  console.log('3. Upload images for each project (optional)')
  console.log('4. Publish the projects')
}

// Run migration
migrateProjects()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Fatal error:', error)
    process.exit(1)
  })
