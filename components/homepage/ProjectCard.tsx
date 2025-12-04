'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  project: {
    title: string
    subtitle: string
    description: string
    category: string
    image: string
    metrics?: Array<{ value: string; label: string }>
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      className="project-card-expandable relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        layout
        className={`bg-white rounded-3xl overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-all ${
          isExpanded ? 'shadow-2xl shadow-blue-500/20' : 'shadow-xl'
        }`}
      >
        {/* Project Image */}
        <motion.div layout className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isExpanded ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

          {/* Category Badge */}
          <motion.span
            layout
            className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold shadow-lg"
          >
            {project.category}
          </motion.span>
        </motion.div>

        {/* Content */}
        <motion.div layout className="p-8">
          <motion.h3 layout className="text-3xl font-display font-bold mb-3 text-primary">
            {project.title}
          </motion.h3>

          <motion.p layout className="text-lg text-blue-600 font-semibold mb-4">
            {project.subtitle}
          </motion.p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.metrics.map((metric: any, i: number) => (
                      <div key={i} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                        <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                        <div className="text-sm text-slate-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <motion.a
                  href="/contact"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-purple-600 transition-colors"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          {!isExpanded && (
            <motion.p
              initial={{ opacity: 1 }}
              className="text-slate-500 text-sm italic"
            >
              Hover to see details
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
