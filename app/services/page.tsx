'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Target, Zap, TrendingUp, CheckCircle, ArrowRight, Briefcase } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      icon: <Target className="w-12 h-12" />,
      title: "Strategic Project Management Consulting",
      tagline: "From Vision to Reality",
      description: "Expertly guide complex initiatives from vision to reality, ensuring alignment with business goals and maximizing ROI through data-driven strategies and agile methodologies.",
      fullDescription: "Transform your organization's most ambitious projects into measurable success stories. Our strategic project management approach combines proven methodologies with innovative thinking to ensure your initiatives deliver maximum value while staying on time and within budget.",
      benefits: [
        "End-to-end project lifecycle management",
        "Risk mitigation and contingency planning",
        "Stakeholder alignment and communication strategies",
        "Agile and hybrid methodology implementation",
        "Resource optimization and allocation",
        "Performance metrics and KPI tracking"
      ],
      deliverables: [
        "Comprehensive project roadmaps",
        "Risk assessment and mitigation plans",
        "Stakeholder communication frameworks",
        "Performance dashboards and reports",
        "Change management strategies"
      ],
      industries: ["SaaS", "FinTech", "Clean Energy", "Healthcare", "Manufacturing"],
      color: "from-blue-500 to-purple-600",
      stats: [
        { value: "100+", label: "Projects Delivered" },
        { value: "$100M+", label: "Value Managed" },
        { value: "30%", label: "Avg. Efficiency Gain" }
      ]
    },
    {
      id: 2,
      icon: <Zap className="w-12 h-12" />,
      title: "Digital Transformation Consulting",
      tagline: "Navigate the Digital Revolution",
      description: "Navigate the digital revolution with confidence. We craft tailored strategies to integrate cutting-edge technologies, optimize processes, and cultivate a culture of innovation for sustainable growth.",
      fullDescription: "Accelerate your organization's digital journey with strategic guidance that goes beyond technology implementation. We help you reimagine business processes, enhance customer experiences, and build the digital capabilities needed to thrive in a rapidly evolving landscape.",
      benefits: [
        "Digital maturity assessment and gap analysis",
        "Technology stack evaluation and optimization",
        "Process digitization and automation",
        "Data-driven decision-making frameworks",
        "Digital culture transformation",
        "Innovation lab setup and management"
      ],
      deliverables: [
        "Digital transformation roadmap",
        "Technology architecture blueprints",
        "Process automation strategies",
        "Change management programs",
        "Training and capability building plans"
      ],
      industries: ["Retail", "Banking", "Education", "Real Estate", "Logistics"],
      color: "from-purple-500 to-pink-600",
      stats: [
        { value: "50+", label: "Transformations Led" },
        { value: "3x", label: "Avg. ROI Increase" },
        { value: "60%", label: "Process Efficiency" }
      ]
    },
    {
      id: 3,
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Business Operations & Development",
      tagline: "Operational Excellence at Scale",
      description: "Elevate your operational efficiency and drive innovation. We optimize core business processes, implement robust performance metrics, and foster a culture of continuous improvement to boost productivity and profitability.",
      fullDescription: "Unlock your organization's full potential through systematic operational improvements. We analyze, redesign, and optimize your core business processes to eliminate waste, reduce costs, and create sustainable competitive advantages.",
      benefits: [
        "End-to-end process mapping and optimization",
        "Performance management system design",
        "Quality assurance frameworks",
        "Supply chain optimization",
        "Cost reduction strategies",
        "Operational resilience planning"
      ],
      deliverables: [
        "Process optimization reports",
        "Performance measurement frameworks",
        "Standard operating procedures",
        "Cost-benefit analyses",
        "Continuous improvement playbooks"
      ],
      industries: ["Manufacturing", "E-commerce", "Healthcare", "Telecom", "Energy"],
      color: "from-indigo-500 to-purple-600",
      stats: [
        { value: "40%", label: "Cost Reduction" },
        { value: "25%", label: "Revenue Growth" },
        { value: "80%", label: "Client Retention" }
      ]
    }
  ]

  const approach = [
    { step: "01", title: "Discovery & Assessment", description: "Deep dive into your business challenges, goals, and current state to identify opportunities." },
    { step: "02", title: "Strategy Development", description: "Design tailored solutions aligned with your vision and measurable objectives." },
    { step: "03", title: "Implementation", description: "Execute with precision, leveraging best practices and agile methodologies." },
    { step: "04", title: "Optimization & Scale", description: "Continuous improvement and knowledge transfer for sustainable success." }
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
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions to transform your business and drive sustainable growth through strategic innovation and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - New Modern Design */}
      <section className="pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  {/* Icon Section */}
                  <div className="relative p-8 pb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg mb-6`}
                    >
                      {service.icon}
                    </motion.div>

                    <h3 className="text-2xl font-display font-bold text-primary mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                      {service.title}
                    </h3>
                    <p className="text-accent font-semibold text-sm mb-3">{service.tagline}</p>
                    <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                  </div>

                  {/* Stats Section */}
                  <div className="relative px-8 pb-6">
                    <div className="grid grid-cols-3 gap-3">
                      {service.stats.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                        >
                          <div className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="relative px-8 pb-8">
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all`}
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Details Accordion - Expandable Sections */}
          <div className="mt-16 space-y-6">
            {services.map((service, index) => (
              <motion.details
                key={`details-${service.id}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden border border-slate-100"
              >
                <summary className={`cursor-pointer p-8 flex items-center justify-between hover:bg-gradient-to-r hover:${service.color} hover:bg-opacity-5 transition-all`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white`}>
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary">{service.title}</h4>
                      <p className="text-sm text-slate-500">Click to see details</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-400 group-open:rotate-90 transition-transform" />
                </summary>

                <div className="px-8 pb-8 pt-4">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Benefits */}
                    <div>
                      <h5 className="font-bold text-primary mb-4">Key Benefits</h5>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h5 className="font-bold text-primary mb-4">Deliverables</h5>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Industries */}
                    <div>
                      <h5 className="font-bold text-primary mb-4">Industries Served</h5>
                      <div className="flex flex-wrap gap-2">
                        {service.industries.map((industry, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold text-primary mb-6">
              Engagement Models
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Flexible engagement options designed to meet your unique needs and drive maximum value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project-Based Consulting */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all h-full">
                <div className="absolute top-6 right-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                    <Briefcase className="w-8 h-8" />
                  </div>
                </div>

                <h3 className="text-3xl font-display font-bold text-primary mb-4">
                  Project-Based Consulting
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Defined scope engagements with clear deliverables and timelines. Ideal for specific initiatives requiring expert guidance from start to finish.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Fixed scope and timeline with clear milestones</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Dedicated focus on specific business outcomes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Comprehensive documentation and knowledge transfer</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Flexible pricing based on project complexity</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-blue-200">
                  <p className="text-sm text-slate-500 mb-2 font-semibold">Best For:</p>
                  <p className="text-slate-700">Digital transformation initiatives, process optimization, new product launches, system implementations</p>
                </div>
              </div>
            </motion.div>

            {/* Strategic Advisory */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all h-full">
                <div className="absolute top-6 right-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg">
                    <Target className="w-8 h-8" />
                  </div>
                </div>

                <h3 className="text-3xl font-display font-bold text-primary mb-4">
                  Strategic Advisory
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Ongoing partnership providing continuous strategic guidance and support. Perfect for organizations seeking sustained transformation and growth.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Regular strategic sessions and guidance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">On-demand access to expertise and insights</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Continuous monitoring and optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Flexible monthly retainer arrangements</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-purple-200">
                  <p className="text-sm text-slate-500 mb-2 font-semibold">Best For:</p>
                  <p className="text-slate-700">Executive leadership support, ongoing transformation programs, scaling operations, strategic planning</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-slate-600 mb-6">
              Not sure which model fits your needs? Let's discuss your goals and find the perfect approach.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 px-8 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold text-white mb-6">
              Our Proven Approach
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A systematic methodology that ensures success from discovery to scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {approach.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < approach.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                )}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-full">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{phase.description}</p>
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
              Let's Build Something Great Together
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Schedule a consultation to discuss how we can help you achieve your business goals.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-primary rounded-full font-bold text-lg shadow-2xl"
              >
                Schedule Consultation
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
