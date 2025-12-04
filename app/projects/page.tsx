import { projects } from '@/app/data/projects'
import ProjectsPageClient from './ProjectsPageClient'

export default function ProjectsPage() {
  return <ProjectsPageClient projects={projects} />
}
