'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, TrendingUp, Users, DollarSign, Target } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Digital Twin Consortium",
      subtitle: "Advancing Global Digital Twin Standards",
      category: "Digital Twin Ecosystem",
      description: "Leading AI automation initiatives for the world's largest digital twin community",
      fullDescription: "Leading AI automation initiatives and testbed management for the Digital Twin Consortium, the world's premier organization for digital twin standards and best practices. Managing business process optimization through Microsoft Power Platform, AI Agents, and advanced analytics while coordinating activities across 13+ working groups spanning 31 countries with 200+ member organizations.",
      challenge: "The Digital Twin Consortium needed to scale operations and improve efficiency across a rapidly growing global community of diverse stakeholders while maintaining high standards for collaboration and knowledge sharing.",
      solution: "Implemented comprehensive AI-driven automation using Microsoft Power Platform, developed intelligent workflows with AI Agents, created advanced analytics dashboards, and established streamlined processes for testbed management and cross-functional collaboration.",
      impact: [
        "Achieved 40% improvement in operational efficiency",
        "Coordinated 13+ working groups across 31 countries",
        "Managed 200+ member organizations",
        "Automated critical business processes using AI",
        "Established robust testbed management framework"
      ],
      technologies: ["Microsoft Power Platform", "AI Agents", "Power Automate", "Power BI", "SharePoint", "Advanced Analytics"],
      metrics: [
        { icon: <Users className="w-5 h-5" />, value: "200+", label: "Member Companies" },
        { icon: <Target className="w-5 h-5" />, value: "31", label: "Countries" },
        { icon: <TrendingUp className="w-5 h-5" />, value: "40%", label: "Efficiency Gain" }
      ],
      image: "1451187580459-43d4b3e77425",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      id: 2,
      title: "DCarbon Solutions",
      subtitle: "Empowering the Clean Energy Transition",
      category: "Clean Energy Transition",
      description: "Revolutionizing Renewable Energy Certificates: Unlocking Value for Residential Solar",
      fullDescription: "Leading the charge in sustainable energy transformation through innovative blockchain-based certification systems. DCarbon Solutions is building a transparent marketplace for renewable energy certificates that empowers homeowners and drives clean energy adoption through cutting-edge technology.",
      challenge: "Residential solar installations lacked efficient mechanisms to monetize renewable energy certificates, limiting homeowner ROI and slowing clean energy adoption.",
      solution: "Developed a blockchain-based platform to streamline REC generation, trading, and verification, making it accessible for residential solar owners to participate in clean energy markets.",
      impact: [
        "Built comprehensive REC marketplace platform",
        "Implemented blockchain-powered verification system",
        "Reduced certification processing complexity",
        "Enabled transparent tracking of environmental impact"
      ],
      technologies: ["Blockchain", "Smart Contracts", "IoT Integration", "Data Analytics"],
      metrics: [
        { icon: <Target className="w-5 h-5" />, value: "Platform", label: "REC Marketplace" },
        { icon: <TrendingUp className="w-5 h-5" />, value: "Blockchain", label: "Powered Solution" },
        { icon: <Users className="w-5 h-5" />, value: "Scalable", label: "Infrastructure" }
      ],
      image: "1509391366261-7c1db99679f5",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      title: "WINNIIO AB",
      subtitle: "Smart Building Management with Digital Twin",
      category: "Digital Twin Technology",
      description: "Developed a platform for real-time collaboration managing smart heating systems",
      fullDescription: "Created a comprehensive digital twin platform that revolutionizes building management through AI-powered predictive maintenance, real-time energy optimization, and self-learning algorithms. The platform integrates IoT sensors, machine learning models, and intuitive dashboards to provide unprecedented control and insights into building operations.",
      challenge: "Traditional building management systems lack predictive capabilities and operate reactively, leading to energy waste and unexpected maintenance costs.",
      solution: "Built a digital twin platform incorporating cutting-edge AI and IoT technologies for self-learning building management that optimizes energy consumption and predicts maintenance needs before failures occur.",
      impact: [
        "Achieved 30% reduction in energy consumption across managed buildings",
        "Managed 15+ commercial and residential buildings",
        "Reduced maintenance costs by 40% through predictive analytics",
        "Improved occupant comfort scores by 25%"
      ],
      technologies: ["Digital Twin", "AI/ML", "IoT Sensors", "Real-time Analytics", "Predictive Maintenance"],
      metrics: [
        { icon: <TrendingUp className="w-5 h-5" />, value: "30%", label: "Energy Savings" },
        { icon: <Target className="w-5 h-5" />, value: "15+", label: "Buildings Managed" },
        { icon: <DollarSign className="w-5 h-5" />, value: "40%", label: "Cost Reduction" }
      ],
      image: "1486406146456-42eaccf5fd1c",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 4,
      title: "Banking the Unbanked",
      subtitle: "Financial Inclusion at Scale",
      category: "Financial Inclusion",
      description: "Extended banking services to over 10,000 remote villages",
      fullDescription: "Spearheaded a transformative financial inclusion initiative that brought comprehensive banking services to underserved rural communities across India. Through innovative mobile banking solutions, agent network development, and financial literacy programs, this project empowered millions to access formal financial services for the first time.",
      challenge: "Over 10,000 remote villages lacked access to basic banking services, limiting economic growth and trapping communities in cash-based systems with no access to credit or savings mechanisms.",
      solution: "Designed and implemented a comprehensive rural banking infrastructure combining mobile technology, trained local banking agents, and simplified digital interfaces tailored for low-literacy users.",
      impact: [
        "Reached 10,000+ previously unbanked villages",
        "Opened 50,000+ new bank accounts",
        "Enabled $20M+ in microcredit disbursements",
        "Trained 500+ local banking agents",
        "Achieved 85% customer retention rate"
      ],
      technologies: ["Mobile Banking", "Agent Network", "Financial Literacy Programs", "Biometric Authentication"],
      metrics: [
        { icon: <Users className="w-5 h-5" />, value: "10K+", label: "Villages Reached" },
        { icon: <Target className="w-5 h-5" />, value: "50K+", label: "New Accounts" },
        { icon: <DollarSign className="w-5 h-5" />, value: "$20M+", label: "Credit Disbursed" }
      ],
      image: "1559526324-4b87b5e36e44",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      title: "Tenyne",
      subtitle: "Workforce-as-a-Service Excellence",
      category: "Workforce Solutions",
      description: "Transforming how businesses access top-tier talent through innovative workforce solutions",
      fullDescription: "Transforming how businesses access top-tier talent through innovative workforce-as-a-service solutions. Successfully delivered 50+ projects across diverse industries, providing scalable, on-demand access to specialized expertise that drives business outcomes and operational excellence. Tenyne bridges the gap between dynamic business needs and expert talent availability.",
      challenge: "Organizations struggle to find and retain specialized talent for project-based work, leading to delayed initiatives and inflated costs from traditional staffing models.",
      solution: "Built a comprehensive workforce-as-a-service platform connecting businesses with pre-vetted experts across technology, consulting, and operational domains. Implemented agile engagement models that scale with project needs.",
      impact: [
        "Delivered 50+ successful projects across industries",
        "Achieved 85% client retention rate",
        "Reduced time-to-talent by 60%",
        "Built network of 200+ specialized professionals",
        "Enabled flexible scaling for enterprise clients"
      ],
      technologies: ["Talent Management Platform", "Project Management Tools", "Collaboration Systems", "Analytics Dashboard"],
      metrics: [
        { icon: <Target className="w-5 h-5" />, value: "50+", label: "Projects Delivered" },
        { icon: <Users className="w-5 h-5" />, value: "85%", label: "Client Retention" },
        { icon: <TrendingUp className="w-5 h-5" />, value: "200+", label: "Expert Network" }
      ],
      image: "1522202176988-339a57c3d9e5",
      gradient: "from-orange-500 to-red-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-slate-600 hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 text-primary">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Transforming industries through strategic innovation, cutting-edge technology, and measurable impact.
              Explore how we've delivered value across diverse sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative group ${index % 2 === 1 ? 'md:col-start-2' : ''}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative bg-white rounded-3xl shadow-elegant overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${project.image}?w=800&h=600&fit=crop`}
                      alt={project.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`}></div>
                  </div>
                </motion.div>

                {/* Project Content */}
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold mb-4`}>
                      {project.category}
                    </div>

                    <h2 className="text-4xl font-display font-bold text-primary mb-4">
                      {project.title}
                    </h2>

                    <p className="text-xl text-accent font-medium mb-6">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-600 leading-relaxed mb-6">
                      {project.fullDescription}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {project.metrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ y: -5 }}
                          className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 shadow-md border border-slate-100"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white mb-2`}>
                            {metric.icon}
                          </div>
                          <div className="text-2xl font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-slate-600">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-full font-semibold shadow-lg`}
                      >
                        Get in Touch <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-gradient-to-br from-primary to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss how we can deliver measurable impact for your organization.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-primary rounded-full font-bold text-lg shadow-2xl"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-display font-bold mb-4">Himanshu Shukla</h3>
              <p className="text-slate-400 leading-relaxed">
                Strategic Project Management Consulting & Digital Transformation Expert
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Projects', 'Services', 'About', 'Blog', 'Contact'].map((item) => (
                  <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                    <div className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                      {item}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="space-y-2 text-slate-400">
                <div>LinkedIn</div>
                <div>Email</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Himanshu Shukla. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
