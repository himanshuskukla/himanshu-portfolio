import { getAllProjectsFromSanity } from '@/sanity/lib/queries'
import ProjectsPageClient from './ProjectsPageClient'

// Enable ISR - revalidate every 5 minutes
export const revalidate = 300

export default async function ProjectsPage() {
  // Fetch projects from Sanity
  const projects = await getAllProjectsFromSanity()

  return <ProjectsPageClient projects={projects} />
}
