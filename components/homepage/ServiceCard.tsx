'use client'

import { motion } from 'framer-motion'
import { Target, Zap, TrendingUp, Briefcase, Globe, Award, Users } from 'lucide-react'

const iconMap: Record<string, any> = {
  Target,
  Zap,
  TrendingUp,
  Briefcase,
  Globe,
  Award,
  Users
}

interface ServiceCardProps {
  service: {
    icon: string
    title: string
    description: string
    color: string
  }
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Target

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="service-card group p-10 bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-elegant hover:shadow-bold transition-all cursor-pointer border border-slate-100"
    >
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg`}
      >
        <IconComponent className="w-10 h-10" />
      </motion.div>
      <h3 className="text-2xl font-display font-bold mb-4 text-primary">
        {service.title}
      </h3>
      <p className="text-slate-600 leading-relaxed">{service.description}</p>
    </motion.div>
  )
}
