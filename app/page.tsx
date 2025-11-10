'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, Zap, TrendingUp, Mail, Linkedin, Github, ArrowRight, ExternalLink, Target, Award, Users, Rocket, Calendar, Clock } from 'lucide-react'
import * as THREE from 'three'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Enhanced Particle Grid Background for Hero
function ParticleGrid() {
  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      const time = state.clock.getElapsedTime()

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const z = positions[i + 2]
        positions[i + 1] = Math.sin(x + time) * 0.5 + Math.cos(z + time * 0.5) * 0.5
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true
      pointsRef.current.rotation.y = time * 0.05
    }
  })

  const particleCount = 2000
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#3B82F6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Animated Stats Component with Progress Bar
function AnimatedStat({ value, label, suffix = '', delay = 0 }: { value: number; label: string; suffix?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [count, setCount] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        const duration = 2000
        const startTime = Date.now()

        const animate = () => {
          const now = Date.now()
          const elapsed = now - startTime
          const progress = Math.min(elapsed / duration, 1)

          setCount(Math.floor(value * progress))
          setProgress(progress * 100)

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setCount(value)
            setProgress(100)
            setIsComplete(true)
            setTimeout(() => setIsComplete(false), 500)
          }
        }

        animate()
      }, delay)
    }
  }, [isInView, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="glass-light p-6 rounded-2xl shadow-elegant text-center relative overflow-hidden"
    >
      <div className="flex items-baseline justify-center mb-3">
        <span className="text-5xl font-display font-bold text-accent">{count}</span>
        <span className="text-3xl font-display font-bold text-accent ml-1">{suffix}</span>
      </div>
      <div className="text-sm text-slate-600 font-medium mb-4 h-8 flex items-center justify-center">{label}</div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ${isComplete ? 'animate-pulse' : ''}`}
          style={{ width: `${progress}%` }}
          animate={isComplete ? {
            boxShadow: ['0 0 0px rgba(59, 130, 246, 0)', '0 0 20px rgba(59, 130, 246, 0.8)', '0 0 0px rgba(59, 130, 246, 0)']
          } : {}}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  )
}

// Expandable Project Card - Light Theme Version
function ExpandableProjectCard({ project, index }: { project: any; index: number }) {
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
            src={`https://images.unsplash.com/photo-${project.unsplashId}?w=800&h=600&fit=crop`}
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
                {project.metrics && (
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

// Blog Post Card
function BlogCard({ post, index }: { post: any; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-bold transition-all border border-slate-100"
    >
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-white rounded-full text-xs font-semibold">
          {post.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">
          {post.title}
        </h3>

        <p className="text-slate-600 leading-relaxed mb-4">
          {post.excerpt}
        </p>

        <motion.a
          href="#"
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-2 text-accent font-semibold"
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.article>
  )
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  useEffect(() => {
    // GSAP Animations - Removed service-card animation to prevent conflicts with Framer Motion
    const ctx = gsap.context(() => {
      // Other animations can be added here
    })

    return () => ctx.revert()
  }, [])

  const services = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Strategic Project Management Consulting",
      description: "Expertly guide complex initiatives from vision to reality, ensuring alignment with business goals and maximizing ROI through data-driven strategies and agile methodologies.",
      color: "from-blue-600 via-blue-500 to-purple-500"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Digital Transformation Consulting",
      description: "Navigate the digital revolution with confidence. We craft tailored strategies to integrate cutting-edge technologies, optimize processes, and cultivate a culture of innovation for sustainable growth.",
      color: "from-purple-600 via-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Business Operations & Development",
      description: "Elevate your operational efficiency and drive innovation. We optimize core business processes, implement robust performance metrics, and foster a culture of continuous improvement to boost productivity and profitability.",
      color: "from-pink-600 via-pink-500 to-blue-500"
    }
  ]

  const projects = [
    {
      title: "Digital Twin Consortium",
      subtitle: "Advancing Global Digital Twin Standards",
      description: "Leading AI automation initiatives and testbed management for the world's largest digital twin community. Managing business process optimization through Microsoft Power Platform, AI Agents, and advanced analytics across 13+ working groups spanning 31 countries with 200+ member organizations.",
      category: "Digital Twin",
      unsplashId: "1451187580459-43d4b3e77425",
      metrics: [
        { value: "200+", label: "Member Companies" },
        { value: "31", label: "Countries" },
        { value: "40%", label: "Efficiency Gain" },
        { value: "13+", label: "Working Groups" }
      ]
    },
    {
      title: "DCarbon Solutions",
      subtitle: "Empowering the Clean Energy Transition",
      description: "Revolutionizing Renewable Energy Certificates and unlocking value for residential solar initiatives. Leading the charge in sustainable energy transformation through innovative certification systems and clean energy solutions that drive measurable environmental impact.",
      category: "Clean Energy",
      unsplashId: "1509391366261-7c1db99679f5",
      metrics: [
        { value: "Platform", label: "REC Marketplace" },
        { value: "Blockchain", label: "Powered Solution" }
      ]
    },
    {
      title: "WINNIIO AB",
      subtitle: "Carbon-Neutral Buildings Through Digital Twin & AI",
      description: "Pioneering next-generation smart building management by integrating Digital Twin technology, AI, and IoT for self-learning systems. Creating carbon-neutral buildings through real-time energy optimization, predictive maintenance, and intelligent automation that reduces environmental impact while enhancing operational efficiency.",
      category: "Digital Twin",
      unsplashId: "1486406146456-42eaccf5fd1c",
      metrics: [
        { value: "30%", label: "Energy Savings" },
        { value: "15+", label: "Buildings Managed" }
      ]
    },
    {
      title: "Banking the Unbanked",
      subtitle: "Financial Inclusion at Scale",
      description: "Extended comprehensive banking services to over 10,000 remote villages, promoting economic empowerment and financial literacy. Transformed lives through accessible financial infrastructure.",
      category: "FinTech",
      unsplashId: "1559526324-4b87b5e36e44",
      metrics: [
        { value: "10K+", label: "Villages Reached" },
        { value: "50K+", label: "New Accounts" }
      ]
    },
    {
      title: "Tenyne",
      subtitle: "Workforce-as-a-Service Excellence",
      description: "Transforming how businesses access top-tier talent through innovative workforce-as-a-service solutions. Successfully delivered 50+ projects across diverse industries, providing scalable, on-demand access to specialized expertise that drives business outcomes and operational excellence.",
      category: "Workforce Solutions",
      unsplashId: "1522202176988-339a57c3d9e5",
      metrics: [
        { value: "50+", label: "Projects Delivered" },
        { value: "85%", label: "Client Retention" }
      ]
    }
  ]

  const blogPosts = [
    {
      title: "The Future of Digital Twin Technology in Smart Cities",
      excerpt: "Exploring how digital twins are revolutionizing urban planning and infrastructure management, creating more sustainable and efficient cities.",
      category: "Technology",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop"
    },
    {
      title: "Strategic Project Management in the Age of AI",
      excerpt: "How artificial intelligence is transforming project management practices and enabling data-driven decision making at scale.",
      category: "Project Management",
      date: "Jan 8, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    {
      title: "Building Resilient Organizations Through Operational Excellence",
      excerpt: "Key strategies for creating adaptive, resilient business operations that thrive in uncertain economic environments.",
      category: "Business Strategy",
      date: "Dec 28, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        {/* Enhanced 3D Particle Background */}
        <div className="absolute inset-0 opacity-40">
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <ParticleGrid />
            </Suspense>
          </Canvas>
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-8 py-32"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 leading-tight">
                <span className="text-primary">Himanshu Shukla</span>
                <br />
                <span className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  Project Management & Digital Transformation Consultant
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-slate-700 mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              14+ years of transformative leadership experience, from ideation to execution,
              bridging the gap between vision and value, ensuring your project delivers measurable impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-6 justify-center"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-bold flex items-center gap-2 text-lg"
              >
                View Projects <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white/80 backdrop-blur-sm text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all text-lg"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Redesigned Stats Section - Better Alignment */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="stats-section max-w-6xl mx-auto"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <AnimatedStat value={14} label="Years Experience" suffix="+" delay={0} />
                <AnimatedStat value={100} label="Project Value" suffix="M+" delay={200} />
                <AnimatedStat value={30} label="Efficiency Gain" suffix="%" delay={400} />
                <AnimatedStat value={7} label="Industry Sectors" suffix="" delay={600} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-slate-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-display font-bold mb-6 text-primary">
              Strategic Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions to transform your business and drive sustainable growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-display font-bold mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By - Company Logos Auto-Scrolling Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-display font-bold text-primary mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-lg text-slate-600">
              From startups to Fortune 500 companies
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-50 to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center">
                {['HCL Technologies', 'Tenyne', 'Manipal', 'WINNIIO', 'DCarbon', 'Tech Innovators'].map((company) => (
                  <div key={`${company}-${i}`} className="px-8 py-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all min-w-[200px] flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-700">{company}</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section - Light Theme with 5-Project Layout */}
      <section id="projects" className="py-32 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-display font-bold mb-6 text-primary">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transformative initiatives that showcase innovation and impact across industries
            </p>
          </motion.div>

          {/* 2-3 Staggered Grid Layout for 5 Projects */}
          <div className="space-y-8">
            {/* First Row - 2 Featured Projects */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.slice(0, 2).map((project, index) => (
                <ExpandableProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>

            {/* Second Row - 3 Projects */}
            <div className="grid md:grid-cols-3 gap-8">
              {projects.slice(2, 5).map((project, index) => (
                <ExpandableProjectCard key={project.title} project={project} index={index + 2} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Professional Photo Space */}
      <section id="about" className="py-32 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-display font-bold mb-6 text-primary">
              About Me
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic partner with 14+ years of transformative leadership experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16 items-center">
            {/* Professional Photo Space */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-1"
            >
              <div className="relative">
                {/* Placeholder for professional photo */}
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                  <div className="text-center text-white p-8">
                    <Users className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-semibold">Professional Photo</p>
                    <p className="text-xs opacity-80 mt-2">Replace with actual image</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
              </div>

              {/* Achievement cards below photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 space-y-4"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 flex items-center gap-4">
                  <Award className="w-10 h-10 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl text-primary">50+</h4>
                    <p className="text-sm text-slate-600">Projects Delivered</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 flex items-center gap-4">
                  <Target className="w-10 h-10 text-purple-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl text-primary">98%</h4>
                    <p className="text-sm text-slate-600">Client Satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2"
            >
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed mb-8">
                <p>
                  I'm a strategic partner with <strong>14+ years of transformative leadership experience</strong>,
                  specializing in turning visionary concepts into tangible business value. My approach combines
                  innovative strategies with practical solutions for business growth and resilience.
                </p>
                <p>
                  My expertise spans across diverse sectors including <strong>Climate-tech, Fintech, SaaS,
                  Banking, Digital Twin, Ed-tech, and Financial Services</strong>. I've successfully influenced
                  over <strong>$100M+ in project value</strong> while consistently delivering
                  <strong> 30% average efficiency increases</strong>.
                </p>
                <p>
                  I believe in bridging the gap between vision and value, ensuring every initiative delivers
                  measurable impact. Whether it's leading digital transformation, optimizing operations, or
                  implementing cutting-edge technologies, I bring a unique blend of technical expertise and
                  strategic thinking.
                </p>
              </div>

              {/* Industry Expertise */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Rocket className="w-7 h-7 text-blue-600" />
                  Industry Expertise
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Climate-Tech', 'Fintech', 'SaaS', 'Banking', 'Digital Twin', 'Ed-tech', 'Financial Services', 'Sustainability'].map((industry, i) => (
                    <motion.div
                      key={industry}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                      <span className="text-slate-700 font-medium">{industry}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-display font-bold mb-6 text-primary">
              Latest Insights
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Thoughts on technology, strategy, and business transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.title} post={post} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-bold"
            >
              View All Articles <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section with Illustrations */}
      <section id="contact" className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                <Mail className="w-10 h-10" />
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Let's Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Remarkable Together
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to transform your organization? Let's connect and discuss how we can drive impact together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Left Column - Contact Info with Illustration Background */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Background Illustration */}
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Animated connection nodes */}
                  <motion.circle
                    cx="50" cy="50" r="8"
                    fill="#60A5FA"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="150" cy="50" r="8"
                    fill="#A78BFA"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="100" cy="150" r="8"
                    fill="#F472B6"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <motion.circle
                    cx="100" cy="100" r="12"
                    fill="#10B981"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  />
                  <motion.line
                    x1="50" y1="50" x2="100" y2="100"
                    stroke="#60A5FA"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.line
                    x1="150" y1="50" x2="100" y2="100"
                    stroke="#A78BFA"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.line
                    x1="100" y1="150" x2="100" y2="100"
                    stroke="#F472B6"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </svg>
              </div>

              {/* Contact Info Cards - Full Height */}
              <div className="relative z-10 h-full flex flex-col justify-center space-y-6">
                {[
                  { icon: <Mail className="w-6 h-6" />, title: 'Email', value: 'contact@himanshushukla.com', href: 'mailto:contact@himanshushukla.com' },
                  { icon: <Linkedin className="w-6 h-6" />, title: 'LinkedIn', value: 'Connect with me', href: '#' }
                ].map((contact, i) => (
                  <motion.a
                    key={contact.title}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-300 mb-1">{contact.title}</p>
                      <p className="font-semibold text-lg">{contact.value}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 flex-shrink-0" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Your Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none transition-all text-white placeholder-slate-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none transition-all text-white placeholder-slate-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Company (Optional)</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none transition-all text-white placeholder-slate-400"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Project Details</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none transition-all text-white placeholder-slate-400 resize-none"
                      placeholder="Tell me about your project and how I can help..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                <p className="text-sm text-slate-400 mt-6 text-center">
                  I typically respond within 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-slate-400">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Himanshu Shukla
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Strategic consulting for transformative growth. Bridging vision and value
                through innovative project management and digital transformation.
              </p>
              <div className="flex gap-4">
                <Rocket className="w-5 h-5 text-accent" />
                <span className="text-sm">Trusted by startups, scale-ups to MNCs</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Projects', 'Services', 'About', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="hover:text-accent transition-colors cursor-pointer">Project Management</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Digital Transformation</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Business Operations</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Himanshu Shukla. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
